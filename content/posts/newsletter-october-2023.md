Title: EthicalAds Newsletter - October 2023
Date: November 7, 2023
description: Updates from October 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2023-october-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@abedismail?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Abed Ismail</a> on <a href="https://unsplash.com/photos/the-sun-is-setting-over-the-clouds-in-the-sky-OYzpw-g6foo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>



## New features

Our progress in October was:

* On top of our machine learning based classifier we use to categorize pages where our ads appear,
  we added more granular keyword detection which can be useful on campaigns targeting niche
  keywords instead of our broader [audiences section]({filename}/pages/advertisers.md#audiences).
* We made a number of advertiser related improvements on our ad server and client
  to improve our ability to target niche keywords.
* We rolled out some improvements to better handle multiple ad placements on the same page.
  Our policy is still to not have our ads beside competitors' ads
  and to have just 1 ad at a time,
  but there are some situations like very long pages (or single-page apps)
  where we allow multiple ad placements on a case by case basis.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## October advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2023-10-01&end_date=2023-10-31

In October 2023:

* We generated **$46,293.84** for our publishers.
  This isn't quite a record month but this is a solid increase from September
  and one of the best months ever.
* We had **173 publishers** on our network with at least one paid ad impression.
  This is unchanged from the previous month.
* We had **29,268,928** paid ad views across the world.
  This was a record due to some globally targeted campaigns.

Our inventory continues to be very tight and we are the closest we've ever been to sold out worldwide.
We're doing our best to bring on more high-quality publishers
and we expect to spend more time on that throughout November and December.


## Upcoming features

The major features in our upcoming roadmap for November:

* We are going to run some experiments with ad rotation
  where ads have been visible on the page for a minute or more.
  This is part of improving our support for single-page apps and pages with long view times.
* The reporting features we've discussed for the last few months are proceeding, but very slowly.
  We're aiming to collaborate with a few advertisers who use Tableau (or something similar)
  to make sure we build exactly what they want.
  If you're interested in this, please [get in touch]({filename}../pages/contact.md)!


Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
