Title: EthicalAds Newsletter - February 2021
Date: March 8, 2021
description: Our February ads update, including stats and commentary, on our progress as we build EthicalAds
tags: newsletter, community
authors: David Fischer
image: /images/posts/2021-feb-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@szmigieldesign?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lukasz Szmigiel</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


[comment]: # (The queries run to get this data, then computed in a spreadsheet for publisher rev)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=50.0)
[comment]: # (?start_date=2020-09-01&end_date=2020-09-30&campaign_type=paid&revenue_share_percentage=70.0&sort=revenue)


## February advertising stats

February was our best month ever for advertising.
Despite being a shorter month, we were still able to beat our previous bests from [January]({filename}/posts/newsletter-january-2021.md).

In February 2021:

* We generated **$11,671.47** for our publishers, a 5.5% increase over January.
* We had **106 publishers** on our network with a paid ad impression.
* We had **6,435,571** paid ad views across the world.
* Read the Docs, our own publisher, generated **$17,404.14** on 7,165,169 paid ad impressions.

We're working hard to grow revenue for all our publishers, and we're expecting another record month in March.


## New features

Here's the major features we added in the last month:

* On the business side, we released our [Q2 prospectus]({static}/prospectus/ethicalads-advertiser-prospectus.pdf)
  which contains some of our new testimonials and some small additions like mentioning that CPC-based pricing is available.
* On our ad client, we rolled out our dark mode improvements
  built on [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
  to our beta client which is used by Read the Docs. This means sites that want to try it out can do so.
  Some Sphinx documentation themes already are.
* On our ad server, we improved a few reports (notably a report required by [Acceptable Ads](https://acceptableads.com/))
  and made some tweaks to speed up our throughput.
* In our infrastructure, we're really pushing the I/O on our server which is writing tens of times per second.
  We worked to try to alleviate some of this pressure and that will continue into March.
* While not strictly ads related, Read the Docs did extend an offer to a new person to join our team!
  More on that later.

You can always see our latest updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html).


## Tricky bits

We still aim to hire a part-time [account manager]({filename}/pages/jobs/account-manager-part-time.md)
to help manage advertiser and publisher relationships.
Hiring is always hard and takes a lot of time to do well.
If this role sounds interesting to you,
please [get in touch with any questions](mailto:ads@ethicalads.io?subject=Ads%20account%20manager%20role)
or [apply]({filename}/pages/jobs/account-manager-part-time.md)!
In addition, Read the Docs is hiring a [frontend developer](https://blog.readthedocs.com/job-frontend/).

Infrastructure will continue to cause some headaches in the next few months.
Read the Docs Community completed a move from Azure to AWS in February
and EthicalAds will probably follow suit in the next few months.
In addition, we've been hitting I/O limits as I mentioned above and while we've made improvements there
and our latency is pretty darn good, we still want to do more.
Our data points pretty directly to faster ads performing better.


## Upcoming features

The major features in our upcoming roadmap:

* We want to give both advertisers and publishers high level data right in their dashboard when they first login.
  These are stats like exactly how much advertising money they've spent or earned this month
  and how this month compares with last month.
  This feature is still on our roadmap but we didn't wrap it up in February.
* We're finally going to expand our advertising logic to take into account price when selecting ads.
  At least one advertiser has agreed to be a flex advertiser with part of their ad buys in Q2
  which will give them lower prices but not guaranteed inventory.
  This helps us ensure that as many ad slots have paid ads for our publishers while letting us balance our inventory.
* One publisher agreed to try out EthicalAds for some custom ad placements with non-standard sizes
  and per-month pricing rather than CPM.
  We have begun pitching this to advertisers and we may build some additional features to better support this based on interest.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
