Title: EthicalAds Newsletter - May 2023
Date: June 6, 2023
description: Updates from May 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2023-may-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@appolinary_kalashnikova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Appolinary Kalashnikova</a> on <a href="https://unsplash.com/photos/WYGhTLym344?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>



## New features

Our progress in May was:

* We released an updated [Q3 prospectus]({static}../prospectus/ethicalads-advertiser-prospectus.pdf).
  The major changes were slightly increased US & Canada prices and slightly decreased European pricing.
  This is in response to our supply and demand where we've been completely booked in North America
  for essentially all of Q2. We are also highlighting a slightly higher discount for campaigns
  exceeding $25k per quarter.
* We wrote a blog post that features the
  [lay of the land of the ad industry]({filename}../posts/2023-ad-industry-overview.md).
  We should have the second installment this month detailing how and why these players
  pass around personal identifiable info.
* We made some first steps toward phasing out some of our earlier approaches toward topic detection
  such as client side keyword and topic detection.
  We've been very happy with the performance and accuracy of our machine learning topic detection.
  This process will continue over the coming months.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## May advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2023-05-01&end_date=2023-05-31

In May 2023:

* We generated **$39,935.33** for our publishers. This is down slightly from April.
* We had **163 publishers** on our network with at least one paid ad impression.
  This is unchanged from April.
* We had **22,129,392** paid ad views across the world.

We are expecting a small slow down in June especially in Europe,
but overall we've seen steady although noisy growth in terms of advertisers
and campaign sizes.


## Upcoming features

The major features in our upcoming roadmap for June:

* We don't do frequency capping (limit showing the same ad to the same user)
  to quite the extent that many ad networks do due to privacy concerns.
  Instead, we focus on frequency capping across time and across a campaign.
  We're working on some additional features in this area which we believe
  will improve campaign performance and improve ad variety for publishers and site visitors.
* We have an update coming on our ad client that will improve
  single page app (SPA) support. Many publishers use single page apps
  which rewrite the content of the page but don't actually reload it.
  For long lasting pages that transition based on user interaction,
  it may make sense to rotate the ad.
* We are rolling out a number of quality of life improvements
  for ourselves around speeding up the publisher payout process
  and configuring campaigns.
* We built a new report for advertisers
  that shows a performance breakdown by topic and intended to release it in May.
  It should be released in the next week.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
