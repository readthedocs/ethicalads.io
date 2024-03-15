Title: Publisher Frequently Asked Questions
url: publishers/faq/
save_as: publishers/faq/index.html
description: These are common questions from publishers about the EthicalAds network including how ads are shown, where they appear, and how performance is measured.

**Contents**

[TOC]

## What data can I see about the ads?

We have reports for the following data:

* **Revenue** - This shows the total revenue per day. The most important report :)
* **Geos** - Top countries your traffic comes from are monetizing
* **Advertisers** - Top advertisers on your site, and how much revenue you're getting from each
* **Keywords** - Site or [Page-specific keywords](https://ethical-ad-client.readthedocs.io/en/latest/#page-specific-keywords) and how much revenue each is getting you
* **Placements** - Allows you to track different [ad placements](https://ethical-ad-client.readthedocs.io/en/latest/#ad-placement-reporting) across your site (eg. homepage, blog sidebar)

Each report will have the following metrics:

* **Index**: The data that the report is based on, for example the date on the revenue report.
* **Views**: The number of views that your ads had. You can filter by paid, community, or house ads.
* **Clicks**: The number of clicks that your ads had.
* **Click-through rate (CTR)**: The ratio of Clicks to Views. We generally expect this to be 0.1% or higher.
* **View Rate**: The ratio of Views to Offers (ads requested from our server).
* **Revenue**: The amount of money that you have made.

## How do I improve View Rate?

View Rate will never be 100% because some users will close the browser after the ad is requested,
but before the ad is viewed.
If you have an ad that is loaded outside of the users viewport,
it won't be counted as viewed until the user scrolls to see it.
**Having the ad visible by default on page load ("above the fold") is the most effective way to have a high view rate.**

See our [publisher guide]({filename}../pages/publisher-guide.md) for more details and tips.


## Does it matter if I use text or image ads?

We sell a mix of CPC (paid per click) and CPM (paid per view) ads.
Ads that are viewed and clicked more get more revenue.
The better and more visible the placement, generally the more money we both make.
Some of our best performing publishers use the text ad format,
but in places that are very visible or persistent in the page design.


## Any restrictions on ad placements?

Yes, please read our full [Publisher Policy](/publisher-policy/#ad-display) on ad display.


## How much will I make?

These numbers will vary based on your audience and topics that you write about
since advertisers prices vary by geography and by topic.
In addition, the performance of your ad placements are a factor
since some advertisers pay per click rather than per impression.
Generally, publishers see around $2.00 per 1,000 pageviews (CPM).
North American pageviews usually bring in a little more than this.
Traffic from Europe, Australia, or New Zealand is typically right about $2
while ads shown to users in the rest of the world usually bring in less.


## How can I be paid?

Please read our full [Publisher Policy](/publisher-policy/#payouts) on payouts.


## Will I need to sign a contract?

There is no contract to sign.
If you decide you no longer want to show EthicalAds on your site,
you can just remove the ad client code.
If you decide to remove EthicalAds, we would appreciate it if you let us know why
you went in a different direction.
This feedback is how we improve our product.


## Why do I only see house ads?

You should generally see paid ads if you are in the US or EU.
If you're somewhere else in the world,
you might see paid ads or not.
The later you are in the day,
the more likely that you might see more unpaid ads if we haven't fully sold your specific location and keywords.
You can always look in your publisher dashboard to see more information on what is happening, once data has started to be collected.


## How do I ensure the ads will perform well on my site?

Please read our [Publisher Guide](/publisher-guide) for placement help.


## Analytics shows more pageviews than you're showing ad views. Why?

There are a number of reasons why this might happen.

* Ads have to be in the viewport for a full second in order to count as viewed.
  If the user navigates away, scrolls past the ad, or the ad isn't in the viewport for some reason
  like it requires scrolling to the ad on mobile,
  then we do not count an ad view and don't bill the advertiser.
* Your "view rate" in our reporting is the ratio of ads viewed to ads requested.
  <a href="#how-do-i-improve-view-rate">Improving your view rate</a> will close this gap.
* Notably, we do not bill advertisers for ads viewed by bots or over VPNs.
  We do our best to only charge advertisers when real people view and click their ads.
* Any request to us that is blocked, by an ad or tracker blocker cannot be viewed.
  We are on some ad blocker allow lists such as
  <a href="https://acceptableads.com/">Acceptable Ads</a> which helps minimize ads being blocked.
* Most of our advertisers focus on certain regions such as North America and Europe.
  If a substantial amount of your site's audience is from regions outside of those,
  we may not have all of our traffic sold in those regions.
  If you have house ads enabled, you will still see ad views in our reporting there,
  but they will not add to your revenue.


## How do you target ads?

We target ads on two primary things: location and keywords.
Location targeting uses the IP address of the client,
but we only target this to the Country and US State level.
Keyword targeting comes from either the site or page the ad is shown on.
Sites have default keywords,
but publishers can override this with [Page-specific keywords](https://ethical-ad-client.readthedocs.io/en/latest/#page-specific-keywords).
**We strongly recommend implementing Page-specific keywords to increase the success of your ads**,
if you have this metadata on your site.


## Is EthicalAds open source?

Yes, both our [ad server](https://github.com/readthedocs/ethical-ad-server)
and the [client](https://github.com/readthedocs/ethical-ad-client) that runs on publisher's sites are open source.
You can read more about our open source code and transparency [here]({filename}open-source.md).


## This sounds great, how do I sign up?

Simply fill out our [publisher application](/publishers/#inbound-form) form with some information,
and we'll get back to you right away.
