Title: Building an Ethical Marketing Funnel
Date: August 31, 2021
description:
tags: marketing, privacy
authors: Ra Cohen
image: /images/posts/2021-marketing-funnel.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Campaign Creators</a> on <a href="https://unsplash.com/s/photos/funnel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


## The Problem

When growing an online business, it's important to consider where your prospects are coming from and how to convert these prospects into customers. One key insight into this conversion comes from observing how your users interact with your site. Without some understanding of why people click on your page, what they do while they're there, and how this behavior corresponds to paying customers, you're at a serious disadvantage when it comes to optimizing your site to grow your business. A marketing funnel is a continuous mission of getting, keeping and growing your customer base while using technology to meet their needs more efficiently. However, many implementations of marketing funnels execute this mission by collecting and hoarding personally identifiable information of individual customers. We wanted our marketing funnel to be privacy-preserving, open-source, and transparent. In a word, Ethical.


## What Is an Ethical Marketing Funnel and Why Would You Want One?

This post is assuming you are aware of what a marketnig funnel is and why you want one in the first place. If not, check out _____'s article on the topic of what is a marketing funnel and the various layers therein. To get started we needed two things,  a measurement of a successful conversion and a way to quantify which marketing methods were leading to the most conversions while maintaining our must-haves of everything being open-source and not-personally identifying.


### Defining Success

A conversion for us is a simple foot in the door for our customer success team.
Our conversions and thus the definition of a successful marketing strategy are when a user fills out one of our Contact Us forms. This establishes a relationship that did not previously exist and allows us to grow our user base. Our forms contain only relevant information to an individual's request, and is the only point where user-generated PII is collected, specifically their email address so that we may reply to their inquiry. This alone however does not inform us as to how a user arrived on our site or heard about us. Thus we decided to employ Analytics.


### Open-source Analytics

After surveying a variety of open source analytics solutions, we decided to use Plausible. They have a great article on why one ought to choose [Plausible over Google Analytics](https://plausible.io/vs-google-analytics). With a simple onboarding process, they provide a light weight, open source option to tracking successful conversions as we defined as form submissions. But we were still missing a singular piece, a method for associating an inbound form with the marketing strategy that hooked them in.


### One Transparent Cookie

In order to properly give credit where credit is due, we thought long and hard about the most transparent, privacy-preserving method of satisfying our requirements of open source accountability with regards to accurately figuring out what marketing strategies are actually working. We decided to set up a singular, first-party, user-facing cookie displayed in the url to inform us of the referring link to our site. The code is available [here](https://github.com/readthedocs/ethicalads.io/blob/main/static-src/marketing.js) and is thus open source.


As always, we are thrilled to have you along with us on our journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
