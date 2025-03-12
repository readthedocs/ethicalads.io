Title: EthicalAds Newsletter - March 2025
Date: March 12, 2025
description: Monthly update from March 2025, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2025-march-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@luannhunt180?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">LuAnn Hunt</a> on <a href="https://unsplash.com/photos/seven-cherry-blossom-trees-under-blue-sky-cnfytRR0uEQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* There was a cool content piece we created about [how we're using DuckDB]({filename}../posts/2025-duckdb-pair-with-postgres.md)
  and parquet files combined with our usual workhorse of PostgreSQL for all our analytical needs.
* We completed the implementation of a fixed header ad that publishers can opt-in to use on their sites.
  This will roll out in the next week or two after it is done testing.
* We simplified PayPal payouts considerably on our end which should help us complete our publisher payouts faster.



You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## February advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2025-02-01&end_date=2025-02-28

Last month:

* We generated **$30,846.47** for our publishers and they'll receive this in a payout later this week. This is roughly in-line with the previous month when accounting for the number of days but the end of the month picked up considerably.
* We had **177 publishers** on our network with at least one paid ad impression.
* We had **16,806,100** paid ad views across the world. This is down from the previous month even accounting for fewer days in the month but mostly due to fewer very broad campaigns which come and go.

February ended much stronger than it started and ended much stronger than January. We're expecting March to be even better.


## Upcoming features

The major features in our upcoming roadmap for March:

* While working on the fixed header ad I mentioned above,
  we're going to make our ads a bit easier to customize for publishers using CSS variables.
  This should roll out over the next month.
* We're working on some big improvements in how accurately we can estimate audience sizes for niche campaigns.
  This was enabled by the [analytical improvements we built with DuckDB]({filename}../posts/2025-duckdb-pair-with-postgres.md).



Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
