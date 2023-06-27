Title: How the Internet ads industry works: modern invasive ad targeting
Date: June 27, 2023
description: This follow-up to our industry overview post covers how modern ad targeting works and how you can get great ad targeting without troves of personally identifiable info
tags: adtech, business
authors: David Fischer
image: /images/posts/2023-ad-industry-targeting.jpg
image_credit: <span>Created with <a href="https://www.midjourney.com/" title="creepy ad targeting, invasive advertising, personalized advertising, ads that know what you think, ads that follow you around the internet, cyberpunk, watercolor style">Midjourney</a></span>

**This is a follow-up post to our [overview of the ads industry]({filename}../posts/2023-ad-industry-overview.md).**

The ads we encounter online seem to be increasingly tailored to our personal interests and preferences.
This is no accident but rather the result of modern ad targeting
and the massive personal data collection effort behind it.
Advertisers and adtech companies use sophisticated and sometimes invasive methods to track online behavior,
allowing them to deliver personalized ads to individual users
with what we call [surveillance advertising]({filename}/pages/learning-hub/surveillance-advertising.md).

While some of these approaches have proven effective for advertisers,
they have sparked privacy concerns and ethical debates about the use and collection of personal information.
In this post, we will delve into how ad targeting works, its privacy implications,
the evolving landscape of regulation, and what you as a user can do to protect yourself.


## Understanding ad targeting: the basics

Before the Internet, to reach a particular group of people,
marketers would buy a newspaper or TV spot that their target demographic reads or watches.
This technique of showing ads based on the surrounding content is called contextual targeting and is still relevant today.
The Internet, however, led to rapid evolution in ad targeting technologies
which enabled ads to be targeted more precisely than ever before.
At the core of this invasive targeting lies an intricate web of data collection on an unprecedented scale.

These data collection techniques usually involve the use of cookies, pixels, or beacons,
but other approaches like fingerprinting or more rudimentary IP-based targeting can be used
when cookies can't be.
Advertisers running Facebook ads, for example, will deploy a pixel on their own site.
After users browse their site, Facebook will see the unique pixel and know that a specific user has visited
an exact site or even an exact page on a site.
The advertiser can then target that user with personalized ads meant only for users who have visited their site in the past.

This technique underpins a lot of Internet advertising and is called "retargeting" or "remarketing".
The same technique can be used to show ads to users who watch a specific video, launch a specific mobile app, search for specific terms, or even with a bit of work (Facebook and Google don't make this easy, other adtech companies aren't as picky) to target users who visit specific places in the real world.


<div class="postimage text-center">
  <img class="w-50 shadow-lg" src="{static}../images/posts/2023-ad-targeting-fbads-retargeting.png" alt="Retargeting options in Facebook Ads">
  <p>Facebook Ads retargeting allows showing ads to visitors of specific web pages</p>
</div>


## Privacy concerns: crossing the line or good business?

When we talk about invasive ad targeting, privacy concerns inevitably take center stage.
Modern ad targeting techniques mean that huge amounts of personal data
-- browsing and search histories, what people do on their phones, and more --
are being collected and analyzed.

Notably, while users have a vague sense that what they type into Google Search or browse on Facebook
might be used for ad targeting, users may not understand that their browsing history is collected on other third-party sites as well.
The resulting data collection means that the big ad players have lengthy browsing histories of specific sites visited, videos watched, and apps launched on hundreds of millions if not billions of users.
As if all that data wasn't enough,
the big ad players will ask advertisers to upload even more personal data to better target users with ads.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2023-ad-targeting-googleads-uploadpii.png" alt="Similar audiences/Lookalike audiences on Google Ads">
  <p>Google prompts marketers to upload other people's personal info to target ads</p>
</div>

In our [previous post]({filename}../posts/2023-ad-industry-overview.md),
we discussed ad exchanges, which facilitate the buying and selling of ad inventory in real-time.
They present some especially acute privacy concerns.
By design, exchanges involve publishers sending up user personal data
(usually obfuscated) for advertisers to bid on.
Unlike the example of browsing Facebook or Google,
it spreads copies of users' personal data to multiple companies,
many of which don't have a direct relationship with the person being shown the ad.
As a result, it means that a data breach at any of the companies in the chain can expose personal data.

Adtech companies will argue that well-targeted ads enhance the user experience.
Certainly it is better to show relevant products and services that align with a website visitors interests
instead of something completely unrelated.
However, the constant tracking and profiling of individuals can create a sense of unease,
and leading to a sense that ads "follow people" around the Internet.


## Does all this data result in better ads

You would think that all this data would result in ad targeting better than you could possibly imagine.
While some companies would lead you to believe that it's impossible to do advertising without tracking,
that simply isn't true.
Almost every single worldwide brand you can name was built with more traditional advertising
before Internet surveillance advertising.
In spite of all the tracking, users still consistently complain about seeing irrelevant ads.


## Protect yourself from adtech

To address some of the concerns about data collection for ad targeting,
government regulations (and some industry initiatives) have emerged to set standards for data privacy and user consent.
Regulations like the General Data Protection Regulation (GDPR) in the European Union
and the California Consumer Privacy Act (CCPA) among other state regulations in the US
aim to provide more transparency and rules about how and when data is collected,
what it can be used for, and how long it can be retained.
While these are important, hoping the government keeps up with big, well-funded adtech companies
or hoping that they self-regulate aren't the only way to keep yourself safe.

While it might be strange for an ad company like us to recommend this,
tracker blockers or ad blockers are a great (but not foolproof) way to
[protect yourself from security and privacy issues on big ad networks]({filename}../posts/2023-keeping-yourself-safe-privacy-issues-advertising.md).
Earlier this year for data privacy week,
we [recommended some ad blockers]({filename}../posts/2023-data-privacy-week.md#ad-blockers)
as well as web browsers and search engines that help you keep your browsing history to yourself.


## Responsible ad targeting that works

We opted-out of all the tracking and invasive targeting and
[our vision]({filename}../pages/vision.md) for advertising is quite different.
Instead of trying to build an ad network for everything, we focus exclusively on developers
so we don't need to track users to show the right ad to the right user.
Instead of letting any site onto our network with little or no oversight,
we talk to and vet every single publisher on our network.
Instead of letting any advertiser run anything in exchange for high ad bids,
we make sure the products advertisers are promoting are real products relevant to our audience.
No bogus sites, no scammy ads, and relevant products next to relevant content. That's it!

While this focus on quality means we'll never grow to be as big as Google,
it has let us build a sustainable ad business that supports hundreds
of developers with tens of thousands of dollars in ad revenue every month.
Thanks again for coming along with us on this journey to build an ethical ad network
and to learn about how Internet ad targeting works on and off our network.
