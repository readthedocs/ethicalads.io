Title: EthicalAds Newsletter - November 2023
Date: December 5, 2023
description: Updates from November 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2023-november-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@partyintheshire?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erica Marsland Huynh</a> on <a href="https://unsplash.com/photos/pumpkins-on-stairs-DLxOLOQPNAc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>



## New features

Our progress in November was:

* We built an initial experiment to test rotating ads on our own publisher Read the Docs.
  To start with, this will be very conservative and only rotate ads that have been visible
  for over a full minute and only when there's user input.
  We're going to see how this performs in terms of ad performance in December.
* We are making a few improvements to our contextual targeting to support more campaigns
  targeting niche keywords. Our crawler, that crawls sites where our ads appear,
  started running some keyword analysis in addition to the topic analysis we are running.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## November advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2023-11-01&end_date=2023-11-30

In November 2023:

* We generated **$42,955.94** for our publishers.
  This is a good month for revenue but not a record and down slightly from October.
* We had **173 publishers** on our network with at least one paid ad impression.
* We had **20,641,944** paid ad views across the world.
  This is down from from the previous month but mostly reflects fewer global campaigns.

We have been overbooked quite heavily and that abated slightly in November.
Inventory is still very tight especially in North America where we continue to be sold out almost completely.
There's a bit more inventory globally and a small amount in Europe.

Last month, I mentioned we were working to bring on some high-quality publishers.
We're happy to announce that [dev.to](https://dev.to/) has started using EthicalAds
and thrilled to work with the DEV community.
This is the culmination of some hard work and testing
to get a tight integration that works well on both sides.


## Upcoming features

The major features in our upcoming roadmap for December:

* We are going to continue our experiments with ad rotation
  where ads have been visible on the page for a minute or more.
* We're improving our topic classifier by adding more examples
  of each of [our audiences]({filename}/pages/advertisers.md#audiences) to the training set.
* We'll be releasing our Q1 prospectus and pricing updates in the next week or so.
* We're still hoping to collaborate with a few advertisers who use Tableau (or something similar)
  to make sure we build exactly what they want in terms of reporting.
  If you're interested in this, please [get in touch]({filename}../pages/contact.md)!


Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
