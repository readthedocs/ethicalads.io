title: Publisher's Guide to Improving Ad Revenue
slug: publisher-guide
description: A guide to help publishers get the most out of our network in terms of optimizing their ad placement and contextual targeting.
subtitle: Maximize your site's ad revenue while complementing your user experience.

Our [EthicalAds client](https://ethical-ad-client.readthedocs.io/en/latest/) gets you started with how to host ads.
To ensure your site generates as much revenue from your ads as possible, 
you need to make sure your ad placement, targeting, and user experience compliment your content.

**Contents**

[TOC]

## Ensuring a good ad placement

Without tracking users, the best way to make sure ads perform well is to have a good ad placement.
A good ad placement means the ad is clearly visible and separate from the content of the page.
How long the ad is visible on the page is also a factor.
If the UX of your site means that users quickly scroll past ads, the ads on your site won't perform well.

### The basics

**Having the ad visible by default on page load ("above the fold") is the most effective way to have a [high view rate](https://www.ethicalads.io/publishers/faq/#what-data-can-i-see-about-the-ads).**
Ads that are more visible get viewed more frequently and clicked at a higher rate.

As our [publisher policy]({filename}../publisher-policy.md) lays out:

- The ad should appear when the user first visits, above the fold, on both desktop and mobile.
  You can disable the ad on mobile if this isn't possible.
- The ad should not disrupt the natural reading flow of the page.
  It should be placed above, beside or below the main content, not within it.

### Tailored display types

On the EthicalAds network, there are two main types of ads:

1. Ads with images (`image`)
1. Ads without images (`text`)

Which type of ad to place depends a lot on the available real estate of your page.
A banner across the bottom of the page works well on static pages like [jsbin.com](https://jsbin.com/?html,output)
otherwise we've found image ads in the sidebar which are static when scrolling to be really successful.
The majority of our ads do have images so if in doubt, go with the image ad spot.

### Light vs dark themes

If your website uses a dark theme, consider adding `{html} class = "dark"` as seen [here](https://ethical-ad-client.readthedocs.io/en/latest/#dark-mode).
This improves performance by helping the text of the ad standout while the rest of the ad blends in.

**If your website's theme has adaptive dark mode & light mode, consider adding `{html} class = "adaptive"` as it handles both light and dark themes automatically.**

### Content tagging

For better content targeting, letting us know about the content of your pages with
[page-specific keywords](https://ethical-ad-client.readthedocs.io/en/latest/#page-specific-keywords),
This allws us to better target the ads for your audience.
For example, we can target an ad for a DevOps related service to DevOps related content.
Ads targeted specifically to your content can also result in higher payouts
as we charge higher rates for highly targeted ads.

You can find a [list of the major keywords we target](https://github.com/readthedocs/ethical-ad-server/blob/main/adserver/regiontopics.py) in our source code.

### Bringing it all together

Complementary placement, pleasing aesthetics, and accurate content tagging will
boost your earnings with EthicalAds by helping us provide your users
with high quality, relevant advertisements.
And if you haven't already, [become a publisher today](/publishers/#inbound-form)!

## More questions?

Check out our full [Publisher FAQ](../publishers/faq/),
which answers a lot more of your questions.
