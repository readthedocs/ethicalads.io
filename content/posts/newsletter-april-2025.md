Title: EthicalAds Newsletter - April 2025
Date: April 15, 2025
description: Monthly update from April 2025, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2025-april-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@frostroomhead?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rodion Kutsaiev</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-pink-flower-JemKKIu-bQA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* We released our [Q2 advertiser prospectus](https://www.ethicalads.io/prospectus/ethicalads-advertiser-prospectus.pdf).
* Internally, we released a big improvement in estimating audience sizes for niche campaigns.
  This was enabled by the [analytical improvements we built with DuckDB]({filename}../posts/2025-duckdb-pair-with-postgres.md)
  that we wrote about a couple months ago.
* Our fixed header ad placement was slightly delayed due to testing but is rolling out in April.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## March advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2025-03-01&end_date=2025-03-31

Last month:

* We generated **$38,899.15** for our publishers and they'll receive this in a payout today. February picked up considerably toward the end and March stayed about as strong throughout.
* We had **176 publishers** on our network with at least one paid ad impression.
* We had **22,122,792** paid ad views across the world. This is back up from February based on a few broad campaigns.

April is trending pretty similarly to March.
We haven't yet seen significant economic blowback from current events.


## Upcoming features

The major features in our upcoming roadmap for April:

* We are preparing a release that enables advertisers and publishers to use 2FA on our management platform.
  We will be supporting TOTP authenticator codes as well as backup one-time codes.
* We are working to improve our automated renewals for advertisers.
  Currently, advertisers can set campaigns to automatically renew
  but we are working on improvements to automate the billing around those campaigns.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
