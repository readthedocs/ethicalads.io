Title: Do the Ads on your Site Respect Privacy
Date: October 12, 2021
description: There's a lot of ad networks out there, but they don't make the same privacy guarantees as EthicalAds.
tags: cookies, privacy, publishers
authors: David Fischer
image: /images/posts/2021-privacy-respect.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@matthewhenry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Matthew Henry</a> on <a href="https://unsplash.com/photos/fPxOowbR6ls?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


As a website owner (a publisher), you take pride in the work you put on the internet.
However, with many approaches to online advertising, your users could be sharing more with ad networks than you think.
You know some online advertising collects data about your visitors,
but maybe you aren't quite sure how that works or what you can do to stop it.
Are the ads you're running on your site spying on you and your users?
Here's some red flags:

* **External resources:** Does your ad network allow advertisers to run their own scripts or load resources on your site?
* **Surveillance tech:** Does your ad network use things like cross-site cookies, fingerprinting, or other tracking technologies?
* **Personalized targeting:** Does your ad network allow targeting that is so specific as to be nearly personal?
* **Cookie warnings:** Does your ad network recommend you have a cookie warning to comply with privacy regulation?
* **Data broker:** Does your ad network make money exclusively from ads? Or are they also selling user data?

Do you know the answers to the questions above for the ads running on your site.
Ask your ad network and see what they say.
Better yet, run a privacy scanner like [Blacklight](https://themarkup.org/blacklight)
on your site and see what user tracking technologies are running.


## Advertiser provided cookies, code, or resources

Probably the biggest things to watch out for when selecting an ad network
are advertiser provided resources, code, or cookies.
If an advertiser hosts the images or other resources for an advertisement,
they can cookie and track the users on your site across the web
(and then [show ads to your users more cheaply elsewhere]({filename}2021-invasive-ad-targeting-bad-journalism-premium-publishers.md)).

<div class="postimage">
  <a href="{static}../images/posts/2021-third-party-resources.png">
  <img class="w-100" src="{static}../images/posts/2021-third-party-resources.png" alt="An ad network loading third-party resources">
  </a>
  <p>An ad network loading third-party resources.</p>
</div>

This image shows an ad network adding a Google tracking pixel along with the ad image.
This is used for large advertisers who want to have a report of all their ads in a single Google dashboard.
This site owner may not even know that their users are being sent to a third party,
and without looking at the actual HTML it's impossible to tell.

Even worse than loading a tracking pixel is to run JavaScript code
provided by advertisers.
In addition to being a security nightmare,
this allows for even more exfiltration of data from your site
including some cookie values or logged-in user data displayed on your site.
While common a decade ago, thankfully allowing advertisers to run code on publisher sites
has become rarer today.

With EthicalAds, we vet all our advertisers
but we still never let them run arbitrary code or cookie users on your site.
We don't save a cookie from our domains either.
Advertising can work without knowing any personal details or past sites you've visited.
With us, you don't need a [cookie warning banner]({filename}2021-can-you-remove-cookie-banners.md)
and the ads on your site will already comply with privacy regulation like the GDPR.


## Fingerprinting, supercookies, and other nefarious tracking tech

Some common browsers like Firefox and Safari already block many third-party cookies.
This is a great step toward a more private web.
However, to "work around" a lack of cookies, some ad networks use fingerprinting
in an attempt to uniquely identify visitors for ad targeting.

Fingerprinting and other tracking tech can take a few forms but some of the most common are:

* **Browser Fingerprinting:** [Browser fingerprinting](https://ssd.eff.org/en/module/what-fingerprinting),
  is the process of uniquely identifying individual users based on their browser
  and other data about them like their IP address.
  These browser attributes can be anything from how the browser identifies itself
  to settings you've changed to protect your privacy.
  Customizations can make your browser appear unique rather than look like everybody else.
* **Supercookies:** So called ["supercookies"](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/)
  use trackers hidden in other parts of browser like local storage, ETags, or HSTS headers.
  These are not cleared by clearing cookies
  and can potentially identify users uniquely or be used in combination with fingerprinting.
* **CNAME Cloaking:** [CNAME Cloaking](https://webkit.org/blog/11338/cname-cloaking-and-bounce-tracking-defense/)
  involves a publisher setting up a subdomain for an ad tech tracker.
  This can make a third-party cookie look like a first-party cookie and gets around most tracking protection.

Some of these tracking methods are easy to spot.
If you see data from your ad network in local storage, that's a red flag.
However, for some forms of fingerprinting, it happens only on the ad network's servers
and you have no way of knowing.

EthicalAds doesn't use any fingerprinting technology.
You don't need to trust us. All our code
&mdash; both the [client](https://github.com/readthedocs/ethical-ad-client) that runs on your site
and the [server](https://github.com/readthedocs/ethical-ad-server) serving the ads &mdash; is open source.
We don't track users to target them with ads because we're confident in our contextual targeting.


## Contextual targeting works

Almost all offline advertising from billboards, TV or radio spots, or ads in magazines
use contextual targeting rather than personalized targeting.
This means that a company pays to show a billboard in an area where they believe their customers live or visit.
A relevant ad will appear in a magazine about a related topic or during a TV show about a similar topic
or that has the right audience.
[Our vision]({filename}../pages/vision.md) for advertising is built on this and applies it to the web.

Advertising doesn't need to track your users to work well both for your site and for advertisers.
Our ads are targeted only on the content of the page where the ad will be displayed and very rough geography.
If you want to monetize your developer-focused site without compromising your audience,
[join EthicalAds]({filename}../pages/publishers.md) and help preserve privacy on the web!
