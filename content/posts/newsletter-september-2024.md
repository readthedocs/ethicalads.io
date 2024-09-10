Title: EthicalAds Newsletter - September 2024
Date: September 10, 2024
description: Monthly update from September 2024, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2024-september-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@hannah_e_d?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hannah Domsic</a> on <a href="https://unsplash.com/photos/autumn-leaves-on-body-of-water-2_gJeve_CBY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* We produced a blog post breaking down
  [Mozilla's new private ad attribution]({filename}../posts/2024-mozilla-private-ad-attribution.md).
  The post has analysis on what this means for ads and for privacy
  as well as some background of where this fits in the wider ecosystem of advertising and browsers.
* We made a lot of progress on our niche targeting
  using the [ML embeddings/page similarity]({filename}../pages/similar-pages.md?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas) and building it into our ad serving.
  Our first cut added over 100ms to ad serving which was totally unacceptable
  (we aim for 50ms total server time). After some fine tuning, we have this down to less than 10ms added time which isn't where we want it to be but good enough to proceed with testing.
* If you studiously watch our [pricing page]({filename}../pages/advertisers-pricing.md),
  you may have noticed that we have a new "run of network" option available.
  This lets advertisers buy a wide cross-section of our network
  at a lower price and then focus on what is performing best.
  It lets us ensure we sell more of our hard-to-sell traffic for our publishers.
* Going along with the performance improvements to our niche targeting,
  we released a number of other performance improvements to speed up ad serving and reporting.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## August advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2024-08-01&end_date=2024-08-31

In August 2024:

* We generated **$37,396.64** for our publishers and they'll receive this payout next Monday.
* We had **180 publishers** on our network with at least one paid ad impression.
* We had **20,205,465** paid ad views across the world.
  This is significantly up because we've sold more global campaigns.

August had a slow start as we had a couple advertisers delay starts of their campaigns.
However, we are currently over 98% sold out in our core markets.
We are always looking for high-quality developer-focused sites
or free (ad supported) versions of developer-focused products to host our ads.
[Get in touch!]({filename}../pages/publishers.md#inbound-form)


## Upcoming features

The major features in our upcoming roadmap for September:

* As we mentioned last month, we continued a test of having
  [rotating ads automatically](https://ethical-ad-client.readthedocs.io/en/latest/index.html#automatic-ad-rotation) when the browser or tab regains focus.
  After testing for a couple of days, we noticed that this caused a dip in ad performance.
  We have turned this off but we're going to continue working on that this month.
* With niche targeting starting to look reasonably performant,
  we are looking to widen that test to have a paid advertiser use it to target a desired niche.
* We are (again) working on a feature
  around automatic exports of reporting data to Google Sheets for use in ad dashboards
  like Tableau or Looker Studio. We have always had an API for reporting data,
  but a few advertisers have told us they want something easier.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
