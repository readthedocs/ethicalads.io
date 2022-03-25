Title: Publisher Policy
description: The publisher policy for the EthicalAds server and network
status: hidden

Effective date: **August 19, 2020**
Last updated: [March 22, 2022](https://github.com/readthedocs/ethicalads.io/commits/main/content/pages/publisher-policy.md)

The goal of this page is to set expectations between EthicalAds and our publishers about what is expected for each of us.
Our goal is for these to be easily understandable and fair,
but we're always happy to have feedback on these terms.

All publishers agree that their ad display meets these terms prior to enabling paid ads on their site.
We will do an initial review of the ad display,
but we expect publishers to stay within these guidelines at all times.

**Contents**

[TOC]

## Ad display

We have the following rules around display of our ads:

* Our ad should be the only ad network visible when loaded. We currently only allow a single EthicalAds ad per page, but are discussing how to support multiple. Promotion of your own content or services on your site is fine, you just can't run be using other ad networks at the same time. It's also find to show our ad and other ad networks on alternating requests, just not on the same page load.
* The ad should appear when the user first visits, above the fold, on both desktop and mobile. You can disable the ad on mobile if this isn't possible.
* The ad should not disrupt the natural reading flow of the page. It should be placed above, beside or below the main content, not within it. This is an [Acceptable Ads](https://acceptableads.com/standard/) requirement, and something we think is best for users as well.
* The ad placement should result in at least a .1% CTR (click-through rate). This will be reported in your publisher dashboard.

You are welcome to [display a different ad](https://ethical-ad-client.readthedocs.io/en/latest/#customization) as a fallback if EthicalAds doesn't have a paid ad to show.
You are also welcome to show EthicalAds to a share of your visitors (eg. 50%) along with another ad network, as long as they aren't shown on the same page.

## Payouts

We currently have a **70% revenue share** with publishers
which is around industry standard but slightly higher.
This means you get 70% of the money that we make.

We handle payouts once a month,
with a minimum payment of **$50**.
Our goal is to get payment to our publishers by the 15th of the month,
with the payment being the balance at the end of the prior month.

We currently support payouts via the following methods:

* Stripe Connect (Bank transfer)
* Paypal
* OpenCollective

## Ad display validation

We reserve the right to validate that the traffic on your site looks authentic.
Prior to issuing payouts,
we will review all traffic for each publisher,
and alert the publisher if we find any traffic that looks inauthentic.

We already invalidate different types of traffic automatically,
which won't be counted as a paid ad view:

* Known bot user-agents
* Users with IP addresses we can't geolocate
* Users with IP address that map to known hosting providers, VPN's, and web proxies
* Multiple views of an ad within 5 seconds from the same browser

We are regularly tweaking our ad fraud detection in response to new challenges,
and we're happy to work with publishers to make sure our ads work for them.

## Violations

We reserve the right to adjustment payouts contingent on following our publisher policy.
If traffic is found to be fraudulent, invalid, or otherwise against our policy,
we will attempt to detect this prior to paying out to our publishers.
Payouts may be delayed in cases where we detect suspicious activity,
because once a payout has been issued it will be very difficult to revoke.

**Publishers who are found in violation of our publisher policy can have their paid ads disabled.**
We try to provide at least 7 days notice before disabling paid advertising,
but this may not be possible in all cases.
