Title: EthicalAds Newsletter - August 2025
Date: August 12, 2025
description: Monthly update from August 2025, covering the previous month and including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2025-august-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@ultratunafish?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tunafish</a> on <a href="https://unsplash.com/photos/a-field-of-sunflowers-HGr-WnBxkNU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>


Before I dive into the monthly update, going forward,
we'll be switching to having these updates quarterly instead of monthly.
This will mean there's fewer, larger updates but we're hoping it makes it easier to keep up-to-date
with our progress on building a more transparent ad network.
Expect the next update in early October.


## New features from the previous month

* We made a number of improvements to our [niche targeting]({filename}../pages/niche-targeting.md)
  and we're going to update our topic classifier
  to use AI model embeddings to classify similar content for advertisers.
* We made a lot of effort classifying the long tail of content across our network,
  tons of developer topics can support small but highly focused niche targeting ad campaigns.
  We've run campaigns focused on such niches as application security testing,
  PDF document extraction, web scraping, Jupyter notebooks, and many more.
  For advertisers who need pretty fine targeting like what they'd get for search ads,
  this is a great option.
* We released a new version of our ad client that allows for much easier customization by publishers
  using CSS properties.
  See the [ad client docs](https://ethical-ad-client.readthedocs.io/en/latest/index.html#customizing-styles) for details.


You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## July advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2025-07-01&end_date=2025-07-31

Last month:

* We generated **$48,030.42** for our publishers and they'll receive this in a payout this week.
  This was a healthy increase from June.
* We had **182 publishers** on our network with at least one paid ad impression.
  This has been slowly creeping up and we've been seeing strong demand for our kind of network from publishers.
* We had **22,164,099** paid ad views across the world another sizeable increase.

We are seeing strong demand across our network. August started a bit slow for a few days
but we're expecting strong demand through the rest of the month.
There will be some small openings in Europe and in regions beyond North America and Western Europe.


## Upcoming features

The major features in our upcoming roadmap for August:

* We are working on an improvement to have an automatic light-dark mode on our ad client.
  This already works using ["prefers-color-scheme"](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
  but this upcoming change will make it work better sites that use a light and dark mode UI toggle.
* We haven't yet finished our upcoming content piece explaining more about how we're using embedding models
  for niche targeting and how off-the-shelf LLMs can improve that.
  We're still experimenting a lot and didn't want to publish a blog detailing our approach
  as we're still working on lots of improvements.
* As I mentioned, we're still making improvements constantly to our analyzer and to our niche targeting.
  The big upcoming change is that we're actively working on improving our topic classifier
  that classifies pages across our network into [audiences]({filename}/pages/advertisers.md#audiences)
  we sell to advertisers. This will now classify using similarity techniques that we're refining for niche targeting. We're very excited to talk about this in more detail as it works pretty well.


Thanks again for being along with us on this journey to build an ethical ad network.
Please [let us know]({filename}../pages/contact.md) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
