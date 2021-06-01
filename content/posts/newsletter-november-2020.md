Title: EthicalAds Newsletter - November 2020
Date: Dec 3, 2020
description: Our November update, including stats and commentary, on our progress as we build EthicalAds.
tags: newsletter, community
authors: Eric Holscher
image: /images/posts/2020-nov-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@szmigieldesign?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lukasz Szmigiel</a> on <a href="https://unsplash.com/s/photos/november?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


[comment]: # (The queries run to get this data, then computed in a spreadsheet for publisher rev)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=50.0)
[comment]: # (?start_date=2020-09-01&end_date=2020-09-30&campaign_type=paid&revenue_share_percentage=70.0&sort=revenue)


## November advertising stats

November was a record-breaking month here at EthicalAds.
Even though we had a major US holiday and only 30 days,
we were able to increase publisher revenue by over 30% this month.

The major driver of increased revenue was being added to the Acceptable Ads list in mid-November.
We estimate this will increase publisher revenue by 10-15%,
which explains a lot of the increase in publisher revenue.
The other major driver of revenue is adding additional publishers to the network,
which we continue to do.

In November 2020:

* We generated **$10,059.39** for our publishers, breaking $10,000 for the first time!
* We had **79 publishers** on our network with a paid ad impression.
* We had **5,484,006** paid ad views across the world.

We are excited that all of our core metrics increased this month.
We hope they will continue to increase in December,
but December is historically a low traffic month because there are more global holidays,
so we'll have to wait to find out!

## New features

The big things we added this month:

* We were approved for the Acceptable Ads program, which required changes to both our server and client to track traffic we can attribute to the program.
* We added reporting for Advertisers to see what Countries and Publishers their ads are showing on the most.
* We added keyword reporting for Publishers. This allows them to see the performance of the various keywords they are sending on incoming traffic.
* We improved our payout workflow, which is part of the work required to lower our payout limit of $50.
* We added backend support for Fill Rate tracking. This allows us to understand more about how ads are being filled across keywords, geos, and publishers.

You can always see our latest updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html).

## Tricky bits

This month has felt like the ad network has really hit its stride.
The inclusion of EthicalAds on the Acceptable Ads program is a major benefit,
and has removed our longest-running difficulty.

As part of launching the ad network,
we have had 2 members of the team (Eric & David) fully focused on advertising.
As we look to grow the network,
we are hoping to expand our team by at least one person in the near future.
We have started thinking about a job description for the person we hope to bring on.
Hiring is always a challenge,
but we're excited about having growth to be able to think about supporting an additional team member.
The role we're imagining is an part-time account executive,
but someone who is interested in growing into a larger full-time business role over time.

As part of this transition,
our team member Eric will be scaling back his involvement on advertising from close to 100% of time to 50%.
This will allow us to bring on an additional team member without hurting our budget too much,
until we can fully support having a team of 3 people.

We have also almost fully completed the separation of Read the Docs and EthicalAds.
In January 2021,
we are planning to fully separate the businesses in terms of our accounting and budget.
This will be the end result of the transition of Read the Docs to being a normal Publisher on EthicalAds.
It will likely take us a few months to fully work through this transition,
but it will allow us to grow advertising more quickly as we see growth in the ad network.

## Upcoming features

The major features in our upcoming roadmap:


* We're still hoping to adapt our ad format to [break out a headline and a call to action](https://github.com/readthedocs/ethical-ad-server/issues/152). This will standardize our ad display, along with making sure that all our advertisers have ads that work across multiple formats.
* We want to give advertisers a way to change the flight targeting of their advertisements. Changing targeting generally changes the pricing, so this will require the dashboard knowing more about pricing for different targeting options.
* We're hoping to expand our advertising logic to take into account price when selecting ads. This will allow us to assure maximum revenue for a publisher, but we don't want to always show a single ad on that site, either.
* We hope to do a beta test of a sponsorship program with a publisher, which is an extension of the ad network to allow for specific placements on high-value publishers.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
