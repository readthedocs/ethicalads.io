Title: EthicalAds Newsletter - April 2026
Date: April 23, 2026
description: Quarterly update for Q2 2026, covering the previous 3 months and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2026-q2-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@ultratunafish?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tunafish</a> on <a href="https://unsplash.com/photos/green-and-brown-trees-under-white-sky-during-daytime-WL_ZnLK9luw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


## New features from the previous 3 months

* We are continuing to work on our [niche targeting]({filename}../pages/niche-targeting.md) and analyzer.
  However, we wanted to take some of our learnings and apply them to help all campaigns,
  even the ones that are targeted by topic or simply by geography.
  Advertisers frequently have multiple ads in their campaign and now we're using the same embeddings we use for niche targeting to select the ad we think will perform best
  based on the page context.
  It's a little early to say how this is performing, but we're expecting a small bump in performance across the network from this.
* We made some small improvements to make renewals even easier for advertisers
  since it's such a huge part of our business (~65%). Specifically, we have improved billing to allow advertisers to charge a card on file or request a manual invoice.
* Lately, there's been a bit more demand from publishers who operate their own LLMs
  and want to inject ads into LLM responses. We made some improvements specifically so these
  AI publishers can get the domain where the ad goes (something we've shown on our ads for a long time) and get an icon for the advertiser.
* In addition to all of this, we migrated our infrastructure from Azure to AWS.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## Q1 advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2026-01-01&end_date=2025-03-31

Last quarter:

* We generated **$161.8k** for our publishers and they received March's portion
  of this in a payout last week.
  At the beginning of the year, we were hoping to send $500k to publishers this year
  and it's looking like we're going to get there and then some.
* We had **210 publishers** on our network with at least one paid ad impression.
  This is slowly growing and we're seeing some publishers come in from other networks to ours.
  Interestingly, the most common way they're finding us is through ChatGPT and other AI chatbots.
  We've invested a little into making ourselves more discoverable by AI
  and it appears to be paying off a bit.
* We had **82.2M** paid ad views across the world.
  This is quite a bit higher than late last year and we've seen a bit of growth in global campaigns.
  We are continuing to see that in Q2.


## Upcoming features

The major features in our upcoming roadmap for the next few months:

* Last quarter, we launched a new [larger ad format]({filename}../posts/2026-larger-ad-formats.md).
  We're actively working on a change to make it trivial to request that format
  but fall back to our more common format if there's no matching advertiser.
* We're planning to surface metrics to publishers around how much of their site
  is indexed for niche targeting. The goal is to increase this by making the data
  more transparent.
* Because of the uptick in demand from publishers wanting to inject ads into LLM responses
  on their own sites, we're building a landing page specifically for these kind of publishers
  to explain why they should choose our network.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
