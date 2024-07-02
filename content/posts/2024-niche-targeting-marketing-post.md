Title: AI-Powered Niche Targeting for Developer Marketers
Date: July 9, 2024
description: How EthicalAds uses machine learning and AI to match your ads to the most relevant pages, ensuring your product lands in front of the right developer audience. For any product and any audience.
tags: content-targeting
authors: David Fischer
image: /images/posts/2024-niche-targeting-diagram.png

Showing the right ad to the right audience is critical to get great performance from advertising.
Imagine you have a powerful new tool to help ReactJS developers;
showing this to potential customers already using React and JavaScript
is the best way to make every ad dollar count.

Unlike many display networks that target more broadly,
at EthicalAds, we've always tried show the most relevant ad
in order to get the best performance for our advertisers.
However, advertisers frequently ask how to reach small and more focused groups of developers
that match their product more finely than [our core audiences]({filename}../pages/advertisers.md#audiences).

This is why we built a new contextual targeting method that uses AI (ok, it's machine learning) to match
ads and their landing pages to the most similar pages across our network where ads appear.
This will allow serving ads to highly-relevant audiences for almost any type of developer-focused product.

*This post is aimed at developer marketers, but if you're interested in the tech
behind this niche targeting and you believe that AI only exists on a PowerPoint
while machine learning happens in Python, check out our
[developer-focused post]({filename}../posts/2024-niche-ad-targeting.md).*


## Why AI targeted ads are great for marketers, developers and privacy

Historically, display ads have worked best for targeting pretty broad audiences
and focusing on the top of the marketing funnel.
Search ads have been better for specific niches and reaching people who are actively searching for solutions that your product solves.
If you have a product that helps with Kubernetes setups,
reaching developers already struggling with Kubernetes' complexity (and searching Google for solutions)
was the best way. Display ads just couldn't target finely enough.

However, AI has enabled matching any developer niche to pages across our ad network.
Specifically, it can find sites and pages that pertain to Kubernetes' deployments
and show very contextually relevant ads on them.
Marketers reach the right audience and developers don't get off topic ads.

Now, you might be thinking, "AI-targeted ads and privacy? Ya right!".
However, instead of relying on data collection,
modern machine learning algorithms can analyze pages
where ads appear and see how similar they are to the ad itself, the company's website and landing pages
without needing to know anything about the user themselves.
So yes, AI-targeted ads can indeed be great for privacy.
It's like having your cake and eating it too, but without anyone spying on your cake preferences.


## Niche targeting prototype and case study

While we're still building and refining the capabilities for this targeting,
we wanted to show some early examples of just how it will work.
Here's an [example](https://www.ethicalads.io/advertisers/similar-pages/?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas) where you can see how we're able to target ads
specifically focusing on MongoDB and databases, when serving a MongoDB ad.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/niche-targeting.png" alt="Niche targeting for MongoDB which matches MongoDB related content">
  <p><a href="https://www.ethicalads.io/advertisers/similar-pages/?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas">Niche targeting example for MongoDB</a> which matches MongoDB related content</p>
</div>

If you sell a developer-focused product, you can
[try it](https://www.ethicalads.io/advertisers/similar-pages/?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas) with your own landing page
and see some of the closest matching across our network.

*Tip: the more verbose your landing page is and the more it describes your product in specific terms,
the better this will work.*

We're still refining this and we plan to replace the fairly generic AI model we're using
with a model with more knowledge of the different developer tools, technologies,
and languages. There's also a lot of knobs to twist to set how close an ad needs to be
to the page it appears to be "close enough" but all those details are coming together.


## Conclusion

While this approach is still in its early stages,
the end goal is that this new niche targeting will allow us to show ads for almost any product
on highly relevant pages and get great ad performance.
Like search ads, it will let marketers reach people already using the relevant technologies
to the product being offered.

This is our vision for developer marketing and we're excited with the early results we're seeing.
[Try the demo](https://www.ethicalads.io/advertisers/similar-pages/?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas) with your product or service
and if the matching pages look like good places where your ad could reach the audience you're looking for,
[let's chat]({filename}../pages/advertisers.md#inbound-form) about your next campaign.
