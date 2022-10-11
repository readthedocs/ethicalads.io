Title: EthicalAds Newsletter - September 2022
Date: October 11, 2022
description: Updates from September 2022 (a record month), including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community
authors: David Fischer
image: /images/posts/2022-september-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@ejleusink?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik-Jan Leusink</a> on <a href="https://unsplash.com/s/photos/harvest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


September was a record month in terms of revenue, publisher revenue, and paid ads delivered!


## New features

These are the other major features we released in September:

* We released a couple cool pieces of content including a retrospective
  in dealing with some
  [ad scammers impersonating open source developers]({filename}../posts/2022-scammers-impersonating-oss-devs.md) and a [privacy teardown of search engines]({filename}../posts/2022-privacy-teardown-search-engines.md).
* We released our [Q4 prospectus]({static}../prospectus/ethicalads-advertiser-prospectus.pdf).
  One significant change here was to further breakdown prices in Europe
  so we can deliver advertisers exactly what they're looking for at a fair price.
* One of the suggestions we got about our contextual targeting model was to spend more time and resources
  on training. As a result, we trained a version in the cloud on GPUs and it does seem to perform
  quite a bit better. That effort started last month and should roll out in October.

You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html) and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## September advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2022-09-01&end_date=2022-09-30&campaign_type=paid&revenue_share_percentage=All+shares&sort=name

In September 2022:

* We generated **$47,493.48** for our publishers. This was our highest publisher revenue month ever!
* We had **145 publishers** on our network with at least one paid ad impression.
* We had **21,384,298** paid ad views across the world.

Our big push on marketing in August really paid dividends in September.
Last month, I suggested that September would be a very good month and it was a record by all our metrics.
I don't expect October to be quite as good as September for a few reasons, but it will still be a very
strong month.


## Upcoming features

The major features in our upcoming roadmap for October:

* We plan to put our GPU-trained model into production.
  In testing, it has shown considerably improved accuracy over our existing model.
* We are creating a campaign pricing calculator to help advertisers put together a campaign
  that meets their advertising goals and their budget.
* This month, both Eric and I will be at Djangocon US in San Diego.
  If you're coming to the conference, please stop by and say hello!

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
