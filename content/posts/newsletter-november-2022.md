Title: EthicalAds Newsletter - November 2022
Date: December 7, 2022
description: Updates from November 2022, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2022-november-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@kerstinwrba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kerstin Wrba</a> on <a href="https://unsplash.com/s/photos/thanksgiving?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>



## New features

These are the major features we released in November:

* We did a followup post on [privacy search engine recommendations]({filename}../posts/2022-best-search-engines-for-your-privacy.md).
  It outlined the landscape and makes a few suggestions,
  but ultimately, the right search engine for you depends on what you're looking for.
* We recorded product overview videos to show what it's like to use our platform.
  They are live on our [YouTube channel](https://youtube.com/@ethicalads).
* On the product side, we did a number of performance improvements to our reporting
  and offloaded more reporting to Metabase which we've
  [written about previously]({filename}../posts/2021-visualizing-ad-data-at-ethicalads.md).

You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html) and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## November advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2022-11-01&end_date=2022-11-30&campaign_type=paid&revenue_share_percentage=All+shares&sort=name

In November 2022:

* We generated **$38,852.04** for our publishers.
* We had **148 publishers** on our network with at least one paid ad impression.
  Currently, we are being very
* We had **17,683,179** paid ad views across the world.

As we mentioned last month, we expected November to be slightly weaker
than the record months we had in September and October.
The end of the year is usually a little weaker both in terms of supply
(folks go on vacations and thus don't view ads) and demand,
but so far things are holding up well by comparison to previous years.



## Upcoming features

The major features in our upcoming roadmap for December:

* We are still aiming to get our GPU model building with a CI service.
  This would mean retraining and updating the model anytime
  we add new hand categorized data to our data set.
  This tight feedback loop will create a flywheel to help our model get better more rapidly.
* We will have a Q1 prospectus with updated pricing early in the month.
* We're aiming to integrate parts of our [campaign calculator]({filename}../pages/advertisers-calculator.md)
  into our onboarding process to help advertisers plan and start their first campaign.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
