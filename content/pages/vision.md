title: Vision
description: We see a different future for advertising. One that harkens from the past.
template: ea/vision
h2: Ads that don't track you, sold by a company you can trust

We realize that our name sets a high bar for what people expect,
and we do our best to live up that.
We want to define _ethical advertising_ here,
so that you know we're talking about.

## Vision

Ethical ads respect users while still providing value to advertisers.
The most important parts:

* We don’t track you or sell your data
* We only make money showing ads, so our interests are fully aligned
* We target ads based on the content of the current page, not your past browsing history
* We are as transparent in our business as possible, even our code is [open source](https://github.com/readthedocs/ethical-ad-server/)

As we talked about in our [2018 blog post](https://blog.readthedocs.com/ethical-advertising-works/): **ethical advertising works**.
We're thrilled to be able to bring our vision of advertising to open source developers everywhere.
As developers,
we understand the [massive downsides](http://idlewords.com/talks/what_happens_next_will_amaze_you.htm) of the current advertising industry.
This includes malware,
slow site performance,
and huge databases of your personal data being sold to the highest bidder.

## Other ad networks' targeting

Some ad networks build a database of user data in order to predict the types
of ads that are likely to be clicked.
In the advertising industry, this is called *behavioral targeting*.
This can include data such as:

* sites a user has visited
* a user's search history
* ads, pages, or stories a user has clicked on in the past
* demographic information such as age, gender, or income level

Typically, getting a user's page visit history is accomplished by the use of trackers
(sometimes called beacons or pixels).
For example, if a site uses a tracker from an ad network and a user visits that site,
the site can now target future advertising to that user -- a known past visitor --
with that network. This is called *retargeting*.

Other ad predictions are made by grouping similar users
together based on user data using machine learning.
Frequently this involves an advertiser uploading personal data on users
(often past customers of the advertiser)
to an ad network and telling the network to target similar users.
The idea is that two users with similar demographic information
and similar interests would like the same products.
In ad tech, this is known as *lookalike audiences* or *similar audiences*.

Understandably, many people have concerns about these targeting techniques.
The modern advertising industry has built enormous value by centralizing
massive amounts of data on as many people as possible.


## Our targeting details

**Read the Docs doesn't use the above techniques**.
Instead, we target based solely upon:

* Details of the page where the advertisement is shown including:

  * The name, keywords, or programming language associated with the project being viewed
  * Content of the page (eg. H1, title, theme, etc.)
  * Whether the page is being viewed from a mobile device

* General geography

  * We allow advertisers to target ads to a list of countries or to exclude
    countries from their advertising. For ads targeting the USA, we also support
    targeting by state or by metro area (DMA specifically).
  * We geolocate a user's IP address to a country when a request is made.

Read the Docs uses GeoLite2 data created by `MaxMind <http://maxmind.com>`_.


## Do Not Track Policy

EthicalAds supports Do Not Track (DNT) and respects users' tracking preferences.
For more details, see the [Do Not Track section](/privacy-policy/#our-use-of-cookies-and-tracking)
of our privacy policy.


## Join us

Ethical advertising is our vision for the future of internet advertising,
and we hope that you'll join us.
We believe the open source community should show the way forward,
since we have a deep understanding of how privacy issues impact the internet.
We have space for additional publishers and advertisers,
and look forward to building something meaningful with you:

* Become a [publisher](/publishers/) today
* Become an [advertiser](/advertisers/) today
* Follow our journey in our [newsletter](https://ethicalads.us3.list-manage.com/subscribe/post?u=a6a22369cc2b356379cf789ca&id=79ffb01d18)
