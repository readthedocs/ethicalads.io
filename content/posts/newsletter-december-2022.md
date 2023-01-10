Title: EthicalAds Newsletter - December 2022
Date: January 10, 2023
description: Updates from December 2022, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2022-december-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@frostroomhead?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rodion Kutsaiev</a> on <a href="https://unsplash.com/images/events/christmas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>



## New features

These are the major features we released in December:

* We automated our training process for [our ML model](https://github.com/readthedocs/ethicalads-model)
  that classifies content to help show the most relevant ad to users.
  We are using [LambdaLabs](https://lambdalabs.com/) on-demand GPU instances
  to train our model whenever there are changes and a single training costs about $1.
  Full disclosure: LambdaLabs has used EthicalAds.
* We released our [Q1 prospectus]({static}../prospectus/ethicalads-advertiser-prospectus.pdf)
  which included a price reduction for campaigns focusing on all developers.
  Our prices are updated quarterly based on our supply of ad space for various topics
  and the demand from our advertisers.
* Our [campaign calculator]({filename}../pages/advertisers-calculator.md)
  got a few improvements to help people go from calculating to onboarded and advertising with EthicalAds.
* We detailed our reporting interfaces in a new [landing page]({filename}../pages/advertiser-reporting.md).
  Advertisers frequently ask about the kind of information they get from us
  and we want to be as upfront as possible.


You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html) and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## December advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2022-12-01&end_date=2022-12-31&campaign_type=paid&revenue_share_percentage=All+shares&sort=name

In December 2022:

* We generated **$39,205.17** for our publishers. This was a slight increase on November.
* We had **148 publishers** on our network with at least one paid ad impression.
* We had **19,801,179** paid ad views across the world.
  This is a significant increase month-over-month but a lot of that is due to some lower priced
  but widely targeted campaigns.

While December held up pretty well in terms of growth, we are expecting a weaker January.
The beginning of the year is frequently a weaker time of year but we've started to see some advertisers
pull back and reduce spending.
Advertising is an easy area to cut in a tougher economic environment but it usually also comes back quickly.


## Upcoming features

The major features in our upcoming roadmap for January:

* We'll be ramping up our sales efforts in January to try to fill all of our inventory
  and this will take significant focus.
* In January, we plan to allow a way for advertisers to get report data out of a continually updated
  Google sheet in addition to our existing API.
* We aim to produce a content piece about the positives and negatives (but mostly positives)
  of ad blockers and tracker blockers.
  All of our team uses some sort of blocking technology and in many ways
  it actually results in a better ad ecosystem.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
