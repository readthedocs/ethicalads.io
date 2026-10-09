Title: EthicalAds Newsletter - October 2026
Date: October 13, 2026
description: Quarterly update for Q4 2026, covering the previous 3 months and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2026-q4-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@danieljschwarz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel J. Schwarz</a> on <a href="https://unsplash.com/photos/trees-beside-light-posts-7-oM8eFUkFQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>

## New features from the previous 3 months

- We began a pilot with Flask, the Python web framework, to offer a ["docs takeover" package]({filename}../pages/landing-pages/flask-placement.md).
  This new option gives an advertiser exclusive, 100% share of voice
  on some of our premier publishers for a week or a month.
  We expect to have a few more of these takeover packages available in the next few months.
- We improved our [ad client's handling of dark mode](https://ethical-ad-client.readthedocs.io/en/latest/index.html#custom-dark-selector).
  Specifically, sites that have custom ways of handling dark and light mode toggles
  now have a better way to make ads look good.
- Our advertiser reporting API added several new endpoints. We've already seen advertisers
  use AI coding tools to build reporting dashboards with their ad data.
- Our updated [Q4 prospectus]({static}../prospectus/ethicalads-advertiser-prospectus.pdf) is out.
  There was a small [price increase]({filename}../pages/advertisers-pricing.md)
  across North America and Europe reflecting that we sold all our inventory, and then some, last quarter.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).

## Q3 advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2026-07-01&end_date=2026-09-30

Over the last quarter:

- We generated **$109.1k** for our publishers.
  This is slightly down quarter over quarter. While revenue per publisher is mostly flat,
  we saw a couple of publishers transition from our network to direct sales.
- We supported **223 active publishers** on our network.
- We served **49.2M** paid ad views globally.
  Our global ad views were down since last quarter although this was mostly due to a reduction
  in lower-priced global campaigns which consume many impressions at low cost.

Demand across both North America and Europe has been very strong all year.
We continue to be limited by how many high-quality publishers we can onboard.
If you operate a site looking to monetize your audience of developers,
we'd love to [hear from you]({filename}../pages/publishers.md).


## Upcoming features

The major features in our upcoming roadmap for the next few months:

- We are continuing to develop and test infrastructure to serve ads directly from the "edge,"
  without needing to connect to our servers at all.
  We are aiming to launch this in the next quarter.
- As mentioned earlier, we have a few more per-publisher docs takeover opportunities
  coming in the next few months.
- In the last few months, we released a few minor improvements to help broadly focused campaigns
  perform better through similar improvements to our [niche targeting]({filename}../pages/niche-targeting.md).
  We are planning a few more features around that before the new year.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
