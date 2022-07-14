Title: EthicalAds Newsletter - June 2022
Date: July 14, 2022
description: Updates from June 2022, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community
authors: David Fischer
image: /images/posts/2022-june-newsletter.jpg
image_credit: <a href="https://unsplash.com/@polarmermaid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anne Nygård</a> on <a href="https://unsplash.com/s/photos/june?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


## New features

These are the major features we released in June:

* We made a number of improvements to detecting keywords where we show ads.
  In the end, this project scoped up a little bit and we built a pretty awesome (for us anyway)
  machine learning model that detects what pages are about.
  It will roll into production in July.
* We rolled out an updated [Q3 prospectus]({static}../prospectus/ethicalads-advertiser-prospectus.pdf)
  and a small simplification to our pricing.
* We released a new [publisher spotlight interview]({filename}2022-publisher-spotlight-series-dataskeptic.md)
  with Kyle Polich from Data Skeptic.
* Just to follow up on a May feature, we saw quite a few publishers start using the fallback ads!


You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html) and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## June advertising stats

In June 2022:

* We generated **$37,579.32** for our publishers.
  This is slightly down from our record month in May but still very good.
* We had **128 publishers** on our network with at least one paid ad impression.
* We had **15,407,959** paid ad views across the world.

There's a lot of talk of a market downturn but that hasn't shown up yet
in our numbers. We are continuing to see strong demand for advertising.


## Tricky bits

While we're pretty excited about the ML model we built,
we don't have a true data scientist at EthicalAds or at Read the Docs.
As a result, there's been quite a ramp up in terms of learning the ML state of the art.
We have created a [SpaCy](https://spacy.io/) based text classifier.
This is tricky because it's outside of our comfort zone,
but to go from almost nothing to something just about ready for production
in less than a month is very cool.


## Upcoming features

The major features in our upcoming roadmap:

* As I mentioned earlier, our topic detection project will roll out in July.
* I'm a little late in posting this blog but we released support
  for an [ad fixed to the footer](https://ethical-ad-client.readthedocs.io/en/latest/#fixedfooter)
  of the page directly to our ad client in early July.
  This allows publishers to have a high performing ad placement without any custom code.
* We are building topic specific landing pages for our core topics
  like data science and security & privacy. The goal is to help our SEO and rank for things
  advertisers search for like "advertising to data scientists".

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
