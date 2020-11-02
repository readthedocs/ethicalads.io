Title: EthicalAds Newsletter - October 2020
Date: Nov 2, 2020
description: Our monthly update, including stats and commentary, on our progress as we build EthicalAds
tags: newsletter, community
authors: Eric Holscher
image: /images/posts/ethicalads-network.png

[comment]: # (The queries run to get this data, then computed in a spreadsheet for publisher rev)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=50.0)
[comment]: # (?start_date=2020-09-01&end_date=2020-09-30&campaign_type=paid&revenue_share_percentage=70.0&sort=revenue)

## Advertising stats

October was another productive month on our side.
We continue to onboard new publishers and advertisers.
Growing the network each month feels great,
and we're always looking for more folks to join.

In terms of development,
we've been focusing a lot on performance and reporting improvements.
Making sure ads load fast, and then you can understand what's going on with your site is primary development focus right now.

In October 2020:

* We generated **$7,580.43** for our publishers
* We had **72 publishers** on our network with a paid ad impression.
* We had **4,571,606** paid ad views across the world.

Notably, we actually had fewer ad views this month, mostly because one of larger publishers had some integration issues.
We were able to increase revenue though with fewer ads,
which shows that our pricing increases are starting to take effect.

## New features

The big things we added this month:

* We have started adding [testimonials](https://www.ethicalads.io/publishers/readthedocs/) to our website from our publishers and advertisers. We only have a couple completed, but will be adding more in the near future.
* We have added reporting for publishers that show Geo and Advertiser breakdowns. These are in beta and will be enabled for everyone this week.
* We have added [viewport tracking](https://github.com/readthedocs/ethical-ad-client/pull/29/) to our ad client. This is a backstop to our Publisher Policy, confirming that ads are actually viewed for billing purposes.
* We migrated our hosting infrastructure from a Docker-based solution to a VM-based solution. This brought a 3x improvement to our average server response latency, which is now 45ms on average and 75ms at the 99% percentile.
* As part of this server migration we have built the capability to do [periodic report generation](https://github.com/readthedocs/ethical-ad-server/pull/260/files). We're currently updating the Geo reports each hour, but will tweak this over time as we figure out what the best options here are.
* We also updated our ad integration on Read the Docs to use the standard ethical-ad-client. This is one of the last steps of making Read the Docs "just another publisher" and not be special.

You can always see our latest updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html).

## Tricky bits

It feels like we've managed to address most of our existing issues. Our server performance has been a nagging issue since launched, and it's very excited to have fixed it and seen quite impressive gains. Having additional infrastructure to handle periodic reporting is also another major thing we needed to do, so that we can add more reporting without impacting advertising performance.

We have a signed contract with the Acceptable Ads program, which is a major milestone. We expect this change to roll out early in November, which we forecast will bring an increase of 15% to most of our publishers revenue. This is a huge win, and remove a structural barrier that we faced to competing with other advertising networks.

One of our ongoing worries is about balancing supply and demand on the network. Especially with keyword targeting, it can be hard to maintain fill rates across our publisher network while also fully filling campaigns for our advertisers. We expect this will continue to be a difficult task forever, but we're slowly starting to understand how to balance this tension. We're also working to manage expectations on both sides, knowing that forecasting web traffic isn't an exact science.


## Upcoming features

Our upcoming roadmap has a few major tasks on it this month:

* We're planning to adapt our ad format to [break out a headline and a call to action](https://github.com/readthedocs/ethical-ad-server/issues/152). This will standardize our ad display, along with making sure that all our advertisers have ads that work across multiple formats.
* We're working on a Publisher Prospectus, which is similar to our [advertiser prospectus](https://www.ethicalads.io/prospectus/ethicalads-advertiser-prospectus.pdf) -- a single place to understand what being a publisher looks like.
* We didn't get to it last month, but we want additional publisher & advertiser landing pages. We hope to build topic-specific pages to share more information for specific audiences on these pages, to go along with our testimonials. 
* We started conversations about trademarking EthicalAds, but haven't applied for it yet. This process will take 4-6 months, but we do want to make sure we've gotten it started.
* We plan to take our expanded publisher reports and add similar improvements to our advertising reports.

There are many other small tasks we'll continue to work on, along with lots of email :)

Thanks again for following along on our journey, and we're excited to continue to build something we can all be proud of.

