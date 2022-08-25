Title: Going v1.0: The Backstory and Future of Our Ad Network
Date: August 30, 2022
description: After two years, we released v1.0 of our ad server. We wanted to share our story and our progress in building a privacy focused ad network for devs including more details of our machine learning model.
tags: ad-server, community, machine-learning
authors: David Fischer
image: /images/posts/2022-version-1-0.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/es/@an_ku_sh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ankush Minda</a> on <a href="https://unsplash.com/s/photos/release?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


A few weeks ago, we released the v1.0 version of our ad server.
While versioning schemes are somewhat arbitrary,
releasing v1.0 felt like a significant milestone (v1.0.0 implies stability in [SemVer](https://semver.org/)).
We wanted to take the time to share our story of how we got here,
the details of both the software and movement we're building,
and what's coming next for EthicalAds.


## Our story

A few years back, we were building Read the Docs, a documentation hosting platform,
but there wasn't any monetization.
It was a service with millions of monthly visitors that thousands of projects relied on for their docs
but run by folks with day jobs who wore pagers for their side project.
It wasn't sustainable.

The obvious way to monetize was ads.
However, we cared about the privacy of our visitors
and we didn't want ad companies to track our users around the web.
We went to a few ad networks and asked if we could proxy ad traffic or even just run ads without cookies.
They laughed at us and told us to take it or leave it.
So we built our own ad network including writing our ad server and client from scratch
and did all our own sales and marketing.

Fast forward to July 2020, when our friends over at CodeFund shut down, we launched our ad network.
Expanding our ads beyond Read the Docs had been on the roadmap
but CodeFund shutting down greatly accelerated our schedule
while also dropping a number of sites interested in privacy-preserving ads into our lap.


> "EthicalAds' targeting provides a better ad experience for our community members."
>
> &mdash; Ido Shamun, Co-founder & CTO of daily.dev


Today, we now have ~130 publishers and we gross just under $60k per month in ad revenue
of which 70% goes to publishers.
Most of our publishers are small sites or open source projects so to send them ~$40k/mo feels great.


## How EthicalAds works

Firstly, we only show developer-related ads on developer sites.
No ads about a product whose site you visited last week and nothing off topic.
All our advertisers sell SaaS products for developers, cloud infrastructure,
they're hiring devs, or something like that.

All our publishers (that's advertising lingo for sites showing ads) are hand approved.
We make sure each site is the right fit for our advertisers and protect their brands.

Beyond the basics, we built a crawler that crawls the sites on our network to help target our ads.
Using an ML classifier (built with [SpaCy](https://spacy.io/)),
it can tell if a page is about data science or about full stack development.
This contextual targeting allows advertisers to reach the niche they are focused on
and ensure the ads perform well.
If you're really interested, you can try out our classifier, a part of our model,
on [HuggingFace](https://huggingface.co/spaces/davidfischer/ea-classifier), a site for sharing ML models.

After trying out our model and training it for a couple of months,
we were finally happy enough with the performance to integrate it into our ad serving pipeline.
We're really proud of this and that's why we went from v0.55.0 (yes, 50+ pre-stable releases) to v1.0.0.


## What's next

Apart from privacy, one thing that separates us from the big ad players like Google and Facebook
is that they can sell ads for almost anything you can think of.
Currently, we have some traffic for a lot of developer niches,
but outside of our main [audiences and topics]({filename}/pages/advertisers.md#audiences),
it can be a challenge to run really focused campaigns on topics like "2 Factor Authentication"
or "Web Development with Go".

However, as we get larger, our contextual targeting will scale well as our network scales
and these highly focused campaigns will be possible.
It's not an understatement to say that this kind of more advanced contextual targeting is the future of EthicalAds.


> "EthicalAds made it simple to help promote all the PSF sponsors across our web properties, without worrying about user tracking."
>
> &mdash; Ee Durbin, Director of Infrastructure - Python Software Foundation

Another area we are looking at is to help [sponsorships]({filename}/pages/landing-pages/sponsorship.md)
at large organizations deliver more value for sponsors.
Currently, we're helping the Python Software Foundation
to promote their sponsors across their ecosystem of web properties
while also allowing them to report important metrics like how many times a sponsor's logo was seen and clicked.


We're really excited about implementing new features on our ad network and continuing to iterate on sponsorships.
Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap.
We always love to hear from you.
