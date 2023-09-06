Title: EthicalAds Newsletter - August 2023
Date: September 12, 2023
description: Updates from August 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2023-august-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@tunagraphy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">meriç tuna</a> on <a href="https://unsplash.com/photos/znT5MmTjASY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>



## New features

Our progress in August was:

* We started rolling out some pricing features directly into our ad server.
  Advertisers will start to get pricing estimates based on the targeting they select
  on new campaigns. For advertisers focusing on our [core audiences]({filename}../pages/advertisers.md#audiences),
  these will be spot-on, but might need adjusting for niche targeting options.
  This feature will get our network closer to self-serve.
* We released a small update to our content classifier
  that helped with some memory issues especially on very long web pages.
* We did a back-of-house upgrade to Django, one of our core dependencies,
  to the latest long-term supported version.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## August advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2023-08-01&end_date=2023-08-31

In August 2023:

* We generated **$40,317.18** for our publishers. This is down slightly from July.
* We had **175 publishers** on our network with at least one paid ad impression.
* We had **17,921,969** paid ad views across the world.

September is trending pretty close to August.
It's been the same story for a while that we are completely booked in the US and Canada
while having a bit of capacity in Europe.

While total paid ad views was down significantly,
this is mostly due to a small number of advertisers running or not running
very broadly targeted, low price campaigns that don't have a huge impact on revenue.


## Upcoming features

The major features in our upcoming roadmap for September:

* We've seen some increased advertiser demand for some reporting features
  that they can plug into their own dashboards.
  We're still gathering some requirements here and a lot of this demand
  comes from big advertisers who don't always move as fast as a nimble startup
  so this feature might roll out slowly.
  Initially, we're expecting to be able to have reports in Tableau
  update performance metrics automatically.
  If you're interested in this, please [get in touch]({filename}../pages/contact.md)!
* We should have that content piece we mentioned last month about what happens
  when a publisher on our network [truly goes viral](https://twitter.com/ethicaladsio/status/1626239820891832327).
* We also are planning another content piece about optimizing European ad campaigns
  and landing pages in the GDPR era.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
