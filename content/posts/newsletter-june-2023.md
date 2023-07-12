Title: EthicalAds Newsletter - June 2023
Date: July 12, 2023
description: Updates from June 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2023-june-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/es/@roger_ce77?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roger Ce</a> on <a href="https://unsplash.com/photos/SxQL8bkrR0Y?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>



## New features

Our progress in June was:

* We released an update to our ad client that will improve
  single page app (SPA) support. Many publishers use single page apps
  which rewrite the content of the page but don't actually reload it.
  For long lasting pages that transition based on user interaction,
  it may make sense to rotate the ad.
* We wrote a part two blog post of the ad industry that details
  [modern invasive ad targeting]({filename}../posts/2023-ad-industry-overview-part-ii.md)
  and how it's still possible to get great ad performance without it.
* We added the ability for advertisers to request a new campaign.
  This is a first step toward making our ad platform more self-serve,
  something we've wanted for a long time.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## June advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2023-06-01&end_date=2023-06-30

In June 2023:

* We generated **$40,336.00** for our publishers. This is up marginally from May.
* We had **169 publishers** on our network with at least one paid ad impression.
* We had **24,375,898** paid ad views across the world.

June outperformed for us in terms of expectations made in late May.
Overall, we continue to be almost completely booked up in the US and Canada
and have a little bit of spare capacity in Europe.
As a result, we lowered our European ad prices slightly for Q3 outside of the UK.

Looking forward, we expect similar performance in July to June.


## Upcoming features

The major features in our upcoming roadmap for July:

* We built some frequency capping features that will allow
  setting maximum percentages of a campaign that will fill
  on certain publishers or in certain countries or regions.
  This should give better performance to our advertisers.
* We are going to release our ad client as a UMD JavaScript module
  which should allow it to be installed by NPM and similar tools.
  This is a quality of life improvement a few publishers have asked for.
* For advertiser campaigns that absolutely need to stop on a certain date
  because they promote a certain event or time-sensitive release,
  we are implementing a "hard stop" date.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
