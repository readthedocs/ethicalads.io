Title: Data Privacy Week 2023 - Privacy-first Alternatives
Date: January 23, 2023
description: In celebration of data privacy week, we discuss some of the privacy-first alternatives to the big search engines, browsers, and analytics used by the EthicalAds team.
tags: privacy, community
authors: David Fischer & Ra Cohen
image: /images/posts/data-privacy-day-2022.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@marvelous?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marvin Meyer</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>

This week is Data Privacy Week!
To celebrate, we're helping you take charge of your own data by sharing some of our favorite privacy-first services.

## Web Browsers

With over 63% of the browser market across devices,
Google Chrome is currently and overwelmingly the dominant web browser.
As Chrome grew, however, people became more conscious of the analytics, user profiling,
and other privacy intrusions built into it.
Maybe allowing a mega-corporation to know every single intimate detail of my life
isn't necessarily a good thing. Who knew?
Lucky for decades-long former Chrome users, there's another Chrome build which doesn't funnel
everything you've ever looked at back to the mothership.

The open source [Chromium](https://www.chromium.org/) is actually the code upon which Chrome is built.
Google maintains the codebase, documentation, and [download site](https://download-chromium.appspot.com/),
but as open source projects are wont to do,
Chromium has expanded into hundreds if not thousands of splinter projects and companies.
There's an entire section on the Chromium wikipedia page featuring the largest [browsers based on Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium).
Many of which are privacy-focused browsers like [Brave](https://brave.com/),
[Vivaldi](https://vivaldi.com/) and the [Avast Secure Browser](https://www.avast.com/secure-browser).

The EthicalAds team relies on Firefox and Chromium.
On mobile, DuckDuckGo has a [mobile browser](https://duckduckgo.com/app)
with some intelligent tracker blocking built-in to keep you safe.


## Ad Blockers

About as important as the browser itself, are the additional privacy add-ons
that keep you safe from ads and trackers.
Many people like myself used [AdBlockPlus](https://adblockplus.org/) for years without much thought.
It's a simple, effective service which gives you control over not only which websites are allowed to show ads,
but it even allows you to allow list certain YouTube and Twitch channels to run their ads
so you can support your favorite creators.
The creators of AdBlockPlus have gone on to form the [Acceptable Ads Committee](https://acceptableads.com/about/)
who's [Acceptable Ads Standard](https://acceptableads.com/standard/) we follow
as EthicalAds believes in their mission of creating a sustainable and fair compromise between user preference and creator monetization.

However, by default AdBlockPlus permits "Acceptable Ads" that [use third-party tracking](https://help.getadblock.com/support/solutions/articles/6000224547-about-acceptable-ads-and-third-party-tracking/).
The standard for an unacceptable ad is largely focused on how annoying an ad is to the user experience
as opposed to the detrimental effects of [surveillance advertising](https://www.ethicalads.io/surveillance-advertising/?ref=data-privacy-day-2022) as a whole.

As an alternative, some of our team relies on [Privacy Badger](https://privacybadger.org/).
Privacy Badger is a browser extension from the Electronic Frontier Foundation, that isn't even an ad blocker.
It only blocks *trackers*.
However, since most ad networks track users, it ends up blocking most ads (but not us).
Privacy Badger also [doesn't rely](https://privacybadger.org/#How-does-Privacy-Badger-work) on suppression lists which is how most ad blockers work.
Instead, it learns based on the sites you visit which sites are tracking you across domains and then
either blocks requests to those sites completely or just disables them from storing cookies or other storage like local storage.
Privacy Badger is supported on Firefox, Chrome, Microsoft Edge, and Opera so if you're running one of those, definitely check it out.

<div class="postimage text-center">
  <img class="w-50 shadow-lg" src="{static}../images/posts/2022-privacy-badger-bing.png" alt="Results of the EFF's Privacy Badger run on the Bing homepage">
  <p>Results of the EFF's Privacy Badger run on the Bing homepage</p>
</div>


## Search Engines

> Check out our posts from last year on
> [the best search engines for your privacy]({filename}../posts/2022-best-search-engines-for-your-privacy.md)
> and a [privacy teardown of common search engines]({filename}../posts/2022-privacy-teardown-search-engines.md).

When thinking of privacy-first search engines,
your first thought may be [DuckDuckGo](https://duckduckgo.com/) and for good reason.
They've been a thought leader in the privacy-first movement since their founding in 2008 and
have staked claim that search engines don't have to track users to be profitable.
I'd especially like to shoutout their great blog called [Spread Privacy](https://spreadprivacy.com/) which is filled with
bite-sized articles on everything from personally actionable privacy tips
to digests on the latest results from the privacy-focused research they're conducting.
Not to mention how DuckDuckGo's supported the movement financially with [over $1,000,000 donated](https://spreadprivacy.com/2021-duckduckgo-donations/)
to privacy and competition organizations in 2021 alone.
DuckDuckGo is obviously a great pick for any privacy-concious netizen.

However, there are a number of other great search engines that respect your privacy.
Late last year, we did a [review]({filename}../posts/2022-best-search-engines-for-your-privacy.md)
of a number of a number of search engines from a data privacy perspective.
Between [Mojeek](https://www.mojeek.com/),
[Brave Search](https://search.brave.com/), and [You.com's search engine](https://you.com/)
(their developer-focused search engine [YouCode](https://you.com/code) is fantastic),
there's a number of great alternatives to Google.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2022-search-engine-privacy-youcom.png" alt="Details of Python's hashlib in YouCode search">
  <p>Details of Python's hashlib in YouCode search</p>
</div>


## Analytics

As a crucial step in building our own privacy-first, [ethical marketing funnel]({filename}../posts/2021-marketing-funnel.md),
we evaluated a number of Google Analytics alternatives.
Specifically we wanted to support open-source organizations
that specialize in anoniminity-preserving aggregation algorithms
for measuring inbound referrals in order to respect the privacy of our site visitor's data.
In order to meet these criteria, we researched dozens of platforms and
narrowed our favorites down to two excellent companies,
Plausible and SimpleAnalytics.

We at EthicalAds use [Plausible](https://plausible.io/) as our analytics provider
for a number of reasons including their comprehensive, yet elegant single page displays,
their user-agnostic aggregation methods as outlined in their informative [privacy statement](https://plausible.io/privacy-focused-web-analytics),
and most importantly their commitment to maintaining not only their [open source platform](https://plausible.io/open-source-website-analytics)
but also their [documentation](https://plausible.io/docs) (a cause near and dear to our hearts).

Adding privacy-focused analytics has empowered us to take a more data-backed approach to our growth.
We now assess the conversion rates of our A/B test variants for various house ads, landing page SEO-tweaks, as well as our other media inbounds
in order to direct more time and resources to whichever growth channels are proving most effective,
all *without* compromising the personal information of our visitors.
That being said, Plausible has only a limited-time free trial period and so isn't necessarily a perfect fit for
up-and-coming open source developers, technical tutorial creators, or data is beautiful enthusiasts who have yet to monetize their growing platforms.

This is where our second privacy-preserving analytics recommendation shines.
[Simple Analytics](https://simpleanalytics.com/?ref=ethicalads-blog) is a privacy-first analytics product designed specifically for *developers*. Sound familiar?
The resonance between the EthicalAds' [Our Ad Vision](https://www.ethicalads.io/advertising-vision/?ref=data-privacy-day-2022) and
Simple Analytics' [Our Promise](https://simpleanalytics.com/our-promise) page is astounding.


## Conclusion

Data privacy week is relatively new,
but we are thrilled to be in the privacy-first movement,
and happy to take the opportunity to shed a spotlight on some other privacy-first projects who are doing great things.
We've only scratched the surface of the privacy-tech ecosystem here,
but every single product discussed has been used by one of us at EthicalAds.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any privacy-first products that we should check out,
we always love to hear from you.


**Note:** the first version of the post appeared in 2022 but it has been updated for 2023.
