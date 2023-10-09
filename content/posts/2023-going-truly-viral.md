Title: What Happens When Elon Musk Tweets A Link To Your Service
Date: September 19, 2023
description: Back in February, we had a service degradation event resulting from a massive surge of viral traffic. This is a post-mortem about that near-downtime event.
tags: analytics, performance, publishers
authors: David Fischer
image: /images/posts/going-viral-2023.png


Back in February, one of the publishers on our ad network went truly viral.
Simon Willison is the author of [Datasette](https://datasette.io/),
a tool for exploring and publishing data,
and he'd written a [great post](https://simonwillison.net/2023/Feb/15/bing/)
about some of the issues with Microsoft's hasty release of AI-powered Bing.

In addition to being in the #1 spot on HackerNews,
Elon Musk [tweeted](https://twitter.com/elonmusk/status/1625936009841213440) a link directly to the post.
This post is going to cover how our infrastructure responded to this huge spike in traffic
and what we've done since then to make sure EthicalAds will be better prepared if this happens again.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2023-musk-tweet-bing.png" alt="Elon Musk tweets a link to Simon's blog on Bing">
  <p>Elon Musk <a href="https://twitter.com/elonmusk/status/1625936009841213440">tweets</a> (X's?) a link directly to Simon's blog on AI-powered Bing</p>
</div>


## Going viral vs. going truly viral

On a normal weekday morning US time, EthicalAds serves about 15,000 ad requests every 5 minutes.
That's about 3k requests per minute or ~50 per second
(check out our post about [scaling to 100 req/s]({filename}../posts/2021-hundred-requests-per-second-with-django.md)).
This is our peak traffic as there's overlap between the US and Europe
which is where a lot of the audience for our ads live and work.
In the vast majority of cases, these requests cannot be cached
and involve reads and writes to databases and caches.

Both our own blog and various publishers have made it to the top of HackerNews before,
and that usually results in a pretty sizable traffic spike.
However, that's usually just tens of thousands of extra hits.
Between autoscaling and a focus on performant code, we won't even notice.
This spike quadrupled our traffic to ~200 requests per second
and over 1M additional requests.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2023-cf-traffic-spike.png" alt="Traffic spiked to 200 requests per second at the peak">
  <p>Traffic spiked to 200 requests per second at the peak</p>
</div>


## How our infrastructure responded

After the tweet at 11:15am local time, we saw a brief downtime for less than 1 minute at 11:19.
In hindsight, this was autoscaling kicking in to handle the surge of requests,
but at the time we mostly dismissed it as a network blip.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2023-pagerduty-downtime-alert.png" alt="PagerDuty downtime alert">
  <p>We got a brief 1 minute downtime alert as we autoscaled up</p>
</div>

Within about 10 minutes, we knew something was wrong.
We have a number of alerts to let us know when our infrastructure is having a problems.
One of those is an [Apdex alert](https://en.wikipedia.org/wiki/Apdex)
that triggers whenever our Apdex score drops.
Apdex is pretty convoluted, but basically it measures how far performance is from normal, acceptable performance.
For us, we aim for 50-60ms per ad request with a 95th percentile below 100ms.
By 11:30, despite autoscaling, our median performance was over 100ms and our 95th percentile was over 200!
We weren't down, but our ad server wasn't exactly happy either.

We immediately dug into Cloudflare traffic analytics,
which is a much lighterweight, shorter term analytics than something like Google Analytics.
Ours stores only a week's worth of data.
Rather than understanding user intent, it's used to get a snapshot of overall
traffic, see who is hitting your servers and how frequently.
It's great for mitigating DDOS attacks
(or an inadvertant one like the [Slashdot effect](https://en.wikipedia.org/wiki/Slashdot_effect))
and not intended to optimize conversions.


## What we saw and how we responded

Cloudflare Analytics showed that we were getting hammered by iPhones.
Nine of our top 15 user agents were iPhones which is *not normal* for us at all.
Under normal conditions, our network is about 90% desktop/laptop traffic.
Developers read developer resources on computers, not their phones apparently.
Briefly, we thought our ad server or one of our publishers was getting DDOSed
by disguising fake traffic as iPhones.
We considered a [Cloudflare WAF](https://www.cloudflare.com/application-services/products/waf/) rules
to challenge all iPhones and Android mobile traffic as well as some per-publisher rules.

By 12:15, we'd figured out that Simon's blog was getting clobbered,
and that he was #1 on HN.
However, we hadn't seen Elon's tweet yet and we were confused as to why it was so much more traffic than a site usually gets from the #1 spot.
We were also pretty sure by this point that it wasn't a DDOS.
Cloudflare was showing that the requests per IP was low
which usually indicates legitimate traffic rather than something malicious.

By about 1pm, traffic was still elevated but performance had settled back to normal.
This is also about when we saw Elon's tweet and figured out the cause of this spike.
Simon had a [followup post](https://simonwillison.net/2023/Feb/17/analytics/)
that showed he got about 1.1M pageviews from that post in a 24 hour period
with the vast majority of that traffic coming from Twitter.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2023-cloudflare-waf-challenge-phones.png" alt="A Cloudflare WAF rule to challenge any mobile user">
  <p>During the traffic spike, we considered creating a rule to challenge all mobile traffic</p>
</div>


## Setting ourselves up for future success

Huge traffic spikes like this happen and it's good to be prepared.
Since February, we've setup a number of WAF rules
and rate limiting rules specifically to handle spikes whether natural or from a DDOS.
Some of these rules are running all the time
while some can be toggled on with a moment's notice to handle huge traffic spikes.
Many similar rules have also been rolled out by our parent Read the Docs
which also gets surges of traffic periodically.
Cloudflare has been invaluable for handling these traffic spikes.

Thanks for reading this post-mortem all the way to the end.
If you have any feedback on this post, our product, or anything else,
[get in touch]({filename}../pages/contact.md)!
We always love to hear from you.
