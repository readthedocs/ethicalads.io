Title: Cookie Changes are Coming to Ad Tech
Date: March 11, 2021
description: Tech giants and browser vendors are making changes that will affect the world of ad tech and ad tracking. Consumers and privacy advocates may benefit but the future is still uncertain.
tags: cookies, adtech, fingerprinting
authors: David Fischer
image: /images/posts/2021-post-cookie-world.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@enginakyurt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">engin akyurt</a> on <a href="https://unsplash.com/photos/WxUNinQmGy4?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


Last week, [Google announced](https://www.blog.google/products/ads-commerce/a-more-privacy-first-web/)
that after they phase out third-party cookies in Chrome next year,
they "will not build alternate identifiers to track individuals as they browse across the web."
On the surface, this looks like a win for a more private web.
This would put Chrome, the most popular browser, on a similar footing to Safari and Firefox
which block most third-party tracking out of the box.
As more details started to come out about Google's vision, however,
things started to get a bit murkier.


## Google's vision for the future of ads

In Google's vision, ads targeted to users' interests aren't going away but are merely changing.
Built on Google's [Privacy Sandbox](https://www.chromium.org/Home/chromium-privacy/privacy-sandbox),
which is part of the open source engine behind Chrome,
Google promises these changes will create a more private web
while keeping targeted advertising just as effective.

> "Advances in aggregation, anonymization, on-device processing and other privacy-preserving technologies offer a clear path to replacing individual identifiers."
>
> David Temkin
>
> *Director of Product Management, Ads Privacy and Trust at Google*

Instead of ad networks or ad tech companies keeping and storing data on users to target them with ads,
Google is testing an approach they call [Federated Learning of Cohorts (FLoC)](https://github.com/WICG/floc)
which will have your browser learn about the things you like so you can be targeted with ads.
Likewise, for personalized ads, they have another approach called [Turtledove](https://github.com/WICG/turtledove).
These will expose new browser APIs that advertisers and ad networks can use to target ads.

Make no mistake,
while these changes have some privacy benefits, they also are about control.
Google's vision for ads put them at the center of the ads ecosystem.
Google controls the browser you're probably using right now
and they'll control how these new tools and APIs like FLoC can be used for advertising.
In addition, Google has a first-party relationship with you and they don't need third-party cookies.
They can continue to use the emails you receive in Gmail,
the places you get directions to in Google Maps, the videos you watch on YouTube,
and the things you search for on Google to target you with ads.

The [Electronic Frontier Foundation (EFF) called FLoC a "terrible idea"](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea).
They say it will help ad tech companies fingerprint users
so they can uniquely identify them more easily.
and that any site which supports logging in could easily request FLoC data and add it to users' data profiles.


## What ad tech companies are doing about it

The response from the ad tech side of the industry ranges
depending on where the company sits in the ecosystem.
Even if Google's vision doesn't become a reality
-- we expect some of it will and some of it won't --
the end of third-party cookies won't be the death knell for ad tech,
behavioral targeting, or personalized ads.

Firstly, there are a lot of alternatives to cookies for tracking users across the web.
For many ad tech players, third-party cookies going away won't affect them at all.
The list of the techniques used to circumvent cookie restrictions
is potentially endless but here are some common techniques:

* **Fingerprinting:** As the EFF called out, fingerprinting,
  or the process of uniquely identifying individual users based on their browser
  and other data about them like their IP address is common practice in the ad tech space.
* **Supercookies:** So called ["supercookies"](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/)
  use trackers hidden in other parts of browser like ETags or HSTS headers.
  These are not cleared by clearing cookies and can potentially identify users uniquely or be used with fingerprinting.
* **CNAME Cloaking:** [CNAME Cloaking](https://webkit.org/blog/11338/cname-cloaking-and-bounce-tracking-defense/)
  involves a publisher setting up a subdomain for an ad tech tracker so it appears as a first-party domain for cookie purposes.

Advertisers and ad tech companies are also leery of Google having too much control.
With states like California and Virginia adopting privacy legislation,
they know the privacy landscape is changing and some of them are trying to get in front of it with their own proposals.
The Trade Desk, an ad tech company,
has an alternative approach they call [Unified ID 2.0](https://www.thetradedesk.com/us/about-us/industry-initiatives/unified-id-solution-2-0).
This will only work for sites and apps that support logins
since it operates off of hashed email addresses, but once logged in,
users can be targeted with personalized ads.

Lastly, some companies are trying to pressure Google and other players into slowing or reversing these changes.
When Apple's iOS 14 required apps using ad tracking to request user permission,
Facebook cried foul and is claiming that these [privacy protections hurt small businesses](https://www.washingtonpost.com/technology/2020/12/16/facebook-apple-idfa-ios14-small-business/).
The UK's Competition and Markets Authority (CMA) at the request of advertising market participants
is specifically investigating the changes to Chrome and the Privacy Sandbox.


[comment]: # (Other changes coming to ad tech)
[comment]: # (https://github.com/privacycg/private-click-measurement)



## How do these changes affect ethical advertising?

For our small ethical advertising segment of the industry,
these changes will have pretty minimal effect.
Third-party cookies and all their prospective replacements
are all about gathering information on you (and millions of people like you)
in order to target ads to you based on your interests or to you personally.
Ethical advertising doesn't use third-party cookies
and doesn't store personal information.
We aren't trying to show ads to you personally, but instead
like traditional advertising on TV, in newspapers, or in magazines,
ethical ads are targeted to the content of the page.
We put ads for developers on developer focused sites. That's it.

If you're interested in a future for advertising without intrusive surveillance and user tracking,
read more about our [vision for ethical advertising]({filename}/pages/vision.md).
