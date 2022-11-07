Title: A new approach to content-based targeting for advertising
Date: November 7, 2022
description: Content-based targeting allows us to provide great ad targeting without the privacy downsides of user-based tracking
tags: content-targeting, advertisers
authors: Eric Holscher 
image: /images/posts/2022-bullseye.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@silvanarnet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Silvan Arnet</a> on <a href="https://unsplash.com/s/photos/bullseye?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>

In the past few years,
advancements in machine learning have made a new era of content-based ad targeting possible.
Computers are now stunningly good at learning how to categorize documents,
which allows us to automate and scale content-based targeting to our entire network.

This post will cover how our content-based targeting works at a high level,
and the implications for the future growth of our business.
Building great privacy-first ad targeting helps the industry move past the era of invasive user tracking.

### The problem: grouping & targeting

Building an ad network requires us to serve ads across a number of different sites with differing content.
Many of these sites as well have content that focuses on a number of different topics.
You can imagine a blog with both Python and Kubernetes content,
and the audience for each of those posts is different.
**Each page of content that we serve should have targeting based on what it's about.**

The other major problem is trying to find ways to bundle content together,
so that advertisers can buy a large amount of it.
If we can only offer $100 a month of a very specific audience,
that doesn't scale very effectively.
**We need a way to easily bundle content into high-level topics.**

### Our original approach: using naive tags

Our first approach to solving this problem was based on tagging.
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
it is mapping all the various words and phrases in a document into the topic we've assigned the page.
So for example,
the model learns that "natural language processing" on a page means it's highly likely related to data science.
The magic of the model is that it does this for a massive number of words and phrases,
many more than we could ever add manually.

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
We can also scale down into smaller niches,
because we are able to find all the content within our network that matches more specific topics.

We're excited about this approach,
and hope that improving content-based ad targeting will remove the incentives to track users.
There is a long way to go,
but we think that our machine learning approach is a scalable foundation to build on.
