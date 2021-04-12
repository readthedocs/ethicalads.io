Title: EthicalAds Newsletter - March 2021
Date: April 12, 2021
description: Our March 2021 ads update, including stats and commentary, on our progress as we build EthicalAds
tags: newsletter, community
authors: David Fischer
image: /images/posts/2021-mar-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@gaspanik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Masaaki Komori</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


[comment]: # (The queries run to get this data, then computed in a spreadsheet for publisher rev)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=50.0)
[comment]: # (?start_date=2020-09-01&end_date=2020-09-30&campaign_type=paid&revenue_share_percentage=70.0&sort=revenue)


## March advertising stats


March was another record month ever for advertising
although [Februrary]({filename}/posts/newsletter-february-2021.md) was better per day due to being a shorter month.

In March 2021:

* We generated **$23,994.57** for our publishers, another record but only 1% over February.
  Of this, $10,711.54 was to third-party publishers, with the rest to Read the Docs.
* We had **104 publishers** on our network with a paid ad impression.
* We had **14,768,103** paid ad views across the world.

We expected revenue to publishers other than Read the Docs to exceed our own revenue in March and that didn't happen.
However, that looks nearly certain in April due to some larger advertisers shifting toward the wider ad network.


## New features

Here's the major features we added in the last month:

* On the business side, we released a [media kit]({filename}/pages/press.md)
  to help us get more traction and be part of the privacy conversation around advertising
  which is an important goal and requires constant effort.
* On our ad server, we made a number of reporting improvements for both publishers and advertisers.
  These included showing more data, giving more high level overviews of data, and speeding up our existing reports.
* We started automatically including the publisher name when redirecting to an advertiser's site.
  The advertising industry could use a bit of transparency
  and advertisers sometimes don't know where their ads are being shown.
  Our aim is to be as transparent as possible and give advertisers the ability to make more informed decisions.
* We made a small tweak to our ad display algorithm when the same person requests multiple ads within a few seconds.
  We now cache the ad and show the exact same ad and only bill advertisers a single impression for it.
  For most publishers, this made almost no difference but for some this resulted in fewer ads being shown
  and therefore less revenue.
  We believe this is more fair to advertisers and incentivizes publishers to have good ad placements.
* In our infrastructure, we've solved most of our performance/IO problems from the previous month.
  We are archiving data out of our transactional database on a regular basis after it is processed
  to help with performance.
  Longer term, we will probably use a separate reporting database for both performance
  but for now, we're keeping it simple.

You can always see our latest updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html).


## Tricky bits

We still aim to hire an [account manager]({filename}/pages/jobs/account-manager-part-time.md)
to help manage advertiser and publisher relationships.
Initially, we were looking for somebody to work around 20 hours per week
but we've added a bit more range -- 20 to 32 hours -- to give the role a bit more flexibility.
We're looking for somebody who is early in their career or returning to their previous career
and wants to ease into it with a flexible position.

Hiring is always hard and takes a lot of time to do well.
If this role sounds interesting to you,
please [get in touch with any questions](mailto:ads@ethicalads.io?subject=Ads%20account%20manager%20role)
or [apply]({filename}/pages/jobs/account-manager-part-time.md)!
In addition, Read the Docs is hiring a [frontend developer](https://blog.readthedocs.com/job-frontend/).


## Upcoming features

The major features in our upcoming roadmap:

* Beginning in April, we're going to expand our advertising logic to take into account an ad's price and performance
  when choosing which ad to show.
  One advertiser has agreed to be a flex advertiser with part of their ad buys in Q2
  which will give them lower prices but not guaranteed inventory and this feature was a necessary step.
  This helps us ensure that as many ad slots have paid ads for our publishers while letting us balance our inventory.
  Initially, we expect this will drive a slight increase in revenue to publishers as we prioritize higher priced ads.
  Longer term, this aligns incentives to have better performing ads for advertisers and better performing placements on publisher sites.
* We are building improvements into both our ad client and ad server to improve our contextual targeting.
  We believe that good contextual targeting is one of the keys to our network's success.
  This lets advertisers reach the audience they want as well as possible without creepy targeting
  and without requiring publishers to do the work of categorizing all their content.
  By automatically categorizing content, we'll have more inventory for more niches that advertisers want to target.
  For publishers, this is also a win because better targeted ads cost more and bring in more revenue.
* For the last few months, we mentioned supporting custom ad formats as a sort of sponsorship.
  This has been deprioritized for now in favor of other improvements.
  However, we did get some interest on the sponsorship side.
  Some larger sites expressed interest in using our ad server to manage their own internal sponsorships
  while using our management interface and reporting.
  Depending on demand, we may build some more features around that.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
