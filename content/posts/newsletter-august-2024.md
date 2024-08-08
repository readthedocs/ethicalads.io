Title: EthicalAds Newsletter - August 2024
Date: August 13, 2024
description: Monthly update from August 2024, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2024-august-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@mattragland?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matt Ragland</a> on <a href="https://unsplash.com/photos/flat-lay-photography-of-blue-backpack-beside-book-and-silver-macbook-02z1I7gv4ao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* We released some quality of life improvements for advertisers
  around cropping and resizing ads to fit [our specs]({filename}../pages/learning-hub/ad-design-and-specs.md).
* We wrote a [marketing piece]({filename}../posts/2024-niche-targeting-for-marketers.md)
  on the AI-powered niche targeting we are building.
  This goes along with our more [developer-focused explanation]({filename}../posts/2024-niche-ad-targeting.md).
* We recently read
  [The Elements of User Onboarding](https://www.useronboard.com/user-onboarding-ux-design/training/)
  by Samuel Hulick in our
  [book club]({filename}../posts/book-club-tips-and-reviews.md).
  Based on this, we made a few improvements to help our user onboarding including our
  new advertiser checklist and pointing to some existing guides we have to help advertisers
  create compelling ads.
* We made a small change to show the domain where the user will go
  when they click on an ad. This is a good move we've wanted to make in the name
  of transparency, one of our core differentiators as an ad network.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## July advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2024-07-01&end_date=2024-07-31

In July 2024:

* We generated **$41,421.21** for our publishers and they'll receive this payout this Thursday.
  This is a little higher than June even accounting for the extra day in July.
* We had **180 publishers** on our network with at least one paid ad impression.
* We had **16,615,674** paid ad views across the world. Fairly unchanged from the previous month.

July is having a little bit of a slow start,
but we expect to be inventory constrained within the next few days.
We are always looking for high-quality developer-focused sites
or free (ad supported) versions of developer-focused products to host our ads.
[Get in touch!]({filename}../pages/publishers.md#inbound-form)


## Upcoming features

The major features in our upcoming roadmap for August:

* We are continuing to work on our niche targeting
  using the [ML embeddings/page similarity]({filename}../pages/similar-pages.md?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas) and building it into our ad serving.
  We started testing in July and performance was pretty bad. Keeping ads fast is very important to keeping them performant.
  We're going to continue working on this in August.
* We're continuing some of the work we started earlier this year on
  [rotating ads automatically](https://ethical-ad-client.readthedocs.io/en/latest/index.html#automatic-ad-rotation).
  We're going to begin rotating ads (with limits) when the tab is switched or the window is minimized
  and then comes back into focus.
  This feature is now complete and we're going to be testing it this month.
* We are working on some changes to support a "run of network" blend across geos and topics.
  Many our advertisers buy geo-targeted campaigns
  and we want an easy way to buy campaigns that give a good mix of traffic across a range of geos
  while still making sure the campaign fills a minimum percentage in specific regions.
  Think of a campaign that will fill 25% in North America, 25% in Europe, and 25% across Asia,
  and 25% the rest of the world.
  The changes to make this possible are mostly built already and most of this work will be
  to position and price these campaigns. This lets advertisers buy a wide cross-section
  of our network and then focus on what is performing best and lets us ensure we sell more of our
  hard-to-sell traffic for our publishers.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
