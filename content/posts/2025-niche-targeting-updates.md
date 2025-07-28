Title: Contextual Topic Targeting with Embedding Centroids
Date: August 5, 2025
description: This post shows how we improved our contextual targeting to handle hundreds of developer-specific topic niches with embeddings, pgvector, and centroids.
tags: content-targeting, engineering, postgresql
authors: David Fischer
image: /images/posts/niche-targeting.png


Going back to our [original vision for EthicalAds]({filename}../pages/vision.md),
our goal has always been to show the best ad possible based on page context rather than any data about the user.
By delivering the best possible ad on a given page,
this will result in great advertiser performance with high earnings for the sites
where the ads appear and without compromising privacy.

However, our approach to best fulfill that vision has changed over time.
The tools available to target contextually are rapidly improving
with the advances in language models (LLMs).
This post is going to delve into how to use those advances for ad targeting
but similar approaches can be used for many types of classifiers.


## Historical context and scaling topic classification

A few years back, we built [our first topic classifier](https://www.ethicalads.io/blog/2022/11/a-new-approach-to-content-based-targeting-for-advertising/)
that essentially bundled content and keywords together into topics that advertisers could target and buy.
To give a few examples, in addition to our [core audiences]({filename}../pages/advertisers.md#audiences),
this allowed advertisers to target database related content or blockchain related content with relevant ads.
This approach scaled well up to about 15-20 topics which was great for ad performance.
However, adding another topic to target involved not just adding training set examples for that topic
but also making sure any of our existing examples that also applied to the new topic were marked appropriately.
Scaling became a pain.

Last year, we built a more advanced way of targeting very specific content with language model embeddings
that we called [niche targeting]({filename}../pages/niche-targeting.md)
(see our [blog]({filename}../posts/2024-niche-ad-targeting.md) with more details).
This approach worked by targeting pages similar to an advertiser's specific landing and product pages.
Using this approach, we saw ad performance 25-30% better in most cases.
However, campaign sizes were very limited, because there just aren't enough very similar pages and
it was hard to fill campaign sizes advertisers wanted to run.
It also was simply harder to explain how this worked to marketers which made it harder to sell despite strong performance.


## Hybrid approach with embedding centroids

After generating embeddings for nearly a million pages across our network,
clusters started to emerge of related content.
Think of Kubernetes related content clustering together
and Python related content clustering together in a different section.
A centroid is simply the average of these embeddings: a single vector that represents the center of that topic cluster.

New content that's semantically similar will automatically fall close to related content in the embedding space.
Just as before with our topic classifier model, this let us sell advertisers on the topic they're looking for.
But unlike the previous approach, you only need to classify a few tens of pages of content for a new centroid to start taking shape. This scales much better to hundreds of topics or more.
It's also far easier to explain to advertisers that we are targeting content related to the right topic for their product.

To show some concrete code examples, here's a code example of generating a centroid for a number of manually classified embeddings with [pgvector](https://github.com/pgvector/pgvector-python) and Django:

```python
from django.db import models

# Human classifications that match an embedding to a topic
from .models import TopicEmbedding

# Get the centroid for DevOps related content
embeddings = TopicEmbedding.objects.filter(topic="devops").values("embedding__vector")
embeddings.aggregate(
    centroid=models.Avg("embedding__vector"),
)["centroid"]
```

When classifying new content (a new embedding), it's easy to see how similar it is to all of the topic centroids.
This essentially answers the question of "how DevOps-ey is this content" or "how Frontend-ey is this content"
for all possibly topics.

```python
from pgvector.django import CosineDistance

from .models import TopicCentroid

# New embedding to classify
vector = [-1.457664e-02,  3.473443e-02, ...]

# Closer than this threshold implies the content is related.
# This threshold differs based on your embedding model.
distance_threshold = 0.45

TopicCentroid.objects.all().annotate(
    distance=CosineDistance("vector", vector)
).filter(distance__lte=distance_threshold).order_by("distance")
```

This approach yields all the benefits of using embeddings like much better semantic relevance than simple keywords
while still being explainable like simple keyword targeting used in search ads.
It also scales perfectly fine with any number of topics
and new content just gets an embedding and gets matched and clustered automatically.
As more content is manually classified and added to the centroid, the centroid better reflects that topic
and classifications for that topic improve over time.
Adding new topics for classification


## Conclusion

From the moment we started using embeddings for ad targeting,
we recognized they had great potential for improving contextual targeting performance for advertisers.
Better ad performance means we can generate more money for the sites that host our ads
which is a great virtuous cycle.

With this approach using centroids, we hope to have another virtuous cycle
where our classifications improve over time as we classify more content.

Simon Willison's [blog post on embeddings](https://simonwillison.net/2023/Oct/23/embeddings/)
as well as some of his other posts and presentations have been very influential
in honing our approach. Thanks Simon!
