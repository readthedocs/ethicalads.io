Title: Floating Ad Placements in our Ad Client
Date: March 8, 2022
description: We built a opt-in floating ad placement into our ad client that you can use with virtually no code.
tags: ad-client
authors: David Fischer
image: /images/posts/2022-floating-placement.jpg


A couple of months ago, we began testing a new feature in our ad client
that enabled users to quickly and easily add a floating ad placement
to their site without having to write custom code.
Today, we're announcing this feature is available to any publisher.


## Floating placements perform

This new placement has been running about 10% of Read the Docs' ad traffic
and all of the traffic on Read the Docs' [own documentation](https://docs.readthedocs.io/en/stable/).
So far, the data has been very promising with ads leading to clickthroughs 31% more than our normal placement.
Having ads that work without resorting to either personalized tracking
or being intrusive is our core mission.
Better performing ads result in happier advertisers and more money in independent publishers' pockets.

[comment]: # (31% improvement comes from comparing Oct 1 - Dec 1 vs. Jan 1 - Feb 28 on docs.readthedocs.io)

## Usage

This feature is available to any publisher who wants to use it
by setting the `data-ea-style="stickybox"` attribute on their ad placement.
For very wide screens, this will cause the advertisement to be in a dismissable
box in the lower right corner (this can be styled with CSS).
For screens below ultra wide, the ad will be a standard inline ad placement.

A number of publishers had requested this feature or had built it themselves
for their own site and we wanted to have a base implementation available for all our publishers.
See our [full documentation](https://ethical-ad-client.readthedocs.io/en/latest/#stickybox) on the feature for details.

If there are features you're interested to see in our ad client,
please [let us know]({filename}/pages/contact.md).
