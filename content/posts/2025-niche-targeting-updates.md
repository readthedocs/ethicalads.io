Title: Improving AI Ad Targeting with Embeddings
Date: August 5, 2025
description: This post shows how we improved our contextual targeting to handle hundreds of developer-specific topic niches with embeddings, pgvector, and centroids.
tags: content-targeting, engineering, postgresql
authors: David Fischer
image: /images/posts/2025-embedding-map.png
image_credit: <span>Image generated with <a href="https://matplotlib.org/">Matplotlib</a> from embeddings and centroids and <a href="https://github.com/lmcinnes/umap">umap</a> for dimension reduction</span>


Large language models and their surrounding tools are evolving fast
and they are a powerful way to improve ad targeting and content classification,
which is great when you're building a contextual ad network that doesn't track people.
However, LLM prompts and responses can be inconsistent or unpredictable.
We've taken a more reliable approach.
By using (more) deterministic embeddings, we were able to sharpen up our targeting
and boost performance with less guesswork without relying on any user-specific data.
The method in this post should work well for many multi-classification tasks,
particularly when the set of classes evolves or grows over time.


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
There simply weren't enough closely related pages to build large campaigns.
Also, while the results were great, explaining embeddings and page similarity to marketers proved difficult,
making the approach harder to sell despite its effectiveness.


## Hybrid approach with embedding centroids

After generating embeddings for nearly a million pages across our network,
clear clusters of related content began to emerge.
For example, pages about Kubernetes tended to group closely together,
while Python-related content formed its own nearby cluster in a different region of the embedding space.
One of the powerful things about embeddings is that you can apply standard math to them,
like taking an average of a group of vectors.
A **centroid** is just that: the average of a set of related embeddings,
representing the semantic center of a topic.

Classifying new content that's semantically related lands near similar content in embedding space
(as shown in the 2D projection graphic in this post).
Like our earlier topic classifier, this allows us to target ads based on the topics advertisers care about.
But unlike the old model, this approach requires only a few examples to form a new centroid,
making it far more scalable to hundreds of topics or more.
It's also far easier to explain this type of classification to advertisers.

To show some concrete code examples, here's code to generate a centroid for a number of manually classified embeddings with [pgvector](https://github.com/pgvector/pgvector-python) and Django:

```python
from django.db import models

# Human classifications that match an embedding to a topic
from .models import TopicEmbedding

# Get the centroid for DevOps related content
embeddings = TopicEmbedding.objects.filter(topic="devops").values("embedding__vector")
centroid = embeddings.aggregate(
    centroid=models.Avg("embedding__vector"),
)["centroid"]
```

When classifying new content, it's easy to see how similar the content's embedding is to each of the topic centroids.
This essentially answers the question of "how DevOps-ey is this content" or "how Frontend-ey is this content"
for an arbitrary number of topics.
To steal a term, it's a vibes-based classifier.

```python
from pgvector.django import CosineDistance

from .models import TopicCentroid

# New embedding to classify
vector = [-1.457664e-02,  3.473443e-02, ...]

# Closer than this threshold implies the content is related.
# This threshold differs based on your embedding model
distance_threshold = 0.40

TopicCentroid.objects.all().annotate(
    distance=CosineDistance("vector", vector)
).filter(distance__lte=distance_threshold).order_by("distance")
```

This approach offers the best of both worlds.
It has the semantic depth of embeddings, far beyond what simple keywords can capture,
with the clarity and explainability of keyword-style targeting.
It scales to any number of topics, since new content just gets an embedding and automatically matched to the right clusters.
Adding a new topic is as simple as giving 15-20 example pages.
From there, a new centroid forms and begins matching relevant content automatically.
As more content is manually classified and added to a centroid, that topic representation improves,
making future classifications even more accurate.


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
