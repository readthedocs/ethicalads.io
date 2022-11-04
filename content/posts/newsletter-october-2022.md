Title: EthicalAds Newsletter - October 2022
Date: November 8, 2022
description: Updates from October 2022, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community
authors: David Fischer
image: /images/posts/2022-october-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@cazault?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Menidrey</a> on <a href="https://unsplash.com/s/photos/halloween?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


October wasn't quite a record month in terms of revenue,
but it was our best month ever except for September.


## New features

These are the major features we released in October:

* We released a [campaign calculator]({filename}../pages/advertisers-calculator.md)
  to help advertisers budget for a campaign based on the responses they're hoping to achieve.
* We did our first [privacy teardown of search engines]({filename}../posts/2022-privacy-teardown-search-engines.md).
  Depending on the response we get, we think this could be a series of posts
  to educate audiences on what to look for in services from a privacy perspective.
* Our GPU trained contextual targeting model rolled out into production in October.
  So far, the results are much better than the previous iteration.
  There were some issues taking the model from development into production,
  but those were worked out.

You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html) and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## October advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2022-10-01&end_date=2022-10-31&campaign_type=paid&revenue_share_percentage=All+shares&sort=name

In October 2022:

* We generated **$45,511.07** for our publishers. This was our second highest publisher revenue month after September
* We had **152 publishers** on our network with at least one paid ad impression.
  This number continues to creep up as more sites become interested in making money without invasive tracking.
* We had **20,236,866** paid ad views across the world.

As I expected, October was a very strong month for us and for our publishers.
We usually see a seasonal slowdown around the holidays and between fewer ads shown over the Thanksgiving holiday
in the US and other seasonal pullback, we expect November to be a quite bit weaker than October.

We've definitely seen some advertisers tighten their budgets as well and that's further contributing to a weaker finish to the year.
Usually advertising is back to full swing in January or February,
but outside of the brief Covid crash in March 2020,
we haven't operated through a true downturn.
Regardless, we can weather an economic downturn if it comes.



## Upcoming features

The major features in our upcoming roadmap for November:

* While it's early November, we already announced our
  [partnership with the PSF]({filename}../posts/psf-ethicalads-partnership.md)
  to help them manage and roll out their sponsors logos and imagery to all their properties.
* From a content marketing perspective, we're planning to do a followup post
  on our privacy teardown of search engines,
  a post with details about how our ML model works,
  and a blog detailing how ad blockers can actually help a privacy-focused network like ours.
* On the product side, we're hoping to get a continuous integration service configured
  for our GPU trained model. This would mean retraining and updating the model anytime
  we add new hand categorized data to our data set.
  This tight feedback loop will create a flywheel to help our model get better more rapidly.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
