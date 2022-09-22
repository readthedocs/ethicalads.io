Title: Privacy Teardown: Search Engines
Date: October 4, 2022
description: Our first privacy teardown post looks at search engines to see how they compare from a privacy perspective. We use off-the-shelf tools and techniques to learn what both traditional and more privacy-focused search engines are doing with your data.
tags: privacy, privacy-teardown
authors: David Fischer
image: /images/posts/2022-privacy-teardown-search-engines.png


Do search engines really track you?
What about search engines that claim not to track you?
In this privacy teardown, we use off-the-shelf tools, data,
and methods to see how traditional and more privacy-focused search engines treat and share your data.

<a href="#results">Skip to the results!</a>

## Methodology

We selected the largest traditional search engines Google and Bing as well as a few more privacy-minded search engines like DuckDuckGo, Brave Search, Mojeek and You.com to see how they stack up and whether there was any measurable differences we could see in their data sharing (Mojeek and You.com have advertised with EthicalAds in the past but did not take part in this post).

For tools, we used a number of off-the-shelf tools and data sources:

* [The Markup](https://themarkup.org/), a nonprofit news source that looks at how Big Tech uses technology,
  produced a tool called [Blacklight](https://themarkup.org/blacklight). Blacklight looks for third-party cookies, known trackers, non-cookie tracking methods, session or keystroke capturing tech, and other third-party pixels.
* [DuckDuckGo](https://duckduckgo.com/), one of the search engines we're looking at, produces a data set called [Tracker Radar](https://github.com/duckduckgo/tracker-radar) used by their own mobile browsers, browser extensions, and other tools. Tracker Radar has data on the most common trackers, what they're used for, and a way to group trackers by their parent entity (eg. Doubleclick, GoogleAnalytics, and YouTube are all Google). For our test, we checked Tracker Radar through the [DuckDuckGo Privacy Essentials](https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg) extension which also gives a letter grade (A-F) based on the requests loaded and the privacy practices as reported by [TOS;DR](https://tosdr.org/).
* [The Easylist](https://easylist.to/), one of the largest ad blocker lists used by ad blocking extensions like uBlock Origin and AdblockPlus, produces the EasyPrivacy list which has a huge list of trackers, analytics, and other scripts formatted for use by ad blockers. For our test, we ran uBlock Origin with an updated EasyPrivacy list and all other lists disabled.
* The [EFF](https://www.eff.org/) produces a browser extension called [Privacy Badger](https://privacybadger.org/) which is an algorithmic tracker blocker. Rather than relying on a list of domains or scripts (like EasyPrivacy or Tracker Radar), the extension knows what tracking looks like and blocks trackers when it sees them.
* We did a brief manual inspection looking at all third-party and subdomain requests as well as cookies and persistent storage. This was a sanity check in case the search engines are handling different requests differently and also to do a quick DNS lookup on subdomains looking for CNAME cloaking, a way to hide third-party trackers as first-party requests.

For each search engine, we loaded the homepage and a search engine results page (SERP).
Extensions were disabled except for the tool being used.

One caveat to our analysis is that not all tracking can be seen by these methods.
For example, Google could use search history data in their other products without using any third-party trackers
since they are the *first-party* when you search Google.
Lastly, since data is transmitted to the servers of these search engines, there's no way to tell what their servers do with the data beyond their privacy policies.



## Results


### Google

* **Blacklight**: Blacklight reported 1 tracker sent to doubleclick.net (Google's ad arm). No keystroke or session capturing found.
* **Tracker Radar**: Grade D (poor privacy practices). Blocked requests to doubleclick.net and googleadservices.com
* **EasyPrivacy**: Blocked requests to doubleclick.net and googleadservices.com. Continued to block additional logging XHRs as long as the tab was in focus.
* **PrivacyBadger**: Blocked requests to doubleclick.net
* **Manual Inspection**: Loaded resources from google.com subdomains, doubleclick.net (Google ads), gstatic.com, and ytimg.com (YouTube). All of these resolved to Google's infrastructure. Persisted long term (over 1 year) cookies on a few google.com subdomains and used local storage.

Overall, Google appears to be sharing data with other Google properties but not with any third-parties.
Google does persist long-term unique identifiers even for logged out users simply doing a query or loading the homepage.


### Bing

* **Blacklight**: No trackers. Third-party cookies detected for "login.microsoftonline.com". No keystroke or session capturing found.
* **Tracker Radar**: C+ (unknown privacy practices). The Bing homepage had a few requests blocked after scrolling including requests to outbrain.com and zemanta.com, two adtech companies. Tracker Radar noted but did not block requests to Akamai. Repeated homepage loads produced slightly different results. The SERP page reported no trackers and no third-party requests.
* **EasyPrivacy**: Blocked numerous requests to both Microsoft and third-party domains (10-15% of requests) on the homepage. Continued to block additional XHRs to Bing as long as the tab was in focus. The SERP page only blocked what appeared to be logging requests.
* **PrivacyBadger**: On the homepage, allowed a request to akamaized.net but prevented cookies from being sent. After scrolling on the homepage, blocked requests to cheqzone.com, outbrain.com, and zemanta.com. No trackers found on the SERP page.
* **Manual Inspection**: Loaded resources from many domains including msn.com subdomains, virtualearth.net (Bing maps), akamaized.net, and cloudfront.net. The one standout request was to trace.mediago.io which is adtech from Baidu, a Chinese search engine. The SERP page loaded data only from bing.com subdomains and microsoft.com subdomains. All of the requests to Microsoft domains resolved to Microsoft's infrastructure. Bing persisted long term cookies on various Microsoft properties and used local storage. Firefox (our test browser) also blocked a number of third-party cookies.

The Bing homepage loads a lot of content compared to many other search engines
including data from third-party ad tech companies. This results in some amount of data sharing.
The Bing SERP page by contrast only appears to communicate with Microsoft.
Bing does persist long-term unique identifiers even for logged out users simply doing a query or loading the homepage.

<div class="postimage text-center">
  <img class="w-50 shadow-lg" src="{static}../images/posts/2022-privacy-badger-bing.png" alt="Results of the EFF's Privacy Badger run on the Bing homepage">
  <p>Results of the EFF's Privacy Badger run on the Bing homepage</p>
</div>


### DuckDuckGo

* **Blacklight**: No trackers or third-party cookies detected. No keystroke or session capturing found.
* **Tracker Radar**: A (it's a self-grade). No third-party requests or trackers reported on the homepage or SERP page.
* **EasyPrivacy**: Requests to improving.duckduckgo.com (DuckDuckGo's "anonymous improvement engine") were blocked.
* **PrivacyBadger**: No trackers detected on the homepage or SERP page.
* **Manual Inspection**: DuckDuckGo only made requests to duckduckgo.com and subdomains. None of these domains used CNAME cloaking. DuckDuckGo didn't persist anything to the browser at all.

DuckDuckGo doesn't load any third-party data and doesn't persist any unique identifiers or anything else.


### Brave Search

* **Blacklight**: Repeated attempts on separate days to run Blacklight on Brave Search timed out. It is possible that Blacklight has an issue with Brave Search or that Brave is blocking Blacklight.
* **Tracker Radar**: Grade: B+ (unknown privacy practices). No third-party requests or trackers reported on the homepage or SERP page.
* **EasyPrivacy**: No requests blocked. All requests went to brave.com or a subdomain.
* **PrivacyBadger**: No trackers detected on the homepage or SERP page.
* **Manual Inspection**: Brave Search only made requests to 3 domains in total: search.brave.com, imgs.search.brave.com, and cdn.search.brave.com. None of these domains used CNAME cloaking. Brave did not persist any cookies. They did persist some data to local storage but it did not appear to contain any unique identifiers.

Brave doesn't load any third-party data and doesn't persist any unique identifiers.


<div class="postimage text-center">
  <img class="w-50 shadow-lg" src="{static}../images/posts/2022-ddg-privacy-essentials-bravesearch.png" alt="Results of DuckDuckGo's Privacy Essentials (using Tracker Radar) on Brave Search">
  <p>Results of DuckDuckGo's Privacy Essentials (using Tracker Radar) on Brave Search</p>
</div>


### Mojeek

* **Blacklight**: No trackers or third-party cookies detected. No keystroke or session capturing found.
* **Tracker Radar**: Grade: B+ (unknown privacy practices). No third-party requests or trackers reported on the homepage or SERP page.
* **EasyPrivacy**: No requests blocked. All requests went to www.mojeek.com strictly.
* **PrivacyBadger**: No trackers detected on the homepage or SERP page.
* **Manual Inspection**: Mojeek only made requests strictly to www.mojeek.com. Mojeek didn't persist anything to the browser at all.

Mojeek doesn't load any third-party data and doesn't persist any unique identifiers or anything else.


<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2022-blacklight-results-mojeek.png" alt="Results of Blacklight run on Mojeek.com">
  <p>Results of Blacklight run on Mojeek.com</p>
</div>


### You.com

* **Blacklight**: No trackers or third-party cookies detected. No keystroke or session capturing found.
* **Tracker Radar**: Grade: B+ (unknown privacy practices). The homepage and SERP page reported third-party requests to Plausible.io, a privacy-friendly analytics company and to launchdarkly.com, a service that helps developers run A/B tests and experiments but none of these requests were blocked.
* **EasyPrivacy**: Two requests blocked to events.launchdarkly.com (Note: LaunchDarkly has advertised with EthicalAds). All other requests to you.com, a subdomain, or t-msedge.net (Microsoft's CDN).
* **PrivacyBadger**: No trackers detected on the homepage or SERP page.
* **Manual Inspection**: You.com made requests to you.com and subdomains, plausible.io, and launchdarkly.com subdomains. None of these domains used CNAME cloaking. You.com persisted some cookies although none for more than a month. They also used local storage but it did not appear to contain any unique identifiers.

You.com does load third-party resources from a small list of select partners but doesn't persist any long term unique identifiers.


## Conclusion

From a privacy perspective, the more privacy minded search engines
did a better job not sharing data or using long term unique identifiers (a hallmark of tracking)
than the big search engines like Google or Bing.
Google appeared to share data across Google properties but not with third-parties.

We didn't see any of the worst practices like CNAME cloaking or logging keystrokes.
The worst we saw was considerable third-party data sharing with adtech companies on the Bing homepage.
By contrast, however, the Bing SERP page only shared data with Microsoft.

Comparing the tools we used, the browser extensions did a better job of detecting all the third-party requests
than Blacklight although that isn't too surprising since we had much more control with the extensions.
The exhaustive EasyPrivacy list blocked the most requests but many of those were not third-party requests
or trackers. Both Privacy Badger and DuckDuckGo Privacy Essentials/Tracker Radar did very similarly
in identifying and blocking requests.

Hopefully you enjoyed this privacy teardown post for search engines.
Please [get in touch]({filename}../pages/contact.md) if you have any ideas or feedback on your teardown or methodology.
We always love to hear from you.
