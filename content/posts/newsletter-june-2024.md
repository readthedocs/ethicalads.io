Title: EthicalAds Newsletter - June 2024
Date: June 13, 2024
description: Monthly update from June 2024, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2024-june-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@xdesro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Henry Desro</a> on <a href="https://unsplash.com/photos/road-surrounded-by-black-high-rise-buildings-x4PKN_RXoX0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* We released an [advertiser testimonial]({filename}../pages/help-with-your-ads.md)
  from [Checkmk](https://checkmk.com/?utm_source=ethicalads-testimonial),
  a company in the IT/infrastructure monitoring space,
  that highlights how collaborating on getting the targeting, messaging, and ad copy all right
  helped them significantly improve their lead volume without increasing campaign costs.
  We believe this kind of feedback loop with a real person who knows our network and audience well
  is one of the strongest selling points of our network.
* We made a few changes to how we send transactional emails,
  that is, emails to advertisers and publishers who have actively signed up.
  Some of our emails were going to spam
  despite our best efforts to not spam people, only email people who sign up,
  and stop when they opt-out. We're hoping to have less of that going forward.
* Most of our ad server related updates this month focused
  on helping us better serve and triage support requests.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## May advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2024-05-01&end_date=2024-05-31

In May 2024:

* We generated **$37,051.13** for our publishers.
* We had **183 publishers** on our network with at least one paid ad impression. This number is slowly creeping up as we attempt to build our network while maintaining the quality.
* We had **14,657,971** paid ad views across the world.

May wasn't a great month but it was a good sized improvement on April.
June is shaping up to be even better.


## Upcoming features

The major features in our upcoming roadmap for June:

* We are almost done with a downloadable advertiser guide
  with data specific to our network and ads from real advertisers
  where they changed the copy, image, or targeting to get a performance boost.
* We are going to begin discounting campaigns that automatically renew.
  Advertisers will be able to opt-in to have their campaign automatically renew
  and get a 10% discount for doing so. Most of our business is already from renewals
  but knowing how many campaigns are renewing will help us better plan our inventory
  and avoid any gaps in ad sales.
* There are some publisher requested features to our ad client that will be released
  in the next couple weeks as well. These changes relate to how and when the client
  logs events and makes setup and integration mistakes more obvious.
* We are still working on better niche targeting
  using the [ML embeddings/page similarity]({filename}../pages/similar-pages.md?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas) features and use it directly in our ad serving.
* It may get pushed to July, but we're working on some advertiser quality of life improvements
  to help with resizing and cropping images.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
