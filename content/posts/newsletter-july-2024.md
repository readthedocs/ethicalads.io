Title: EthicalAds Newsletter - July 2024
Date: July 8, 2024
description: Monthly update from July 2024, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2024-july-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@kerber?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marko Blažević</a> on <a href="https://unsplash.com/photos/yellow-sunflower-field-during-sunset-GFFGe2eGmiM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


## New features from the previous month

* We released a downloadable ["Creatives that Convert"]({filename}../pages/creatives-that-convert.md) guide
  with data specific to our network and ads from real advertisers
  where they changed the copy, image, or targeting to get a performance boost.
  It's gated content that we're using for marketing but we're happy to share it with
  any client or prospective client past or present.
* We updated our [prospectus]({static}../prospectus/ethicalads-advertiser-prospectus.pdf) for Q3.
  The biggest change is that we are now discounting campaigns that automatically renew.
  Advertisers can opt-in to have their campaign automatically renew
  and get a 10% discount for doing so. Most of our business is already from renewals
  but knowing how many campaigns are renewing will help us better plan our inventory
  and avoid any gaps in ad sales.
* There are some new improvements to our ad client
  specifically requested by publishers to help them detect, manage, and report errors.
  Basically, we overhauled how our client logs warnings and errors to more closely align
  with what publishers want on their sites.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## May advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2024-06-01&end_date=2024-06-30

In June 2024:

* We generated **$39,392.12** for our publishers.
* We had **179 publishers** on our network with at least one paid ad impression.
* We had **16,769,158** paid ad views across the world.

June ended up a bit better than May and we continue to have very little open inventory in July.
We are expecting another fairly strong month and we're running into limits finding additional
high quality sites to show ads.


## Upcoming features

The major features in our upcoming roadmap for July:

* We have some quality of life improvements coming from advertisers
  around cropping and resizing ads to fit our specs.
  These are ready and will be released in the coming days.
* We are working our niche targeting
  using the [ML embeddings/page similarity]({filename}../pages/similar-pages.md?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas) into our ad serving. At first, we are rolling this out to a small number
  of campaigns to make sure we get the performance (both click-through rates as well as serving speed)
  we need to roll this out more widely. We're starting wider testing this month in July.
* We are working on a small change to our ad format to show the domain where the user will go
  when they click on an ad. We've wanted this for a while and we think it's a good move in the name
  of transparency, one of our core differentiators as a network.
* We're continuing some of the work we started earlier this year on
  [rotating ads automatically](https://ethical-ad-client.readthedocs.io/en/latest/index.html#automatic-ad-rotation).
  We're going to begin rotating ads (with limits) when the tab is switched or the window is minimized
  and then comes back into focus.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
