Title: Using embeddings in production with Postgres & Django for niche ad targeting
Date: Apr 23, 2024
description: How we built better contextual ad targeting using PostgreSQL, Django, and embeddings which are a way to encode the "relatedness" of text and pages for use in machine learning.
tags: content-targeting, engineering
authors: Eric Holscher
image: /images/posts/niche-targeting.png

This is an update to our original post on [content-based ad targeting](https://www.ethicalads.io/blog/2022/11/a-new-approach-to-content-based-targeting-for-advertising/).
In this post, I'll talk a bit more about our next step, using machine learning (embeddings specifically) to build better contextual ad targeting.

At the end of our last post,
we were crawling all our publisher's pages,
and categorizing pages into _Topics_ based on page text.
We did this by training a model with ~100 examples of each topic,
and then storing the topics in our database for fast ad serving.

This gave us a good starting point for targeting ads by topic,
but we wanted to get more granular.

*Just a quick aside. This post is aimed at developers.
If you're interested in one aimed at marketers, check out our
[developer-focused post]({filename}../posts/2024-niche-ad-targeting.md).*

## Targeting each page individually with embeddings

Our new approach is to use [word embeddings](https://en.wikipedia.org/wiki/Word_embedding) to represent both the advertisers landing page and the publisher pages.
This allows us to generate a representation of these pages,
which can be compared against each other.

We're currently using Python's [SentenceTransformers](https://www.sbert.net/) library to generate these embeddings.
We will likely upgrade to a more advanced model in the future,
but this was perfect for our initial tests.

### Generating, storing, and querying embeddings

A simple example of what this looks like might be:

```python
import requests
from bs4 import BeautifulSoup
from sentence_transformers import SentenceTransformer

# Generate embeddings for a page

model = SentenceTransformer(MODEL_NAME, cache_folder=CACHE_FOLDER)
text = BeautifulSoup(requests.get(url), 'html.parser').get_text()
embedding = model.encode(text)
print(embedding.tolist())
```

We're then using [pgvector](https://github.com/pgvector/pgvector) and [pgvector-python](https://github.com/pgvector/pgvector-python) to manage these embeddings in Django & Postgres,
which is what we're already using in production.

```python
from django.db import models
from pgvector.django import VectorField

# Store the content in Postgres/Django

class Embedding(models.Model):
    # FK where we keep metadata about the URL
    analyzed_url = models.ForeignKey(
        AnalyzedUrl,
        on_delete=models.CASCADE,
        related_name="embeddings",
    )

    # Model name so we can use different models in the future
    model = models.CharField(max_length=255, default=None, null=True, blank=True)

    # The actual embedding
    vector = VectorField(dimensions=384, default=None, null=True, blank=True)
```

Then we're able to query the database for the most similar publisher pages to an advertiser's landing page:

```python
from pgvector.django import CosineDistance
from .models import Embedding

# Find the most similar ads for the page we're serving an ad on

Embedding.objects.annotate(
    distance=CosineDistance("vector", embedding)
).order_by("distance")

```

## Try out a demo

You can see a screenshot of our niche targeting in action at the top of this page.
This is a simple proof of concept,
but you can see how we're able to target ads specifically focusing on MongoDB and Databases,
when serving a MongoDB ad.

You can [try out our Niche Targeting Demo](https://www.ethicalads.io/advertisers/similar-pages/?url=https%3A%2F%2Fwww.mongodb.com%2Fatlas),
and let us know how it goes!

## Advantages of Niche Targeting

There is a huge win both in terms of privacy and user experience with this approach:

* **We're able to target ads to pages without needing to know anything about the user.** The better we get at targeting, the more powerful our ethical advertising approach becomes, and the larger we can scale out network.
* The user experience of minimalist, well-targeted ads is better. We're able to show fewer ads and charge more for them because they perform better. This is a win-win for everyone.
* We were able to implement this approach with minimal changes to our existing infrastructure, mostly because we're already heavily invested in the Python ecosystem and Postgres.

## Challenges and Considerations

We have a few challenges to overcome with this approach:

* We currently aim for 50ms for ad response time, and this approach is currently slower than that. We're working on optimizing this with indexing, and might look at using an in-memory vector store in the future.
* Embeddings currently work pretty well, but can often associate things that are not relevant. For example, we're run into issues where the same words are used to mean different things (eg. "model"), and the embeddings can get confused.

## Conclusion

This approach is still in its early stages, but we're excited about the potential.
The better we can get at ethical ad targeting,
everyone in our network benefits:

* **Advertisers** get better ad targeting, ensuring they show up in front of the right users.
* **Publishers** get more money while showing a single ad rather than resorting to multiple, larger ads that take over their site
* **Users** get a better experience, with ads that are relevant to the content they are reading.

This is our vision for advertising,
and we're excited about the potential of this approach.

Thanks so much to Simon Willison for his [blog post on embeddings](https://simonwillison.net/2023/Oct/23/embeddings/),
which is what inspired me to try this approach.
