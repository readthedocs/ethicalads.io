Title: Mozilla's privacy preserving ad attribution: The future or an oxymoron?
Date: August 29, 2024
description: Mozilla is the latest company to work on privacy-preserving ad attribution. Is "privacy preserving ad attribution" an oxymoron? Is it even possible? And if it is, should Mozilla do it?
tags: privacy, adtech, fingerprinting, attribution
authors: David Fischer
image: /images/posts/2024-mozilla-ppa-jumbotron.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@nathanguzman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan  Guzman</a> on <a href="https://unsplash.com/photos/white-wall-paint-room-with-lights-turned-on-in-room-xZCJN3BFkWY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


Back in June,
[Mozilla acquired](https://blog.mozilla.org/en/mozilla/mozilla-anonym-raising-the-bar-for-privacy-preserving-digital-advertising/)
privacy-centric ad measurement company [Anonym](https://www.anonymco.com/)
which was founded a few years back by some senior Meta staff.
Then last week, Mozilla unveiled plans for testing
[privacy preserving attribution](https://blog.mozilla.org/netpolicy/2024/08/22/ppa-update/).
Judging from the [HackerNews sentiment](https://news.ycombinator.com/item?id=41311479),
it was not well received.

Clearly we operate an ad network so our opinions are biased.
We firmly believe that advertising can be effective without invasive tracking
and we built a profitable business around it.
In this post I'm going to dive deeper into ad attribution,
what Mozilla is actually doing
and what it means for privacy and advertising more generally.


## What is ad attribution and how does it work?

Ad attribution is simply the measuring the effectiveness of marketing channels
and is usually measured in terms of impressions, clicks, new site visitors, and ultimately conversions and ROI.
At some level, ad attribution is necessary.
Advertisers want to know that the money they're spending on advertising is working.
Otherwise, they'll save their money.
They want to cut channels that don't work well and spend more on ad channels that do.
Nothing wrong with that.

The most basic level of ad attribution is to use query or UTM parameters
in the URL that attribute a user who visits an advertiser's website
to a particular source like paid advertising, social media, or other sources.
Think something like `advertiser.com?utm_source=ethicalads`.
Having a landing page specific to a paid ad channel (`advertiser.com/ethicalads`)
or having a promo code for a specific channel ("use promo code EthicalAds at checkout")
works similarly.
When somebody buys a product from an advertiser, the advertiser knows
whether that user came from paid ads or another channel.

However, as ad campaigns get optimized and as some large ad platforms get control of the market,
ad attribution can sometimes get a little sketchy.
Another common way attribution works is using pixels or beacons.
To give a concrete example, if a person clicks an ad on Facebook that points to an ecommerce site,
the ecommerce site will usually have a Facebook pixel on their product pages, shopping cart pages and checkout page.
Facebook can then see how the ad click performed,
which items were [added to their cart](https://www.facebook.com/business/help/256019281275126/),
and if a [purchase was made](https://www.facebook.com/business/help/339239069606476).
This data can then feed into an ad optimization loop within Facebook.
Facebook will then offer to "optimize the ad campaign for conversions".
At EthicalAds, we have taken a hard stand against these kinds of ad pixels that track people across the web.

A lot of privacy conscious users aren't too keen on being tracked across sites they browse
and that has led to a number of efforts to try to do ad attribution
without compromising user privacy.
Google Chrome's [now scrapped](https://privacysandbox.com/news/privacy-sandbox-update/)
plans to [kill third-party cookies]({filename}../posts/2021-post-cookie-ad-landscape.md)
were supposed to herald the end of some of the worst kinds of attribution
as well as some forms of invasive ad targeting.
However, with Google reversing their decision, these attribution methods will continue for a while longer.

<div class="postimage text-center">
  <img class="w-75" src="{static}../images/posts/2024-mozilla-privacy-anonym.png" alt="Anonym's promise for ad attribution">
  <p class="w-75 m-auto"><small>Anonym's promise for ad attribution: all the advertiser targeting benefits without compromising privacy (credit: <a rel="noopener noreferrer nofollow" href="https://www.anonymco.com/">Anonym's website</a>)</small></p>
</div>


## Current landscape of privacy-preserving attribution

In response to the outcry against tracking,
there's quite a few methods ad providers have tried
when it comes to private ad attribution.
Nobody seems to agree on how to do it.
At EthicalAds, we don't measure conversions for advertisers at all
because we haven't found a method that we've been happy with from a privacy perspective
and the methods outlined here that others have tried require controlling the browser:


### Private Click Measurement (Apple)

[Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) (PCM)
is an experimental, opt-in feature in the Safari browser championed by Apple.
It allows sites with advertising and ad networks to collect data on conversions
while having a number of [privacy protections](https://privacycg.github.io/private-click-measurement/#privacy) to prevent cross-site tracking and attributing actions to specific users.
The way it works is that the site that the ads points to will inform the browser of a conversion
and the browser will at a later date report the conversion
through a proxy so the ad clicker's IP is not leaked.

Apple [promoted this pretty hard](https://developer.apple.com/videos/play/wwdc2021/10033/)
back in 2021 and 2022 but it never seemed to get off the ground.
As an interesting history, [Mozilla released a blog](https://blog.mozilla.org/en/mozilla/understanding-apples-private-click-measurement/)
and [a more detailed analysis](https://mozilla.github.io/ppa-docs/pcm.pdf)
of it that wasn't too favorable.
Because these kinds of proposals need to be implemented by multiple browsers
to become a standard, this all but killed Private Click Measurement.

At EthicalAds, when Apple was promoting PCM, we tested it with our ad server.
It seemed like a promising approach, but there was no interest in PCM
from our advertisers so we never moved past testing.


### Attribution Reporting (Google)

Google is (was?) working on a number of privacy focused advertising features
as part of their [Privacy Sandbox](https://privacysandbox.com) initiative.
One part of the Privacy Sandbox is [Attribution Reporting](https://developers.google.com/privacy-sandbox/relevance/attribution-reporting).

Attribution Reporting is currently an experimental, opt-in feature in Chrome
that is somewhat similar to Safari's PCM.
However, it differs by allowing measuring ad views in addition to clicks and conversions
and has more entropy -- more bits sent to the advertiser or ad network --
that could be used for more granular tracking of individual users
although far less than would be possible with a cookie.

A major reason for the Privacy Sandbox features, however, was that Chrome was deprecating and removing
third-party cookies (as Safari and Firefox did) and that has been put on hold indefinitely.
As a result, it's unclear what will happen with Google's Attribution Reporting.

Like PCM, we've never had an advertiser ask about this type of attribution reporting from Google
although we get requests (and respectfully decline) for Google ad pixels
which are the non-privacy friendly way of doing ad measurement and attribution.


### Ad Confirmations (Brave)

[Brave Browser](https://brave.com/) blocks many analytics tools like Google Analytics
that helps advertisers report on their campaigns.
Many of those same tools can be used to track users across the web.
However, Brave also sells advertising and so they have built some [ad attribution](https://ads-help.brave.com/campaign-performance/reporting/#conversion-reporting-in-brave-ads-manager)
directly into their browser.

When a user clicks on an ad in Brave,
the Brave Browser watches if that user later visits a page that represents a conversion for that ad.
This allows Brave to report that conversion back in their ad reporting tools.
I couldn't find a lot of details on exactly how this works
and the [details I could find](https://github.com/brave/brave-browser/wiki/Security-and-privacy-model-for-ad-confirmations)
related more to the blockchain-based rewards
Brave gives to users who interact with ads.


## How does private ad attribution work and what's Mozilla testing?

Many developers on HackerNews and elsewhere seemed to view Mozilla working on ad technology as a betrayal.
However, Mozilla has consistently tried to balance commercial benefits and public benefits
and has been open in the past to [privacy-preserving advertising](https://blog.mozilla.org/en/mozilla/the-future-of-ads-and-privacy/).
Like us, Mozilla believes that advertising without invasive tracking is possible.

<blockquote class="blockquote mb-2">
  <p class="mb-2">
    “Commercial involvement in the development of the internet brings many benefits; a balance between commercial profit and public benefit is critical.”
  </p>
  <p class="small">- <a href="https://www.mozilla.org/en-US/about/manifesto/#principles-09">The Mozilla Manifesto</a></p>
</blockquote>

Based on what [Mozilla has said publicly](https://blog.mozilla.org/en/mozilla/mozilla-anonym-raising-the-bar-for-privacy-preserving-digital-advertising/)
about Privacy-Preserving Attribution (PPA),
their approach has a number of similarities to Apple's and Google's
but there's a few differences.
Also, although Meta isn't mentioned in their blog post,
Meta collaborated with Mozilla on their approach.

Like Apple's and Google's approach, Mozilla plans to have a method
for the browser itself to record ad impressions and conversions.
As in Apple's approach, they intend to pass data through an anonymous proxy
in order to make sure the relevant parties don't pass around users' IP addresses.

One big difference is that Mozilla is turning on PPA by default in Firefox.
This was one of the big points of contention among the developer and privacy communities.
However, for starters at least, it can only be used for Mozilla's own ad campaigns
on [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/).
They call this kind of restriction an ["origin trial"](https://wiki.mozilla.org/Origin_Trials) because it is restricted by origin.

Another big difference is the level of complexity of the proposal.
Apple's PCM implementation is actually pretty simple and attempts to keep data safe by collecting relatively little of it.
Google's proposal is also relatively straight-forward although, as I mentioned, weaker on privacy.
By contrast, Mozilla's proposal seems a lot more complex.

PPA involves dividing up attribution data into pieces,
adding sufficient statistical noise to ensure privacy,
encrypting the pieces,
sending the parts up to different parties,
and then restricting the types of aggregation reports
possible that combine the two parts.
We'll have to see how their test on MDN goes
and see if we can verify some of these claims.

<div class="postimage text-center">
  <img class="w-75" src="{static}../images/posts/2024-mozilla-ad-attribution.png" alt="Mozilla's proposal for ad attribution">
  <p class="w-75 m-auto"><small>From Mozilla's <a rel="noopener noreferrer nofollow" href="https://docs.google.com/document/d/1QMHkAQ4JiuJkNcyGjAkOikPKNXAzNbQKILqgvSNIAKw/edit">Outline of a private attribution measurement API</a></small></p>
</div>

## Conclusion

So far, there's been pretty wide agreement that some methods of ad attribution
are more invasive than others and are bad for users' privacy.
At EthicalAds, we think that a lot of people would benefit from more privacy-friendly ways of advertising.
However, as long as the less privacy friendly ways of doing ad attribution
are possible, legal, and the norm, there probably won't be much interest from advertisers
in other methods.
We are watching what Mozilla is doing with interest but it might just become [yet another competing standard](https://xkcd.com/927/).
