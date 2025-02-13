Title: DuckDB and PostgreSQL Make a Great Pair for Analytical Processing
Date: February 25, 2025
description: This post shows how using DuckDB and parquet files for analytical workloads while sticking with Postgres for transactional queries makes for an easy way to get great performance from your database stack.
tags: postgresql, duckdb, performance, engineering
authors: David Fischer
image: /images/posts/2025-duckdb-postgres.jpg
image_credit: <span>Image created with <a href="https://chatgpt.com/" title="A duck and an elephant working on a computer to build an analytics platform. The image should have a lighthearted feel, be colorful, but be a bit funny and strange.">ChatGPT</a></span>


Typically, our blog lives at the intersection of privacy, advertising,
and building our business in this niche.
This time, however, we're going to delve into some database scaling issues
we have been hitting for some time and how we're solving them with DuckDB
on top of our regular daily driver of PostgreSQL.


## Postgres can do just about everything

At both EthicalAds and at our parent company Read the Docs, we use PostgreSQL heavily.
We use Postgres to store basically all our production data and to be our "source of truth"
for all advertising stats, billing, and payouts to publishers.
Postgres handles everything and is among the most dependable pieces of our infrastructure.
Postgres can handle [ML embeddings]({filename}../posts/2024-niche-ad-targeting.md)
with [pgvector](https://github.com/pgvector/pgvector) for better contextual ad targeting
and combined with a read replica we scaled our setup to
[hundreds of writes per second]({filename}../posts/2021-hundred-requests-per-second-with-django.md).
At EthicalAds, we generally field ~4-5M ad requests per weekday and Postgres
handles this kind of transaction processing effortlessly.


## What about analytical processing?

However, one area where we've struggled a bit with Postgres is on analytical queries.
When a new advertiser prospect comes to us and asks how much ad inventory we have on content
related a tool like Terraform, we want to be able to answer that easily.
By aggregating data ahead of time, we can query the data much faster when an advertiser pulls up a report
or needs an estimate on how long their campaign will take.

<div class="postimage text-center">
  <img class="w-100 shadow-lg" src="{static}../images/posts/2025-duckdb-postgres-usage.png" alt="Expensive analytical queries can do a number on your database.">
  <p>Expensive analytical queries can do a number on your database.</p>
</div>

We run these expensive aggregations across our database nightly during lower traffic times
and store the results in a series of tables of daily aggregated data by publisher, by country, by advertiser, and so on.
Altogether, queries take around 45 minutes to an hour and add significant load to our read replica.
Occasionally, (or not so occasionally if they happen to coincide with the [autovacuum](https://www.postgresql.org/docs/current/runtime-config-autovacuum.html)), they will timeout and have to be re-run.
Despite how much we love Postgres at EthicalAds, this specifically has felt like one of the most brittle pieces of our setup.


## Column-wise storage & DuckDB

Typically, these kinds of expensive aggregation queries are better fits for column databases, data warehouses and [OLAP databases](https://en.wikipedia.org/wiki/Online_analytical_processing) generally.
We considered building out a data warehouse or other kinds of column oriented databases
but never found something we really liked and we were always hesitant to add a second production system
that could get out of sync with Postgres.
Postgres additionally has extensions to add some of these capabilities
(eg. [citus](https://github.com/citusdata/citus?tab=readme-ov-file#creating-tables-with-columnar))
but these solutions all either didn't work for our use case or
weren't supported on Azure's Managed Postgres, where we are hosted.
This is where using DuckDB came to our rescue.

[DuckDB](https://duckdb.org/) is an in-process, analytical database and toolkit for analytical workloads.
It's sort of like SQLite but for analytical workloads and querying data anywhere in a variety of formats.
Like SQLite, you either run it in your app's process (Python for us)
or you can run its own standalone CLI.
It can read from CSV or Parquet files stored on disk or in blob storage
or directly from an SQL database like Postgres.

Because most of our aggregations are for hourly or daily data and then data virtually never changes
once it's written, it's a great match for a write-once system.
As a result, we began writing parquet files on a daily basis to cloud storage.
[Apache Parquet files](https://parquet.apache.org/), are files optimized for column-wise data files
that are widely supported by various tools including Python and DuckDB.


<blockquote class="blockquote mb-2">
  <p class="mb-2">
    “Apache Parquet is an open source, column-oriented data file format designed for efficient data storage and retrieval.”
  </p>
  <p class="small">- <a href="https://parquet.apache.org/">parquet.apache.org</a></p>
</blockquote>

Using Python and DuckDB, it's easy to query a day or a month's worth of data
whether from a developer laptop or directly from a server
without adding any load on your production database.
Queries that took 5-10 minutes against Postgres frequently take just a few seconds
against parquet files optimized for the purpose.
Here's an example of how to query cloud storage parquet files directly from your app server in Python:

```python
import duckdb
from fsspec import filesystem

# Support for S3 is even more straight-forward
duckdb.sql("INSTALL azure")
duckdb.sql("LOAD azure")

azure_account_name = os.getenv("AZURE_ACCOUNT_NAME")
azure_account_key = os.getenv("AZURE_ACCOUNT_KEY")
azure_conn_string = f"DefaultEndpointsProtocol=https;AccountName={azure_account_name};AccountKey={azure_account_key}"

duckdb.register_filesystem(filesystem("abfs", connection_string=azure_conn_string))

# Query the daily parquet files
# Want an ORM? There's a SqlAlchemy driver for DuckDB
duckdb.sql("""SELECT COUNT(*) FROM read_parquet("abfs://datalake/2025-02-01.parquet");""")

# Query a month of data
duckdb.sql("""SELECT COUNT(*) FROM read_parquet("abfs://datalake/2025-01-*.parquet");""")
```


## Joining column-wise data with Postgres

Creating our data lake of parquet files is cool,
but the real power comes from "joining" this columnar optimized data back up against Postgres:


```python
import duckdb

# Enable the Postgres extension for DuckDB
duckdb.sql("INSTALL postgres")
duckdb.sql("LOAD postgres")

pg_conn_string = os.getenv("REPLICA_DATABASE_URL")
duckdb.sql(
    f"ATTACH IF NOT EXISTS '{pg_conn_string}' AS ads_pg (TYPE POSTGRES)"
)

# "Join" a daily aggregation back up with our Postgres source of truth
# This query is nearly instant but would take tens of seconds normally
duckdb.sql("""
    SELECT
        adv.name as 'advertiser_name',
        COUNT(*) as 'impression_cnt'
    FROM read_parquet("abfs://datalake/2025-02-01.parquet") pq
    INNER JOIN ads_pg.adserver_advertiser adv
        ON pq.advertiser_id = adv.id
    GROUP BY adv.name
    ORDER BY impression_cnt DESC
    LIMIT 10;
""")
```

This provides a number of advantages including:

* Unlike some data warehouses that need **lots** of de-normalized data,
  our parquet files only need the data required to make whatever aggregations we need.
  This keeps them small and fast.
  "Joining" the aggregated data back to Postgres for additional data is fast and easy.
* It's possible to overload your production database with analytical queries,
  but you can't easily overload cloud storage from reading files.
* It's even possible with the `COPY` command to run aggregations against parquet files
  and copy the aggregated back to Postgres directly from DuckDB.
  This sounds counter-intuitive but if you're running many different kinds of aggregations
  against the same data, this can be faster than querying directly.


## A couple gotchas and other challenges

"But David. Won't it be slow to run a SQL query against a remote file?"
Firstly, these queries are strictly analytical queries, nothing transactional.
Remember that with any of the major clouds these blob storage files are going to be in or near
the data center where the rest of your servers are running.
Querying them is a lot faster than I expected it to be.
For reports, estimates and other analytical workloads where folks are used to waiting a few seconds,
it works fairly well.

While DuckDB is pretty smart about [cross database queries](https://duckdb.org/2024/01/26/multi-database-support-in-duckdb.html),
I put "joins" in scare quotes in the previous section for a reason.
These are not traditional database joins and at some level DuckDB is querying records
from one database into memory and using it to query the other database.
In some situations, including some we saw in our workloads,
performance can degrade pretty quickly and spike memory and CPU usage on both Postgres and the DuckDB process.
Expensive, cross-database queries require a bit of extra testing and scrutiny.

Lastly, if anybody from the Azure team happens to be reading this,
we'd love it if you'd add [pg_parquet](https://github.com/CrunchyData/pg_parquet/) to Azure Managed Postgres
now that it [supports Azure storage](https://www.crunchydata.com/blog/pg_parquet-an-extension-to-connect-postgres-and-parquet).
Dumping parquets from Postgres directly would be much more optimized than
doing that from DuckDB. DuckDB is still amazing for reading these files once they're written,
but creating them directly with Postgres would be better still.


## Wrapup

Hopefully this was helpful to see some concrete examples of using DuckDB in addition to PostgreSQL
for analytical workloads. We believe there's a lot of potential to use DuckDB with parquet files
for these kinds of queries in more places on EthicalAds and with Read the Docs as well.

Thanks for tuning in to one of our more technical posts
about some of the challenges of building ad network without invasive tracking.
Please [let us know]({filename}../pages/contact.md#inbound-form) if you have any ideas or feedback on our product or service.
We always love to hear from you.
