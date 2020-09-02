Title: Advertising update and open sourcing our ad server
Date: July 1, 2020
description: Advertising improvements and update on ads at Read the Docs including open sourcing our advertising server.
tag: ads, opensource, readthedocs
authors: David Fischer
image: /images/posts/2020-ethicalads-opensource.png


> This post first appeared
> on the [Read the Docs company blog](https://blog.readthedocs.com/advertising-improvements-2020/)

It's been a while since our
[last advertising update]({filename}ad-funding-read-the-docs-whats-next.md)
and it felt like a good time to talk about what's working
with our advertising model and how things are getting better.


How advertising is working for Read the Docs
--------------------------------------------

In our [2019 stats post](https://blog.readthedocs.com/read-the-docs-2019-stats/),
we broke out our advertising revenue which was fairly flat
year over year. The way our ad business is structured, our revenue
mostly grows with increases in traffic and Read the Docs is mature
enough that it isn't doubling in size every year.

With that said, we're pleased with our steady and sustainable growth.
Read the Docs doesn't have any investors putting pressure on us for
short term growth and that has allowed us to invest in our ad business,
commercial hosting, and in our community version for the long term.
We've rolled out a huge number of improvements to all the sides of our
business in the last year and we're happy with the results. Advertising
remains the single largest source of funding for Read the Docs and one
that scales as our costs scale.

On a real world note, Covid-19 had a short term impact on our
advertising revenue with a number of advertisers understandably pulling
back due to uncertainty in funding and the economy in general. While the
world isn't completely back to normal, we have returned some degree of
normalcy and most of these advertisers returned once there was a bit
more clarity in the broader economy and the virus' effect on the tech
industry specifically. Advertising on Read the Docs is now close to
capacity in the US, Canada, and Europe which are our largest advertising
markets.


Improved targeting for ads
--------------------------

Advertising on Read the Docs is different from most ad networks out
there. Our ad targeting is based on the content and the reader's
geography rather than personal data about our users. Read the Docs'
authors and readers have told us that privacy is important to them.
That's great because it's important to us too! With that said, there
are great ways to target specific content niches with ads relevant to
those readers without compromising on privacy.

To start, we chose a few groups of content advertisers can target where
we have enough traffic without the ads being focused on a tiny number of
projects. These niches are:

-   Data science and machine learning
-   Frontend web development
-   Backend web development
-   Security
-   DevOps
-   Technical writing

We tested this improved content targeting with a select group of
advertisers and the results were great. In some cases we saw click
through rates more than double. Whether the ad is to hire a developer or
to promote a service, we always want to deliver ads that are most
relevant to the documentation being served. This results in better value
to our advertisers while still respecting the privacy of our readers.

> Would your company like to get in front of more developers?
>
> Tell your [marketing or recruiting team]({filename}../pages/advertisers.md) about Read the Docs and show
> them how they can reach over 7 million developers who Read the Docs each
> month!


Open sourcing our ad server
---------------------------

One thing we've wanted to do for a long time is open source the code we
use to run advertising at Read the Docs. While there's always a bit of
an incentive to keep advertising code closed so it can't be abused, our
hope is that the trust we're building with the ethical ads model can be
used by others who want to run their own ethical advertising. Read the
Docs is an open source company and it's nice to have all our code out
there. We call it the ethical ad server.

The ethical ad server is built to handle the kind of load Read the Docs
itself receives -- over a million hits per day -- and it delivers
advertising based only on content and geographic targeting rather than
building up user profiles from personal information. It's built from
the ground up with user privacy in mind. We're excited to share it with
you so please [check out the code on
GitHub](https://github.com/readthedocs/ethical-ad-server).


Conclusion
----------

Just as we're constantly delivering improvements to Read the Docs
itself for our readers and project maintainers, we also strive to give a
better experience and better results to the companies who trust Read the
Docs as a marketing channel. I want to thank all our advertisers who
believe in our approach and continue to support us and stay tuned to
this space for more great features in the future!

Our ethical ad network is just about ready for launch and we're
actively looking for projects to beta test the network. If you run a
developer focused website and you're looking for a way to earn money
without selling out your visitors' privacy, please [get in
touch](mailto:ads@readthedocs.org?subject=Ethical%20Ad%20Network%20beta).
