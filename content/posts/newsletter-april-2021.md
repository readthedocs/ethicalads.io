Title: EthicalAds Newsletter - April 2021
Date: May 11, 2021
description: Our April 2021 ads update, including stats and commentary, on our progress as we build EthicalAds
tags: newsletter, community
authors: David Fischer
image: /images/posts/2021-apr-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@gaspanik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Masaaki Komori</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


[comment]: # (The queries run to get this data, then computed in a spreadsheet for publisher rev)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=50.0)
[comment]: # (?start_date=2020-09-01&end_date=2020-09-30&campaign_type=paid&revenue_share_percentage=70.0&sort=revenue)


## New features

Here's the major features we added in the last month:

* On our ad client, we made some improvements to our contextual targeting.
  We now parse pages where ads will appear to discover their main topics in order to better target them
  with the right kind of ad. As always, we focus on content and contextual targeting,
  not targeting ads based on learning about users or about past actions users have taken.
  While we've only taken the first steps here, the end result is greatly improved targeting
  and the ability to target more niches with high quality ads which is one of the keys to good ad performance.
* In our ad server, we made a number of small improvements for our advertisers to improve their workflows
  and better allow them to make decisions to improve ad performance.
  This included better ways to compare past performance to current performance and the ability to easily re-use
  past high-performing ads.
* We also took the first steps toward prioritizing higher performing and higher priced ads.
  We believe this is the right step to ensure that publishers are getting the most they can from their ad spots,
  while giving advertisers incentives to produce high quality ads.
  While we expect this will drive a slight increase in publisher revenue, so far the impact has been very small.
  We are continuing to make improvements to ad prioritization in May and beyond.

You can always see our latest server updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html).


## April advertising stats

April was an interesting month for advertising
as we had rolled out some of our contextual targeting changes and had some new ad buys start.

In April 2021:

* We generated **$23,831.85** for our publishers.
  Of this, $12,154.71 was to third-party publishers, with the rest to Read the Docs.
  While not a surprise, this was an all-time record for our third-party publishers!
* We had **101 publishers** on our network with a paid ad impression.
* We had **17,507,857** paid ad views across the world.
  The biggest reason for a large increase in ad views was that we received a couple ad buys
  with nearly global targeting.
  While these don't always bring in lots of revenue as global targeting isn't very expensive,
  they can have a big impact on the total number of ads.

So far, May is looking to continue the gains that we made in April
but if we are able to close a few ad buys we have in the pipeline,
that could put our revenue over the top.


## New hire

On the hiring front, we were able to find a talented person to help with advertiser and publisher account management.
Ra Cohen brings a background in machine learning and a passion for connecting with people
to our small corner of the ads industry.
Expect a full introduction in the next couple weeks.
We are lucky to have them.


## Tricky bits

With the hiring complete, onboarding will probably be the trickiest part in the immediate future.
Bringing on a new person is always hard when it's done well and we expect this won't be any different.
This will involve making a lot of processes we have more regular but in the long term
we expect this will lead to better outcomes and faster response times for our publishers and advertisers.


## Upcoming features

The major features in our upcoming roadmap:

* With the improvements we've been able to make on ad prioritization,
  we will be rolling out the ability to have "flex advertisers".
  This will give advertisers who opt-in to this program lower prices but without guaranteed inventory.
  This helps us ensure that as many ad slots have paid ads for our publishers while letting us balance our inventory.
  In the *much longer* term, we see this as a first-step toward a form of bidding for ads
  that will be familiar to advertisers used to the big ad networks.
* We are building improvements into both our ad client and ad server to improve our contextual targeting.
  We believe that good contextual targeting is one of the keys to our network's success.
  This lets advertisers reach the audience they want as well as possible without creepy targeting
  and without requiring publishers to do the work of categorizing all their content.
  By automatically categorizing content, we'll have more inventory for more niches that advertisers want to target.
  For publishers, this is also a win because better targeted ads cost more and bring in more revenue.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
