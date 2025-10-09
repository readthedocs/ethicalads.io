Title: EthicalAds Newsletter - October 2025
Date: October 13, 2025
description: Quarterly update for Q4 2025, covering the previous 3 months and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2025-q4-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@szmigieldesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lukasz Szmigiel</a> on <a href="https://unsplash.com/photos/pathway-between-inline-trees-during-golden-hour-ps2daRcXYes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


This is our first update after switching to the quarterly cadence.
There will be a bit more to say and the numbers will be bigger because they cover 3 months.
However, you can expect the same level of transparency about the network we're building.
The next update will come early next year.


## New features from the previous quarter

* Some of the improvements we made earlier this year around reporting on campaigns for larger advertisers
  has paid off as a few more advertisers have started using it.
  Larger advertisers have different wants than smaller advertisers: they're running more campaigns in more places
  and they want to see it all in one place. They want performance data in their own system.
* We continued to make improvements to our [niche targeting]({filename}../pages/niche-targeting.md).
  A big breakthrough that has helped a lot with classifying content is to group pages by domains
  where we can (many, but not all domains cover similar content),
  and then classify new content based on similarity to these domains.
  This can make ad targeting into a problem of showing the right ad based on domains an advertiser wants to target
  while still being flexible enough to add new relevant content to their targeting.
* We published a [tech-focused blog]({filename}../posts/2025-niche-targeting-updates.md)
  on this classification and domains and how new language models
  have made this process much more powerful.
* We released an [automatic light-dark mode](https://ethical-ad-client.readthedocs.io/en/latest/index.html#adaptive-color-scheme) on our ad client.
  We already supported pages with dark mode, but this change helps toggle ads automatically
  for sites that use a UI to toggle their theme between light and dark mode.
* A lot of advertiser campaigns are renewed month to month or quarter to quarter.
  We have greatly simplified this process for advertisers who want to do that.
  Renewing an existing campaign can be totally automated for the advertiser
  or even if there's a gap before the renewal, the advertiser can now do it with 1 button.
* We released a [Q4 prospectus]({static}../prospectus/ethicalads-advertiser-prospectus.pdf).
  There was a small price increase of roughly 5% in North American topic targeted content.
  We have been consistently sold out or close to it in North America for the last few quarters.


<div class="postimage text-center">
  <video class="w-100" controls>
    <source src="{static}../video/light-dark-mode.mp4" type="video/mp4">
  </video>
  <p>Video showing the automatic light-dark mode feature for the ad client</p>
</div>


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## Q3 advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2025-07-01&end_date=2025-09-30

Just a reminder that these stats are now for the quarter. I'll post a bit of detail here about how it compares with the monthly stats we previously reported.

Last quarter:

* We generated **$116.7k** for our publishers and they'll receive September's portion of this in a payout this week.
  Despite reporting numbers quarterly, we are continuing to pay publishers monthly.
  This number is roughly in-line with previously monthly numbers.
* We had **187 publishers** on our network with at least one paid ad impression.
  This is slowly growing and the trickiest thing is finding high quality publishers
  who are as good for advertisers as the rest of the publishers on our network.
* We had **56.6M** paid ad views across the world.
  On a monthly basis, this is very similar to what we reported previously.

We are seeing strong demand across our network and we are seeing very robust demand
from advertisers especially for North America and Western Europe.


<div class="postimage text-center" id="chart">
  <iframe height="525" class="w-100 shadow-lg border-0"
  src="https://observablehq.com/embed/34e5f0a6a04bbf16@117?cells=plot"></iframe>
  <p>This graph highlights some of the improvements we're making to niche targeting. This was taken from our <a href="/blog/2025/10/doing-math-with-embeddings-for-better-ai-ad-targeting/">blog</a> on domains classification and clustering.</p>
</div>


## Upcoming features

The major features in our upcoming roadmap for the rest of the year:

* As I mentioned, we're still making improvements constantly to our analyzer and to our niche targeting.
  One thing coming is we're going to start surfacing to publishers how much of their site has been
  analyzed for niche targeting. Since niche targeted campaigns are some of our highest demand and highest priced
  campaigns, this will give publishers an incentive to help get their sites analyzed.
  Sites can not be analyzed for a few reasons like the publisher blocks automated traffic
  or just challenges we need to work through for specific sites.
* Another big change we're planning to make is to make our analyzer better
  at processing smaller chunks of pages where ads appear.
* We've started to receive some publisher inquiries from developer AI tools.
  We believe this is a growth area for us although we aren't yet sure what the best way to serve these folks is.
  In a lot of cases, there aren't "pages" to analyze and instead there's interactions with AI agents or models
  and choosing the best ad to show depends on what users are asking the AI.
  We're exploring options about great ways to help these publishers monetize their AI tools.
  This may become a priority over the next few months.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
