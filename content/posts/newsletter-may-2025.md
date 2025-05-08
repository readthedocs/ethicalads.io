Title: EthicalAds Newsletter - May 2025
Date: May 12, 2025
description: Monthly update from May 2025, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2025-may-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@alschim?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alexander Schimmeck</a> on <a href="https://unsplash.com/photos/pink-and-yellow-flowers-under-blue-sky-during-daytime-ew5bPnKWY_Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* We rolled out two-factor authentication on our adserver for both publishers and advertisers
  as an opt-in feature. This was requested primarily by developer publishers
  and we are supporting both TOTP authenticator codes as well as backup one-time codes.
* We build a change where advertisers can set a daily cap on their ad buys.
  In many cases, this isn't necessary because our ad server already paces campaigns over
  the length of their campaign, but it can be useful in cases where campaigns are paused
  or when there's a prolonged period of low fill rate (eg. holidays).


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## April advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2025-04-01&end_date=2025-04-30

Last month:

* We generated **$37,346.21** for our publishers and they'll receive this in a payout next week.
  April ended up pretty close to March in terms of revenue.
* We had **177 publishers** on our network with at least one paid ad impression.
* We had **18,849,912** paid ad views across the world. This is down a bit from last month mostly due to reduced global buys.

April started to pick up toward the end of the month and I'm expecting May
to be a bit higher than April.


## Upcoming features

The major features in our upcoming roadmap for May:

* Following up on the [improvements we built with DuckDB]({filename}../posts/2025-duckdb-pair-with-postgres.md),
  we are building a number of improvements to the aggregated data that we show to advertisers and publishers.
  This should make a lot of our reports faster both on our dashboard and to generate the data that goes into them.
* We are working to improve our automated renewals for advertisers.
  Currently, advertisers can set campaigns to automatically renew
  but we are working on improvements to automate the billing around those campaigns.
* We have some styling improvements prepared on our ad client that publishers can use to better style ads
  on their site using CSS properties (here's the [PR](https://github.com/readthedocs/ethical-ad-client/pull/219)).
  This will roll out in May.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
