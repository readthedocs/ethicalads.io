Title: The Cookieless Ad Future: Does Cookieless Advertising Work?
Date: January 30, 2024
description: In this post we'll share some examples of cookieless advertising working well, and show how it can work for you too.
tags: privacy, gdpr, adtech
authors: David Fischer
image: /images/posts/2024-cookieless-advertising.jpg
image_credit: <span>Created with <a href="https://openjourney.ai/" title="creepy ad targeting, invasive advertising, personalized advertising, ads that know what you think, ads that follow you around the internet, watercolor style">OpenJourney</a></span>


As an ad network that never uses advertising cookies,
you probably won't be surprised that we think cookieless advertising does work.
While many adtech companies will claim that it's impossible do effective advertising
without tracking, there are countless success stories from both offline advertising
and even modern Internet advertising (we built a profitable business around it).

Later this year, third-party cookies like almost all ad cookies that aren't Google's and Facebook's,
will stop working in Google Chrome.
This is going to have a major effect on advertisers, publishers,
and especially smaller ad networks.
This post aims to serve as a guide to what's changing, why it's changing,
what we expect the second order effects of the change will be,
and how advertisers can succeed anyway.


## Third-party cookies, history and phase-out

Need a brief explainer on cookies, first-party vs. third-party, and why cookies are both
necessary and ripe for abuse? Check out this brief video from [#AskFirefox](https://www.youtube.com/playlist?list=PLFlAJDI87Jg1It3hFaH61sYytK1lAU7fG):

<div class="postimage text-center ">
  <div class="embed-responsive embed-responsive-16by9">
  	<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/tAxj-7Bn8-s?si=0eXi8L25XA0AS7NF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <p>#AskFirefox explains cookies</p>
</div>

Google plans to phase out third-party cookies completely to [Chrome users in Q3 2024](https://developers.google.com/privacy-sandbox/blog/cookie-countdown-2023oct)
although this has been [delayed before](https://www.theverge.com/2021/6/24/22547339/google-chrome-cookiepocalypse-delayed-2023).
Firefox and Safari have had this privacy feature for years.
While this is a good step by Google,
and the delay is mostly due to [competition authorities](https://www.gov.uk/cma-cases/investigation-into-googles-privacy-sandbox-browser-changes)
worried about the effect on smaller ad players,
it will hurt smaller ad networks a lot more than the big players like Google and Facebook.

Google and Facebook do use third-party cookies to be sure.
This is crucial to many forms of retargeting (see [surveillance advertising]({filename}/pages/learning-hub/surveillance-advertising.md)).
However, when you see an ad from Google in search, on YouTube or in Google Maps,
Google knows who you are because you are logged in to Google.
They don't need a third-party cookie because they already have a first-party cookie.
They can use everything they know about you to target you with ads.

Third-party cookie removal will have a significant effect on Google Display Network,
third-party sites that show ads from Google,
but a much smaller effect on most of Google's ads.
By contrast, it will be much harder for a small network to track users
in order to build a profile across the websites they visit.
While third-party cookies being phased out is a positive privacy development,
it will also help entrench the major ad players.


## Challenges for advertisers in the cookieless future

Without ad cookies, there's going to be a lot of challenges for advertisers and publishers.
Let's discuss advertisers first.

Advertisers using retargeting are going to struggle with that part of their marketing without cookies.
Most common forms of retargeting, like showing ads to people who have visited the advertiser's website before,
are mostly not going to work without third-party cookies.

As a result, we think marketing budgets will move from smaller ad networks to the larger ones
as they will be better at using the marketing signals they have to target ads to relevant users.
It will also migrate to direct sponsorships with larger publishers, newsletters, and podcasts,
where the advertiser knows their core audience is.
This is going to cause a strategic shift in how advertisers buy ads.


## How publishers will be affected

For publishers,
though not publishers on EthicalAds since we already don't have third-party cookies,
they will see reduced revenue in the short run due to Chrome removing third-party cookies.
Many ad networks [treat ad impressions as commodities]({filename}/posts/2021-invasive-ad-targeting-bad-journalism-premium-publishers.md)
trade-able based on the personal data coming from the ad cookies.
Without the signal from these third-party cookies,
impressions on their site are going to be worth less than before.

However, as advertisers move toward direct sponsorships and direct marketing,
this will reverse and high quality publishers
will see more interest and be able to command higher prices.


## A success story with cookieless advertising: Sentry

<blockquote class="blockquote mb-2">
  <p class="mb-2">
    “Display and other channels were severely hampered after cookie removal; our traditional retargeting motion died off pretty quickly as we couldn’t use GA4’s audiences or our Google Ads pixel.”
  </p>
  <p class="small">- <a href="https://blog.sentry.io/we-removed-advertising-cookies-heres-what-happened/">Matt Henderson @ Sentry</a></p>
</blockquote>

A few months back, [Sentry](https://sentry.io/) decided to remove ad cookies
and did a [retrospective](https://blog.sentry.io/we-removed-advertising-cookies-heres-what-happened/)
on the positives and negatives of that change
(EthicalAds and our parent Read the Docs use Sentry for error reporting
and Sentry has advertised with EthicalAds in the past).
The post has a ton of great real-world details of an advertiser proactively dealing with these changes
and is well worth the read. I want to highlight a few key parts though.

Firstly, removing cookies wasn't a calamity, but it did force a number of adaptations.
They had to rework a lot of how they attributed a new user to marketing channels
which is critical as a marketer to know what's working and what isn't.
In something we expect to hear more about as third-party cookies are removed,
Sentry said they "decided to migrate budget to sponsorships and publishers that we instinctively knew had our core audience".

Probably most important for regular users of the web, it allowed them to
"do away with the annoying cookie consent banners".
Everybody hates cookie banners and they have a
[negative effect on conversion rates](2023-european-landing-pages-gdpr.md).
Removing that is a win for everyone.


## The future of advertising without third-party cookies

In many ways, this feels like a vindication of our [ad vision]({filename}../pages/vision.md).
Back in 2017 and 2018, we asked ad networks about how we could run their ads
while respecting visitor privacy on our own site, Read the Docs.
These ad networks told us to take it or leave it.
**We left it** and built our own sponsorship platform and later ad network.
Now those same networks have to adapt as both regulators and regular people
wake up to the downsides of invasive ad tracking.

There are going to be ad networks that essentially ignore these coming changes.
They will substitute IP-based targeting or other types of browser fingerprinting
for third-party cookies.
It will be cruder and less accurate, but it will probably work for a while.
There's also going to be new ways to target users with some privacy protections like [Google's Privacy Sandbox](https://privacysandbox.com/).
However, Google removing third-party cookies shows the longer term trajectory is clear.
Browsers, regulators, and even regular users with [ad and tracker blockers]({filename}/posts/2023-data-privacy-week.md#ad-blockers)
are going to nibble away at broad data collection and personalized ad targeting.

This doesn't mean that advertisers won't be able to reach their audience online.
However, it will force a number of adaptations from advertisers, publishers,
and the wider ad ecosystem.
We built our entire business around contextually targeting users with relevant ads
based on the site and page where the ad appears. No personal info required.

If you want to work with an ad network that understands these issues,
[get in touch]({filename}../pages/contact.md)!
