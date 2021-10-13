Title: Building an Ethical Marketing Funnel
Date: September 30, 2021
description:
tags: marketing, privacy
authors: Ra Cohen
image: /images/posts/2021-marketing-funnel.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Campaign Creators</a> on <a href="https://unsplash.com/s/photos/funnel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


## The Problem

When growing an online business, it's important to consider where your prospects are coming from and how to convert these prospects into customers. One key insight into this conversion comes from observing how your users interact with your site. Without some understanding of why people click on your page, what they do while they're there, and how this behavior corresponds to paying customers, you're at a serious disadvantage when it comes to optimizing your site to grow your business. Part of this process is building marketing funnel. A marketing funnel is a continuous mission of getting, keeping and growing your customer base while using technology to meet their needs more efficiently. However, many implementations of marketing funnels execute this mission by collecting and hoarding personally identifiable information of individual customers. This is by no means required by the definition nor is it even necessary as marketing funnels have existed long before web browser trackers let alone the internet. 

EthicalAds is a small start-up currently focusing on expanding our userbase which comes in two segments. We have potential advertisers who want to run new ad campaigns on our ad network and we have potential publishers who want to host ads on their websites/platforms in exchange for a lionshare of the generated ad revenue. In order to attract new users, we've created a number of advertiser/publisher focused house ads and advertiser/publisher specific landing pages in addition to our general referral sources of google or the "Ad served Ethically" text which runs beneath every ad. However, we previously had no good way of determining the relative success of these various approaches. In order to prioritize new ads or landing pages or other marketing strategies, we wanted data to guide our decision making to help us meet the needs of our customers as efficiently as possible. In other words, we needed a marketing funnel. Specifically, we wanted our marketing funnel to be privacy-preserving, open-source, and transparent. In a word, Ethical.

To get started we needed two things,  a measurement of a successful conversion and a way to quantify which marketing methods were leading to the most conversions while maintaining our must-haves of everything being open-source and not-personally identifying.


### Defining Success

Since there are a variety of places that a new user can enter our site from such as a tailored landing page from a house ad, a blog post linked from a third party site like HackerNews or Twitter, or our home page from a search engine, defining a "success" is trickier than it first seems. There are some obvious win conditions such as 
* Advertiser prospect fills out the "contact us" form on the Advertiser page which leads to a conversion (new advertiser account and paid invoice)
* Publisher prospect fills out the "contact us" form on the Publisher page which leads to a conversion (new publisher account and approved to host paid ads)
but there are also harder to quantify successes such as 
* Generic user educates themself on Surveilance Advertising in our Learning Hub
* Media-affiliated user fills out the generic "contact us" form
* Potential advertiser or publisher navigates to a page, browses for awhile, and then fills out a "contact us" form

Since this is our first marketing funnel, we decided to focus on only the first two scenarios as "successes" which is fairly simple since all of our contact us forms result in the same "form submitted" page when filled out. There are some drawbacks to this approach such as spammy form submissions being considered successes or even good leads for advertisers/publishers who simply didn't convert all of the way, but opening a line of dialogue between us and the user seems to be the largest hurdle right now. Hence defining a successful channel for communication as a success even if it doesn't necessarily always result in a conversion. Our forms contain only relevant information to an individual's request, and is the only point in our marketing funnel where user-generated PII is collected, specifically their name and email address so that we may reply to their inquiry. This alone however does not inform us as to how a user arrived on our site or how they heard about us. Thus we decided to employ Analytics.


### Open-source Analytics

After surveying a variety of open source analytics solutions, we decided to use Plausible. They have a great article on why one ought to choose [Plausible over Google Analytics](https://plausible.io/vs-google-analytics). With a simple onboarding process, they provide a light weight, open source option to tracking aggregated inbound traffic source statistics as well as successful conversions (which we defined as contact form submissions) per traffic source. Being able to determine which ads or articles were generating not only the most traffic or form submissions, but also was generating the most successes proportionally to the amount of traffic was the vast majority of what we were looking for. Now we can A/B test new ads and landing pages for advertisers or publishers to determine which is better at convincing users to get in touch with us. We can also see which types of content are generating not only good amounts of traffic but also good resonance traffic, that is traffic which is comprised of potential advertisers or publishers. This is great! Mission Accomplished, right? Well, not quite. We still have the overwhelming issue of spam submissions. 


### One Transparent Cookie

One of the things that makes plausible so great is that its reporting aggregates all contact submissions for a given traffic source into one number or 'conversion rate'. Given that on any given day, a large proportion of our contact submissions are spam which do not actually result in opening a new line of communication with a potential advertiser or publisher or ya know a human, we don't want to count these spam submissions as successes. If one channel of user-outreach is generating more spam than others, we want to know which one! Through more ads/landing pages A/B testing, we hope to also increase the quality of submissions not just the quantity. In order to properly attribute spammy form submissions to their sources, we thought long and hard about the most transparent, privacy-preserving method of satisfying our requirements of open source accountability with regards to accurately figuring out what marketing strategies are actually working. We decided to set up a singular, first-party, user-facing cookie displayed in the url to inform us of the referring link to our site which ends up getting forwarded along with the rest of the forms content. The code is available [here](https://github.com/readthedocs/ethicalads.io/blob/main/static-src/marketing.js) and is thus open source. Only users who are filling out the form and thus giving us their name and email are "affected" and we also ask the user themselves how they heard about us in the "contact us" form and in our first email responding to their request. Thus, this cookie isn't providing any new information from legitamate users and only gives us attribution information for when it isn't otherwise provided i.e. spammy/incomplete contacts.

We've had our funnel up and running for a little over a month now and are looking forward to sharing some preliminary results with y'all in a follow-up blog post. If you have any more questions about how we set up our marketing funnel or EthicalAds in general, please [email us](mailto:ads@ethicalads.io). We always love to hear from you!

As always, we are thrilled to have you along with us on our journey to build an ethical ad network.

