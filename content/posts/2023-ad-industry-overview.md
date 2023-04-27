Title: How the Internet ads industry works: Players, Tactics & PII (Part I)
Date: May 2, 2023
description: The advertising industry is complex for the uninitiated and we detail the industry today, its players and methods, and how we're trying to change it.
tags: adtech, business
authors: David Fischer
image: /images/posts/2023-ad-industry-overview.png


At the most basic level, advertising is a two-sided marketplace with publishers supplying ad impressions and advertisers buying them.
However, as Internet advertising has become more complicated, the landscape has grown
and there's some other parts of the AdTech ecosystem worth highlighting.


## Supply side

### Ad networks
An ad network like EthicalAds connects advertisers who want to advertise with publishers
that want to show those ads.
The largest such ad network is [Google AdSense]({filename}../pages/vs-google.md) that covers every possible topic and geography.
Facebook has their own much smaller one called Facebook Audience Network,
but there are many smaller networks that focus on niches like ours (developers who care about privacy).
[CarbonAds]({filename}../pages/vs-carbon-ads.md) is probably the closest ad network to us.


### Publishers
Publishers are websties, apps, podcasts, or newsletters that show ads.
These range in size from small sites with very little traffic,
up to some of the biggest ad-funded websites on the Internet.

Many very large publishers sell their ad inventory directly or even have their own ad server.
This makes most sense for perhaps the top 100 largest websites and apps on the Internet
such as Facebook, Amazon, Snapchat, StackOverflow or Reddit. These publishers are large enough to have their own ad formats, servers, and sales teams.

Because some of these large publishers have multiple sites
(eg. Amazon sells Twitch ads as well as sponsored products on Amazon itself, Facebook sells Instagram ads),
many very large publishers start to look like ad networks except they are the parent company for their publishers.
Their ads may still be sold by programmatic bidding in a similar way to an exchange or network,
except it is sold directly (called "Programmatic Direct Advertising").


## Demand side

### Advertisers
Advertisers are companies trying to reach consumers to inform them about their products and services
with the ultimate goal of driving more usage and sales.
Advertisers go where their customers or potential customers are
and that usually involves multiple networks and publishers.

Advertisers have different goals but ultimately they are always concerned with
how much exposure and how many new customers they are getting for their brand and products
compared to how much they are spending while also keeping their brand safe.
They might buy campaigns priced in a variety of different ways from per impression, per click, per lead/acquisition, or even a duration-based ad buy like an offline billboard or a monthly sponsorship.


### Ad agencies
Many advertisers use an ad agency to buy and place their ads for them on the right networks and publishers.
At EthicalAds, we deal with a number of ad agencies directly and have had good relationships with them.
Frequently, these agencies specialize in a particular segment of the market like developer advertising.

While agencies usually have access to data like a company's analytics system,
they may not have access to all the same data as the advertiser themselves such as direct conversions
or conversions that happen after talking to a sales rep.


## Ad exchanges
Ad exchanges look very similar to ad networks but they are a marketplace that connects multiple advertisers,
the demand side, with multiple ad networks or large publishers, the supply side.
The key difference between a network and an exchange is that the exchange is merely facilitating the sale
like a stock exchange while a network is responsible for their own publishers.
Google operates one of the largest ad exchanges called AdX.

Ad exchanges create markets for buying and selling of ad space.
In order for ad exchanges to run true auctions and have both bidding prices and asking prices,
they have to treat a lot of traffic as fungible commodities of user metadata such as location information or past actions.
Is an ad placement on the New York Times is the same as an ad on a personal blog if it reaches the right demographic ([we don't think so]({filename}../posts/2021-invasive-ad-targeting-bad-journalism-premium-publishers.md))?

Sales through ad exchanges are frequently handled by "real-time bidding" (RTB) and programmatic advertising,
systems where advertisers place bids against user metadata
(geographic, demographics, past actions, and other behavioral attributes)
and these bids are matched against publisher traffic.

These approaches usually involve building up databases of personal information on users
in order to better target them with ads.
Like many people in the ad ecosystem, these vast troves of data on millions of users scare us.
They will be covered in more detail in part two of this post.
