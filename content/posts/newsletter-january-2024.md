Title: EthicalAds Newsletter - January 2024
Date: February 13, 2024
description: Updates from January 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2024-january-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@noemimk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Noémi Macavei-Katócz</a> on <a href="https://unsplash.com/photos/snow-covered-mountain-under-blue-sky-during-daytime-ozaowtqTE98?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>



## New features

Our progress in January was:

* We rolled out some initial ad rotations across our network to all publishers.
  Currently, we're only rotating ads that have been visible a full minute
  and then only when the user navigates an in-page link.
  Overall, about 1% of ads are being rotated based on these metrics
  with no drop in ad performance.
* We put together some incentives for great developer sites for trying EthicalAds.
  We are promising we'll beat their existing ad network's revenue for a similar placement by 10% for at least 3 months.
  If you've been thinking about trying EthicalAds, [let us know]({filename}../pages/publishers.md#inbound-form).
* We put together a content piece about advertising's (third-party)
  [cookieless future]({filename}../posts/2024-cookieless-advertising-future.md).
  This talks about why and how Chrome is phasing out third-party cookies
  and what the implications are for advertisers, publishers, and ad networks like ours.
  This is a positive privacy step and we were excited to hear
  [Sentry's success story](https://blog.sentry.io/we-removed-advertising-cookies-heres-what-happened/)
  removing third-party cookies from their homepage.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## January advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2024-01-01&end_date=2024-01-31

In January 2024:

* We generated **$42,745.38** for our publishers.
* We had **174 publishers** on our network with at least one paid ad impression.
* We had **16,906,108** paid ad views across the world.

Despite starting slow as people return to work
(developer sites are visited most when people are working),
we saw good traffic levels throughout the month.
Our ad inventory continues to be very tight in North America and Western Europe
with some openings for more globally targeted campaigns.


## Upcoming features

The major features in our upcoming roadmap for February:

* We had a few advertisers who wanted to target based on weekdays or weekends.
  That should roll out for advertisers who want it next month.
* We're working on a huge improvement to our [machine learning based contextual targeting]({filename}../post/2022-content-based-targeting.md).
  This will involve building some improvements
  that will let us target webpages similar to advertiser product landing pages.
  This will mean that for almost any developer product, we can find the content on our network
  that would be a great place to promote that product.
  We're aiming for a demo in March.
* For advertisers who want it, we can take a more actively manage their advertising.
  We can turn off lower performing ads or even slightly tweak ads to try to find something
  that performs even better. Our landing pages talking to these are mostly ready,
  but we're waiting on a few testimonials before they go live.
* We're still hoping to collaborate with a few advertisers who use Tableau (or something similar)
  to make sure we build exactly what they want in terms of reporting.
  If you're interested in this, please [get in touch]({filename}../pages/contact.md)!


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
