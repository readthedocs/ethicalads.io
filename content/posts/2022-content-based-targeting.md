Title: A new era of content-based targeting for advertising
Date: April 26, 2022
description: Content-based targeting allows us to provide great ad targeting without the privacy downsides of user-based tracking
tags: content-targeting, advertisers
authors: Eric Holscher 
image: /images/posts/2022-bullseye.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@silvanarnet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Silvan Arnet</a> on <a href="https://unsplash.com/s/photos/bullseye?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


The advertising industry was born with the idea of content-based targeting.
You had a message you wanted to send,
and you picked the audience based on where you could reach them.
Your ad space was to stand in a food market,
a specific newspaper section,
or which city block for a poster.

Recently the industry has gained the technology to track and target users,
which [made it irrelevant where an ad was shown](https://www.ethicalads.io/blog/2021/05/how-invasive-ad-targeting-is-bad-for-journalism-and-other-high-quality-publishers/).
Unfortunately this also lead to massive troves of data being collected about all users,
which has many unintended consequences.

## TODO: Remove first 2 paragraphs?

In the past few years,
advancements in machine learning have made a new era of content-based ad targeting possible.
Computers are now stunningly good at learning how to categorize documents,
which allows us to automate and scale content-based targeting to our entire network.

This post will cover how our content-based targeting works at a high level,
and the implications for the future growth of our business.
We launched EthicalAds with the vision that user-based tracking was bad for privacy,
and we're working to build a technical solution to that problem.

### The problem: grouping & targeting

Building an ad network requires us to serve ads across a number of different sites with differing content.
Many of these sites as well have content that focuses on a number of different topics.
You can imagine a blog with both Python and Kubernetes content,
and the audience for each of those posts is different.
**Each page of content that we serve should have targeting based on what it's about.**

The other major problem is trying to find ways to bundle content together,
so that advertisers can buy a large amount of it.
If we can only offer $500 a month of a very specific audience,
that doesn't scale very effectively.
**We need a way to easily bundle content into high-level topics.**

### Our original approach: bottom up using naive tags

Our first approach to solving this problem was bottom up.
Many publishers manually added tags to their content,
and we allowed them to pass these to us in our ad client.
Our ad client also gave content keywords based on related words appearing multiple times on the page.
Then we grouped a set of keywords together to make topics,
so for example our *Data Science* topic was made of `nlp`, `jupyter`, `pytorch`, `tensorflow`, and similar keywords.

This approach allowed us to build out our initial product,
and have reasonably good targeting.
It had a few drawbacks though:

* It needed users to tag content, and most pages aren't tagged (eg. software documentation)
* We needed to combine tags into topics, and there will always be some tags we don't know about
* The automatic tagging was quite naive, and had some false positives

We wanted to build a more robust solution that was able to understand a lot more about each page.

### The solution: top down using machine learning

Our approach to machine learning (ML) is more of a top down approach.
It works by having us train a model what each of our topics are,
by learning from an initial set of human categorized data.
This allows us to focus on the topics we have enough traffic to effectively target,
and then teach the model about any new topics quickly as we expand.

When we "train" the ML model,
it is creating a huge category words and how they map to a topic.
So for example,
the model learns that "natural language processing" on a page means it's highly likely related to data science.
The magic of the model is that it does this for a massive number of words and phrases,
much more than we could ever program as humans.

The ML-based model has the following benefits:

* The model scales across any technical content that was pass in, without requiring page authors to do anything
* It takes into account the entire page content, and word context, to 
* We can easily add more topics, as long as we can categorize a small number of pages of content that belong to that topic.

We're excited to expand our ML targeting in the future.

### Next steps: more topics and more privacy

The ease of adding new topics to our models allows us to continue to expand the topics we're able to target.
In the future,
if an advertiser comes to us wanting to target a specific subset of content,
we should be able to train a deploy this targeting within a week.

We're excited about this approach,
and hope that improving content-based ad targeting will remove the incentives to track users.
There is a long way to go,
but we think that our machine learning approach is a scalable foundation to build on.