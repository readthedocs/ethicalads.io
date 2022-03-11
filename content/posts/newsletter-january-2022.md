Title: EthicalAds Newsletter - January 2022
Date: February 10, 2022
description: Updates from January, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community
authors: Ra Cohen
image: /images/posts/2022-january-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> on <a href="https://unsplash.com/s/photos/snow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


## New features

These are the major features we released in the last month:

* In the ad server, we've added tighter Stripe integrations for our advertisers to view
  previous invoices.
* We also revamped our keyword aggregation algorithms to run much faster and more reliably.
* A publisher's view rate is now displayed in their publisher portal as a key indicator of their placement quality. View rate is the number of times an ad is viewed, which is higher when it's more visible on the page. It will likely never be 100%, since some users will close the browser after requesting an ad, but before it is displayed.
* Upgraded to Python 3.8 along with many other small bug fixes.

You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html) and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## January advertising stats

In January 2022:

* We generated **$30,543.39** for our publishers.
* We had **110 publishers** on our network with at least one paid ad impression.
* We had **13,326,966** paid ad views across the world.

Our holiday slump mildly carried over into January
resulting in 2% less paid views and 4% less ad revenue.
On the plus side, our [Sponsorship Management Platform](https://www.ethicalads.io/sponsorship-platform/?ref=jan-newsletter) Beta
served over **2,700,000** sponsored logo placements in January.

## Tricky bits

For the first time in 6 months, our current largest hurdle to growth
is expanding our advertisers and their campaigns.
We have available ad inventory across all regions.
This is partly an aftershock of advertisers taking a break during the holidays
and amplified by the fact that some of our larger advertisers
manually split their campaigns between domains on the EthicalAds network.
Thus, some of our sites have consistently high Fill Rates (>80%) whereas
others flunctuate wildly between 40-90% based on the amount of daily traffic.
We're happy to report that we're starting several new campaigns in February.
Thus February is already on track to beat January
in terms of both views and publisher revenue.


## Upcoming features

The major features in our upcoming roadmap:

* Reworking our topic-detection infrastructure and algorithm in our server.
* Highlighting our 10% discount on ad buys over $3000 in the flight report page.
* New graphics summarizing the volume of views and popular topics across our network.
* Rolling out the floating ad placement to more domains on Read the Docs.



Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
