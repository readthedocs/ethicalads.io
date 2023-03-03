Title: EthicalAds Newsletter - February 2023
Date: March 7, 2023
description: Updates from February 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2023-february-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@blue_jean?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Izzy Park</a> on <a href="https://unsplash.com/photos/uLrwuNznzO0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>



## New features

Our progress in February was:

* We released a number of performance improvements to our reporting.
  All timeout issues have been resolved and performance is downright snappy on most reports.
* We released some improvements to our ad pacing that will yield
  better performance for our advertisers. Specifically we now allow pacing by the hour instead of by the day to spread out ads across the day more effectively.
* We released a change that will prioritize ads
  with high CTRs. This is another quality of life change for advertisers
  in order to improve their performance.
* We [documented a few tips on measuring conversions]({filename}../pages/learning-hub/advertiser-guide.md#measuring-conversions).
  Advertisers are always comparing how much they spend on ads and what they got in return.
  We want our ad network to be measured consistently
  against other channels so advertisers can see for themselves that our network works well.
* We built a number of internal sales dashboards to better measure our inventory,
  what's starting soon and what is outstanding. The hope here is to be able to bring
  in some additional hands for our small sales team.

You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html) and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## February advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2023-02-01&end_date=2023-02-28

In February 2023:

* We generated **$34,464.67** for our publishers.
* We had **147 publishers** on our network with at least one paid ad impression.
* We had **12,773,611** paid ad views across the world.

As we mentioned last month, we expected February to be a bit stronger than January
and we generated about $2,500 in additional revenue for our publishers despite the shorter month.
We expect March to be even stronger still.


## Upcoming features

The major features in our upcoming roadmap for March:

* We aim to update our advertiser guide with more examples of successful ads
  and concrete ways to track and measure the success of your ad campaigns
  (without compromising privacy).
  This didn't happen in February because it involved getting permission from advertisers
  which was a bit of a slow process.
* There has been some interest from the open source community in our server.
  We are spending some time to make it easier to take our ad server
  and use it to serve ads for your own project or website.
* Currently, we are combining a few different techniques in order to categorize websites
  where we serve ads including from our ML model, our previous more naive model,
  and in some cases from publishers themselves.
  Now that we're pretty happy with our ML model, we are going to make a few tweaks
  that will result in better targeting results for our advertisers.
* We are also working on some minor UX improvements to our ad server for advertisers.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
