Title: EthicalAds Newsletter - January 2021
Date: Feb 8, 2021
description: Our January update, including stats and commentary, on our progress as we build EthicalAds
tags: newsletter, community
authors: David Fischer
image: /images/posts/2021-jan-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@szmigieldesign?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Lukasz Szmigiel</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


[comment]: # (The queries run to get this data, then computed in a spreadsheet for publisher rev)
[comment]: # (?start_date=2020-08-01&end_date=2020-08-31&campaign_type=All+types&revenue_share_percentage=50.0)
[comment]: # (?start_date=2020-09-01&end_date=2020-09-30&campaign_type=paid&revenue_share_percentage=70.0&sort=revenue)


## January advertising stats

In January, we returned to growth as expected from a slow holiday season.
While the year always starts a little slow, January started with a lot of advertiser interest and publishers
interested in making money with ads.

In January 2021:

* We generated **$10,566.78** for our publishers, a 12% increase from December and 5% increase from November, our previous peak.
* We had **103 publishers** on our network with a paid ad impression.
* We had **6,095,608** paid ad views across the world.
* Read the Docs, our own publisher, generated **$16,381.53** on 6,929,551 paid ad impressions. Of our reported metrics, this was the only one down slightly and it was due to a few large advertisers balancing their spend between Read the Docs and our larger ad network.

For February, we are expecting another record breaking month in terms of daily traffic, daily revenue, and ads served.
It may not be as high as January in total (it'll be very close) but that's simply due to the number of days in the month.


## New features

Here's the major features we added in the last month:

* On our ad client, we built a feature that allows ads to be displayed in light-mode or dark-mode
  based on the user's preferences if the publisher displaying the ad also supports this.
* On our ad server, we added a number of quality of life improvements,
  including automating some advertiser setup and fixing some minor data consistency bugs.
* In our infrastructure, we started archiving old, raw data on ad impressions
  (remember, we [do not track user personal data]({filename}/pages/vision.md))
  to keep our transactional database small and fast.
* On our website, we put up a job opening which we'll talk about in the next section.
  We also launched some more advertiser and publisher testimonials.

You can always see our latest updates in our [ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html).


## Growing our team

We posted a new part-time [job opening]({filename}/pages/jobs/account-manager-part-time.md)
and we're hoping to bring somebody on to help manage advertiser and publisher relationships.
The job is going to be heavy on customer service but has some
light sales and marketing involved too.
This person will have a lot of impact on how EthicalAds continues to grow.

This person will work directly with me (David) and with Eric
to make sure our publishers are getting as much money as they can
while our advertisers are getting the best results we can deliver.
We pride ourselves on the high level of service we provide,
and working closely with both publishers and advertisers helps to get great results.

If this role sounds interesting to you,
please [get in touch with any questions](mailto:ads@ethicalads.io?subject=Ads%20account%20manager%20role)
or [apply]({filename}/pages/jobs/account-manager-part-time.md)!

Also, Read the Docs is hiring a [frontend developer](https://blog.readthedocs.com/job-frontend/)
and a [developer advocate with documentation skills](https://blog.readthedocs.com/job-devrel/).


## Tricky bits

As we mentioned in December, hiring and onboarding new team members are hard work and require a lot of time to do well.
Now that we've started getting applications, we expect that this will take some time
but the end result will hopefully be faster responses to our advertisers and publishers.

Hiring new people really can't come soon enough.
Between the the time spent on hiring (which is very important to get right),
time spent on working on [Read the Docs' CZI grant](https://blog.readthedocs.com/czi-grant-announcement/),
and some upcoming infrastructure changes at Read the Docs,
we're all feeling spread a bit thin.


## Upcoming features

The major features in our upcoming roadmap:

* We want to give both advertisers and publishers high level data right in their dashboard when they first login.
  These are stats like exactly how much advertising money they've spent or earned this month
  and how this month compares with last month.
* We're hoping to expand our advertising logic to take into account price when selecting ads.
  One advantage of this would allow us to have lower priority advertisers who buy ads at a lower rate
  but don't receive guarantees of inventory. This is helpful to make sure publishers are always showing paid ads
  while letting us balance our inventory.
  In January, we did start pitching this advertisers but haven't sold it or completed building it yet.
* We started exploring what we're calling "sponsorships" by which we mean customized ad placements on single high-value publishers.
  This is different from our traditional ad offering which shows ads across our network
  and instead focuses on buying most or all inventory for a single publisher.

Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
