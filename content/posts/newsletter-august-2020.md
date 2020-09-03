Title: EthicalAds Newsletter - August 2020
Date: Sept 3, 2020
description: Our first community update via our newsletter.
tag: ads, newsletter, community
authors: Eric Holscher
image: /images/posts/2020-august-update.png

We're excited to share you with our first newsletter,
where we'll share updates about our progress.
Inspired by Eric Berry and the CodeFund team,
we'll also share our struggles and challenges.
We believe strongly that being transparent and ethical go hand in hand,
and will strive to share as much as we can.

[comment]: # (The queries run to get this data, then computed in a spreadsheet for publisher rev)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=50.0)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=70.0)

## Advertising Stats

August is the first full month that we've served ads on our EthicalAds network.
We're excited to already be supporting so many publishers.
Making sure developers are paid for their work is a huge part of our mission,
and revenue paid out is our most important stat.

In August:

* We generated **$5,375.22** for our publishers
* We had **50 publishers** on our network with a paid ad impression

## New features

We're working hard on building new features as we get more feedback from our advertisers and publishers.
It's still early days,
and we really appreciate how understanding everyone has been with any confusion in our processes.

The big things we added this month:

* We added an explicit [Publisher Policy]({filename}../pages/publisher-policy.md) to set expectations in our relationship with our publishers.
* We added an [FAQ]({filename}../pages/advertising-faq.md) to the EthicalAds site.
* We documented our [Ad Vision]({filename}../pages/vision.md) on the website, showing how we're different than other ad networks.
* We improved our fraud detection mechanisms to be smarter about rate limiting ad views and detect when users are using a proxy to view the documentation.
* Publishers can now store payout setting in the dashboard directly. This improves our workflow for paying out publishers, hopefully making it smoother.

You can always see the latest code updates in our [changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html).

## Tricky bits

Our current priority is getting publishers more money. We know that we're a little bit below what some other networks are able to pay because of how new we are. We're fully focused on improving this situation, and it has happened for a few reasons.

Our largest issue in August was getting added to the main ad block lists. We're currently working with the team at Eyeo (AdBlock Plus) to get our new ads on the Acceptable Ads list. Ad blocking removed 30% of our total traffic, which was a large impact. Being put on Acceptable Ads [got around 50% of those blocked views back]({filename}ad-blocker-update.md) when it happened to Read the Docs in 2018.

There are two other places we're working to improve this situation: raising our prices and selling more of our inventory. Since we had to scramble to get everything sold when we launched in July, we didn't have time to adjust our prices and do a full sales cycle with our advertisers. The other aspect is that a lot of our APAC inventory is unsold. For some of our publishers, this means 50% of ad views aren't currently being monetized. We generally recommend [falling back to other content](https://ethical-ad-client.readthedocs.io/en/latest/#customization) in these cases, if that is something you're comfortable doing.

## Upcoming features

We have a number of new things on our roadmap for September.
We'll try to share our upcoming roadmap,
so folks have an idea of what we're working on this month.

Our large roadmap items are:

* Improve our codebase to support multiple placements for one Publisher. This will be useful for sites with multiple placements that want to track performance between them.
* Unify the old advertising pages on Read the Docs with our new EthicalAds ones, making everything a bit clearer.
* Improve Publisher onboarding, including sharing more information about expectations in a Publisher prospectus.
* Ship our Q4 prospectus, with some additional improvements around explaining what EthicalAds is.
* Write more blog content around how to market to developers.

We're always open to additional feedback and ideas on our approach,
so feel free to [email us](mailto:ads@readthedocs.org) directly.
