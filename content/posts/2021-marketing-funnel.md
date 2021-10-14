Title: Building an Ethical Marketing Funnel
Date: September 30, 2021
description:
tags: marketing, privacy
authors: Ra Cohen
image: /images/posts/2021-marketing-funnel.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Campaign Creators</a> on <a href="https://unsplash.com/s/photos/funnel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


## The Problem

When growing an online business, it's important to consider 
where your prospects are coming from and how to convert these prospects into customers. 
One key insight into this conversion comes from observing how your users interact with your site. 
Without some understanding of why people click on your page, what they do while they're there, 
and how this behavior corresponds to paying customers, 
you're at a serious disadvantage when it comes to optimizing your site to grow your business. 
Part of this process is building marketing funnel. 

A marketing funnel is a continuous mission of getting, keeping, and growing your customer base 
while using technology to meet their needs more efficiently. 
However, many implementations of marketing funnels execute this mission 
by collecting and hoarding personally identifiable information of individual customers. 
This is by no means required by the definition nor is it even necessary 
as marketing funnels have existed long before web browser trackers let alone the internet. 

EthicalAds is a small start-up currently focusing on expanding our userbase which comes in two segments. 
We have potential advertisers who want to run new ad campaigns on our ad network and 
we have potential publishers who want to host ads on their websites/platforms 
in exchange for a lionshare of the generated ad revenue. 

In order to attract new users, we've created a number of advertiser/publisher focused ads 
and advertiser/publisher specific landing pages augmenting our general referral sources 
like search engines or the "Ad served Ethically" text which runs beneath every ad. 
However, we previously had no good way of determining the relative success of these various approaches. 
In order to prioritize our time on new ads, landing pages, or other marketing strategies, 
we wanted data to guide our decision making to help us meet the needs of our customers efficiently. 
In other words, we needed a marketing funnel. 
Specifically, we wanted our marketing funnel to be privacy-preserving, open-source, and transparent. 
In a word, Ethical.

To get started we needed two things,  a measurement of a successful conversion and 
a way to quantify which marketing methods were leading to the most conversions 
while maintaining our must-haves of everything being open-source and not-personally identifying.


### Defining Success

Since there are a variety of onboarding locations that draw new users to our site 
such as a tailored landing page from an ad, 
a blog post linked from a third party site like HackerNews or Twitter, 
or our home page from a search engine, 
defining a "success" is trickier than it first seems. 
There are some obvious win conditions such as:

* Advertiser prospect fills out the "contact us" form on the Advertiser page 
  which leads to a conversion (new advertiser account and paid invoice)
* Publisher prospect fills out the "contact us" form on the Publisher page 
  which leads to a conversion (new publisher account and approved to host paid ads)

but there are also harder to quantify successes such as:

* Generic user educates themself on Surveilance Advertising in our Learning Hub
* Media-affiliated user fills out the generic "contact us" form
* Potential advertiser or publisher navigates to a page, browses for awhile, 
  and then fills out a "contact us" form

Since this is our first marketing funnel, 
we decided to focus on only the first two scenarios as "successes" 
which is fairly simple since all of our contact us forms 
result in the same "form submitted" page when filled out. 
There are some drawbacks to this approach 
such as spammy form submissions being considered successes or even 
good leads for advertisers/publishers who simply didn't convert all of the way, 
but opening a line of dialogue between us and the user seems to be the largest hurdle right now. 

Thus we defined opening a successful channel of communication as a success 
even if it doesn't necessarily always result in a conversion. 
Our forms contain only relevant information to an individual's request, 
and is the only point in our marketing funnel where user PII is collected, 
specifically their name and email address so that we may reply to their inquiry. 
This alone however does not inform us as to how a user arrived on our site or how they heard about us. 
For that we needed analytics.


### Open-source Analytics

After surveying a variety of open source analytics solutions, we decided to use Plausible. 
They have a great article on why one ought to choose [Plausible over Google Analytics](https://plausible.io/vs-google-analytics). 
With a simple onboarding process, they provide a light weight, open source option to monitoring inbound traffic source statistics 
in a privacy-preserving, aggregated format as well as tools for measuring successful conversions 
(which we defined as contact form submissions) per traffic source. 
Being able to determine which ads or articles were generating not only the most traffic or form submissions, 
but also are generating the most successes proportionally to the amount of traffic 
enables us to determine where we should spend our time marketing for the most value. 

Now we can A/B test new ads and landing pages for advertisers and publishers 
to determine which images, formats, and copy convince users to get in touch with us. 
We can also see which types of content are generating not only large quantities of traffic, 
but also good resonance traffic comprised of potential advertisers or publishers. 



We've had our funnel up and running for a little over two months now 
and are looking forward to sharing some preliminary results with y'all in a follow-up blog post. 
If you have any more questions about how we set up our marketing funnel or EthicalAds in general, 
please [email us](mailto:ads@ethicalads.io). We always love to hear from you!

As always, we are thrilled to have you along with us on our journey to build an ethical ad network.

