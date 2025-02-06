Title: EthicalAds Newsletter - February 2025
Date: February 6, 2025
description: Monthly update from February 2025, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2025-february-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@michael75?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Michael</a> on <a href="https://unsplash.com/photos/snow-covered-pine-tree-under-cloudy-sky-S4lRLPNs_P0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* A new advertiser report with a domain breakdown report was released.
  This report will break down advertiser traffic
  by the domain where the ad was shown. Quite a few advertisers asked for this.
* We ran a few [niche targeting]({filename}../pages/niche-targeting.md) campaigns end-to-end
  and made a number of improvements including a large scanning project across almost all
  of the commonly browsed pages across our network. We're really excited about this feature
  and think it will yield better results for advertisers (it has so far)
  and enable us to target various developer niches that were too small to target previously.
* We have begun creating a data lake with DuckDB that will allow us to much more efficiently
  get estimates for how large various audiences are for both niche targeting and for just bespoke campaigns.
  For example, advertisers ask us how large of a campaign they could put together for backend devs
  (or SMS 2FA, or databases, or anything they can think of) across just a few countries or even a single country.
  This will allow us to have much more accurate estimates based on historical data.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## January advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2025-01-01&end_date=2025-01-31

Last month:

* We generated **$33,801.05** for our publishers and they'll receive this in a payout next week.
* We had **176 publishers** on our network with at least one paid ad impression.
* We had **23,585,060** paid ad views across the world.

January has historically started slowly and this year is no different.
We have a stronger February lined up.

We recently lowered prices on a [few audiences]({filename}../pages/advertisers-pricing.md)
so it's a good time to start a campaign if you've been on the fence.
If you're interested in running a campaign, [get in touch]({filename}../pages/advertisers.md#inbound-form)!


## Upcoming features

The major features in our upcoming roadmap for February:

* We hit a few snags but optimizing PayPal payouts but it should roll out this month.
  Did you know that PayPal charges an additional fee for making payments with their API?
* We're aiming to have a new ad format for sites that want a fixed header ad.
  This wasn't finished up last month.
* We're aiming to produce a tech-focused content piece about what we're doing with DuckDB
  and how it's been a great pair with PostgreSQL.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
