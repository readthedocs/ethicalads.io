Title: Doing Math with Embeddings for Better AI Ad Targeting
Date: October 15, 2025
description: This post shows how we improved our contextual targeting to handle hundreds of developer-specific topic niches with embeddings, pgvector, and centroids.
tags: content-targeting, engineering, postgresql
authors: David Fischer
image: /images/posts/2025-embedding-map.png
image_credit: <span>Image generated with <a href="https://observablehq.com/">Observable</a> from embeddings and centroids and <a href="https://github.com/lmcinnes/umap">umap</a> for dimension reduction. Look <a href="#chart">below</a> for an interactive version.</span>


Large language models and their adjacent tools are evolving fast
and they are a powerful way to improve content classification,
which is great when you're building a contextual ad network that doesn't track people.
However, LLM prompts and responses can be inconsistent or unpredictable.
We've taken a more reliable approach.
By using (more) deterministic embeddings and creating centroids with related embeddings,
we were able to sharpen up our targeting
and boost performance with less guesswork without relying on any user-specific data.


## Historical context and scaling topic classification

First, a little bit of background.
A few years back, we built [our first topic classifier](https://www.ethicalads.io/blog/2022/11/a-new-approach-to-content-based-targeting-for-advertising/)
that essentially bundled content and keywords together into topics that advertisers could target and buy
similar to what they do for search ads.
To give an example, this allowed advertisers to target DevOps related content with relevant ads.
This approach scaled well up to about 10-15 topics
and gave advertisers an easily understandable way to get good contextual targeting for their campaigns.

Last year, we built a more advanced way to target content using language model embeddings,
a strategy we called [niche targeting]({filename}../pages/niche-targeting.md)
(see our [blog]({filename}../posts/2024-niche-ad-targeting.md) with more dev details).
It works by comparing embedding vectors to find pages semantically similar to an advertiser's landing or product page.
The results were strong, about 25% better performance on average, but scale was a challenge.
There simply weren't enough very closely related pages to build large campaigns.
Also, while the results were great, explaining embeddings to marketers proved difficult,
making the approach harder to sell despite its effectiveness.


<div class="postimage text-center" id="chart">
  <iframe height="525" class="w-100 shadow-lg border-0"
  src="https://observablehq.com/embed/34e5f0a6a04bbf16@117?cells=plot"></iframe>
</div>


## Hybrid approach with embedding centroids

After generating embeddings for nearly a million pages across our network,
clear clusters of related content began to emerge.
Looking at the [graph above](#chart), you can see that URLs for [PyLint](https://pylint.readthedocs.io)
are close and even somewhat overlapping with those of [ESLint](https://eslint.org).
URLs for [Flask](https://flask.palletsprojects.com) and [Django](https://www.djangoproject.com),
two Python web frameworks, form a pretty tight cluster.
And web scraping tools like [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
and [Scrapy](https://docs.scrapy.org) are also very close
showing that embeddings are really capturing the semantic meaning.

One of the powerful things about embeddings is that you can apply ordinary math to them,
like averaging a group of vectors.
A **centroid** is exactly that: the mean of a set of related embeddings.
For example, averaging paragraph embeddings can yield a strong representation of an entire page,
and averaging page embeddings often produces a good vector for a domain.
In the graph above, the small circles represent individual web pages
while the larger circles represent these domain centroids,
the semantic center of the pages for each domain.

New content that's semantically related to domains we've already classified
will land near that content in embedding space
(the [chart](#chart) reduces this to 2d space, but imagine 100s of dimensions).
This lets us easily answer questions like
"what domains are most closely related to a new domain we're classifying?" or
"how 'Flask-ey' is this new content?".
It also scales to any number of clusters of closely related content.

Like our earlier topic classifier, this allows us to target ads to content advertisers care about.
But unlike the old model, this approach just requires a few URLs or domains
with the kinds of content an advertiser wants to target.
It's also far easier to explain this type of classification to advertisers:
"we target your ads to the most similar domains across our network based on your landing pages or other URLs you provide"
is easy to understand *and* it works pretty well.


## Show me the code!

To show some concrete code examples, here's code to generate a domain centroid
from URL embeddings with [pgvector](https://github.com/pgvector/pgvector-python) and Django:

```python
from django.db import models
from .models import UrlEmbedding

UrlEmbedding.objects.filter(
    # Store the model the embedding is for
    # This lets you easily swap the model down the road
    model=model,
).exclude(
    vector__isnull=True,
).values("domain").annotate(
    centroid=models.Avg("vector"),
)
```

When classifying new pages, it's easy to see how similar the new content's embedding is
to domains where we already have an embedding.
From there, domains can be classified and grouped into topics that advertisers are interested in
although we have found that taking centroids of multiple domains frequently doesn't make sense.
Two web frameworks across different languages may be somewhat far in embedding space
although content very close to either of them is usually a good semantic match.

```python
from pgvector.django import CosineDistance
from .models import DomainCentroid

# New embedding to compare to previously classified domains
vector = [-1.457664e-02,  3.473443e-02, ...]

# Closer than this threshold implies the content is related.
# This threshold differs based on your embedding model
distance_threshold = 0.40

DomainCentroid.objects.all().annotate(
    distance=CosineDistance("vector", vector)
).filter(distance__lte=distance_threshold).order_by("distance")
```

This approach offers the best of both worlds.
It has the semantic depth of embeddings, far beyond what simple keywords can capture,
with the clarity and explainability closer to keyword-style targeting.
It scales to anything an advertiser might want to target
since new pages and domains just get embeddings and are automatically matched
to the right clusters of domains and topics.


## Conclusion

From the moment we started using embeddings for contextual ad targeting,
we recognized they had great potential for improving performance for advertisers.
Better ad performance means we can generate more money for the sites that host our ads
which is a great virtuous cycle.

With this approach using centroids, we hope to have another virtuous cycle
where our classifications improve over time as we classify more content.

Simon Willison's [blog post on embeddings](https://simonwillison.net/2023/Oct/23/embeddings/)
as well as some of his other posts and presentations have been very influential
in honing our approach. Thanks Simon!
