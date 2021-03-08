title: Our Advertising Vision
slug: advertising-vision
description: Advertising doesn't have to involve tracking users to be successful. At EthicalAds, we see a different future for advertising that respects user privacy.
subtitle: Ads that don't track you, sold by a company you can trust.

We realize that our name, EthicalAds, sets a high bar for what people expect.
We do our best to live up those expectations in all aspects of our business.
Whether you are a prospective advertiser or publisher,
or you just care about privacy and you want to learn more,
we want to define *ethical advertising* for you here.


## What is ethical advertising

A succinct definition:

Ethical Advertising
: Showing ads based on page content without tracking users.

The primary tenets of ethical advertising are:

* **Ethical ads don't track you**. This means no permanent advertising cookies and no indefinite storage of personal information.
* **Ethical ads are targeted by page content**. We can still show relevant and valuable ads knowing only the content you're reading, not who you are as a person.
* **Ethical ad networks don't keep your data**. Companies doing ethical advertising should make money showing ads, not selling user data.

Some companies would like you to believe that it's impossible to do advertising
without user tracking, but that simply isn't true.
To paraphrase [Doc Searls](http://blogs.harvard.edu/doc/the-adblock-war/),
who has been raising the alarm about invasive advertising for years,
traditional advertising without tracking built every brand you can name.

> "Advertising [without tracking] ... created nearly every worldwide brand you can name"
>
> &mdash; Doc Searls, editor-in-chief of Linux Journal


## Why we created EthicalAds

We started ethical advertising
as a way to fund sustainable open source development on Read the Docs.
At Read the Docs, we listened to our users.
They told us they didn't have a problem with advertising
but they wanted their privacy respected: no tracking users around the internet and no advertising cookies.
At that time, there wasn't an ad network out there willing to work with us on those terms (we looked).

So we bootstrapped our own advertising platform.
We built our own ad server and did our own ad sales.
It wasn't easy,
but as we talked about in our [2018 blog post](https://blog.readthedocs.com/ethical-advertising-works/): **ethical advertising works**.
We're thrilled to be able to bring our vision of advertising to open source developers everywhere.

We targeted developers first because as developers ourselves,
we understand the [massive downsides](http://idlewords.com/talks/what_happens_next_will_amaze_you.htm) of the current advertising industry.
This includes malware,
slow site performance,
and huge databases of your personal data being sold to the highest bidder.
We didn't want to be a part of that
and from talking to our users at Read the Docs,
there seemed to be lots of other folks out there who didn't either.


## How our ads work

Our ads work a bit differently than most other ad networks out there.
Most ad networks have databases of user data
that they use to predict the types of ads somebody is likely to click.
This data includes sites a user has visited,
a user's search history, personal data about users such as their likes and dislikes,
and ads a person has interacted with in the past.

At EthicalAds, **we don't use these techniques**.
Instead, we target based solely upon:

* Details of the page where the advertisement is shown including:
    - The name and keywords associated with the publisher's content
    - Content of the page (eg. H1, title, etc.)
    - Whether the page is being viewed on a mobile device

* General geography
    - We allow advertisers to target ads to a list of countries or to exclude
      countries from their advertising.
      For ads targeting the USA, we support finer geo targeting but nothing smaller than a 50 mile radius.
    - We geolocate a user's IP address when a request is made and we don't store
      precise locations or precise IPs for longer than a few days to detect fraud and keep our site secure.


## Why our ads work

In addition to how they work, it's also important to talk about *why* our ads work.
Tracking users is one way to keep ads relevant and make sure they work for advertisers,
but it isn't the only way. Instead we:

* Focus on developers. Don't try to build another generic ad network for everyone.
* Partner only with high-quality publishers who also focus on developers.

By focusing,
we are able to ensure our ads stay relevant even without tracking and work well for our advertisers.
We also vet every publisher individually to make sure they're a fit for our network
and ensure that they bring the kind of audience our advertisers want to reach.


## Your data

At EthicalAds, we take your privacy seriously.
We've made a number of legally-binding pledges about how we handle data starting with our [privacy policy]({filename}/pages/privacy-policy.md).
We don't want you to just take our word for it, however,
so we invite you to take a look at our [code](https://github.com/readthedocs/ethical-ad-server/) as well.

EthicalAds supports Do Not Track (DNT).
To comply with DNT, we pledge to delete user personal information such as IP addresses in server logs after no more than 10 days.
We do this regardless of whether you set the DNT flag in your browser or not.
For more details, see the [Do Not Track section]({filename}/pages/privacy-policy.md#our-use-of-cookies-and-tracking)
of our privacy policy.

We do not share, sell, rent, or trade personal information with third parties for their commercial purposes.


## Join us

Ethical advertising is our vision for the future of internet advertising,
and we hope that you'll join us.
We believe the open source community should show the way forward,
since we have a deep understanding of how privacy issues impact the internet.
We have space for additional publishers and advertisers,
and look forward to building something meaningful with you:

* Become a [publisher]({filename}/pages/publishers.md) today
* Become an [advertiser]({filename}/pages/advertisers.md) today
* Follow our journey in our [newsletter](https://ethicalads.us3.list-manage.com/subscribe/post?u=a6a22369cc2b356379cf789ca&id=79ffb01d18)
