Title: EthicalAds Newsletter - June 2025
Date: June 5, 2025
description: Monthly update from June 2025, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2025-june-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Oulashin</a> on <a href="https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* We rolled out a number of optimizations to our aggregations and reports based on the
  [improvements we built with DuckDB]({filename}../posts/2025-duckdb-pair-with-postgres.md).
  Our reports are both faster and more robust and the data that generates these on a periodic basis
  (mostly nightly but some more frequently) are much faster and have a much lower rate of having to be re-run.
* We have rolled out an improvement to invoicing for advertisers who are automatically renewing campaigns.
  For a little while now, we have had a 10% discount for auto-renewing campaigns. Now it's possible for these
  invoices to be automatically created and billed to a card on file
  (paying manually with a bank transfer is still possible). This smoothes this process for recurring advertisers.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## May advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2025-05-01&end_date=2025-05-31

Last month:

* We generated **$37,937.94** for our publishers and they'll receive this in a payout by the 15th.
  This was a bit higher than April but only slightly and about what's expected given the extra day in the month.
* We had **178 publishers** on our network with at least one paid ad impression.
* We had **18,679,646** paid ad views across the world. This was pretty flat compared with April.

We are seeing very strong demand across North America and pretty robust demand but with some openings
in Europe and Oceania.


## Upcoming features

The major features in our upcoming roadmap for June:

* We are actively working on some improvements to our analyzer that we use for [niche targeting]({filename}../pages/niche-targeting.md).
  We are hoping to make it easier to use off the shelf models and LLM APIs in addition to ones we train.
  The goal is to be able to swap and rerun all the pages where our ads appear through a model quickly.
* We have some styling improvements prepared on our ad client that publishers can use to better style ads
  on their site using CSS properties (here's the [PR](https://github.com/readthedocs/ethical-ad-client/pull/219)).
  The goal was to roll this out in May, but it will happen in June.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
