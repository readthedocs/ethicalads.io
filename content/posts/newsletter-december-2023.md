Title: EthicalAds Newsletter - December 2023
Date: January 9, 2024
description: Updates from December 2023, including stats and commentary on our progress as we build EthicalAds
tags: newsletter, community, build-in-public
authors: David Fischer
image: /images/posts/2023-december-newsletter.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@alexscottphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alex Hawthorne</a> on <a href="https://unsplash.com/photos/house-in-between-trees-and-dock-under-gray-sky-cQxwarmp4ag?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>



## New features

Our progress in December was:

* We trained and released a new version of our topic classifier
  that roughly doubles the size of the training set.
  So far, we're seeing improved accuracy in analyzing the pages where our ads appear.
* On our website, we released our [Q1 prospectus]({static}/prospectus/ethicalads-advertiser-prospectus.pdf).
  There were no pricing changes but we did change up the prospectus considerably
  to talk more about our advertising worldview and focus on the value we provide to advertisers.
* Our experiment with ads that rotate occasionally when there's user input hit a few snags
  with a couple publishers. This experiment is live on Read the Docs and our beta client
  and it should roll out more widely in January.
* Years ago, we ran a few campaigns that targeted geographically more finely than countries.
  We made a few improvements to be better able to target both US states and major US metro areas
  in response to advertiser demand.

You can always see our latest server updates in our
[ethical-ad-server changelog](https://ethical-ad-server.readthedocs.io/en/latest/developer/changelog.html)
and [ethical-ad-client changelog](https://ethical-ad-client.readthedocs.io/en/latest/changelog.html).


## December advertising stats

[comment]: https://server.ethicalads.io/publisher/all/report/?start_date=2023-12-01&end_date=2023-12-31

In December 2023:

* We generated **$39,248.91** for our publishers.
* We had **173 publishers** on our network with at least one paid ad impression.
* We had **19,916,532** paid ad views across the world.

Our business is highly seasonal and traffic to our network drops drastically
starting around December 18th or so to ~1/3 of normal levels.
All things considered, this was a very strong month for advertising
and we expect a strong January.

<div class="postimage text-center">
  <img class="w-100 shadow-lg" src="{static}../images/posts/2023-december-newsletter-graph.png" alt="2023 holiday traffic levels">
  <p>2023 holiday traffic levels</p>
</div>


## Upcoming features

The major features in our upcoming roadmap for January:

* We're continuing to work on ad rotation and expect to have more hard stats
  about how rotated ads (currently a tiny fraction of the total) perform.
* We're actively working on some incentives for publishers who switch from other networks
  to EthicalAds. If you've been on the fence about trying out our network,
  [let us know]({filename}../pages/contact.md).
* One service we frequently provide to advertisers is to more actively manage their advertising.
  We can turn off lower performing ads or even slightly tweak ads to try to find something
  that performs even better. We want to highlight these "agency-lite" features on our website
  and prospectus.
* We're still hoping to collaborate with a few advertisers who use Tableau (or something similar)
  to make sure we build exactly what they want in terms of reporting.
  If you're interested in this, please [get in touch]({filename}../pages/contact.md)!


Thanks again for being along with us on this journey to build an ethical ad network.
Please [email us](mailto:ads@ethicalads.io) if you have any ideas or feedback on our product or roadmap,
we always love to hear from you.
