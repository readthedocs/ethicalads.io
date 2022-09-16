Title: Watch Out: Ad Scammers are Impersonating Open Source Devs
Date: September 20, 2022
description: The advertising business has a well-deserved reputation for scams and fraud. We detail some of what we've seen including scammers pretending to be open source developers.
tags: security, adtech
authors: David Fischer
image: /images/posts/2022-stopping-ad-fraud.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@jdent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Dent</a> on <a href="https://unsplash.com/s/photos/security?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


As we mentioned in our [newsletter recently]({filename}newsletter-july-2022.md),
EthicalAds was targeted by an ad scam ring.
Fortunately, we were able to see through the scam quickly and to protect ourselves and our advertisers.
However, we thought this would make for an interesting post to discuss the brazen scams folks try to pull.


## Anatomy of a scam

As our network grows, we knew we would have a target on our back for scammers.
Since we don't track users and have pledges around what data we retain
in our [Do Not Track policy](https://server.ethicalads.io/.well-known/dnt-policy.txt),
scammers will go after us and think we're easy pickings.
When there's money to be made online, people will try to do it.

The way these scams usually work is that a person will set up a site, request an ad publisher account,
and then simulate fake traffic to the site and rake in the earnings.
We have plenty of defenses to protect ourselves from these sorts of scams.

Probably our biggest defense is our relative size to the big networks.
Unlike larger ad networks, we vet every single publisher site we onboard.
We talk to every publisher, we only do a few at most in any given week, and the process isn't automated.
A person from our team looks at our publisher sites both before and after paid ads are turned on to make sure everything looks good.
This keeps both off-topic, non-developer sites as well as outright scams off our network.

What we didn't expect was that we would get fake developer sites
with fake backstories applying to join our network.


## Ad scammers are brazen

In late July, we got some requests that appeared to come from documentation for decent sized open source libraries.
Docs sites for code modules are a natural place to put an ad in front of an engaged audience
and it puts money directly into the hands of open source maintainers.
This is our bread and butter and we built EthicalAds to do exactly this for [Read the Docs](https://readthedocs.org/).

When we first let one of these sites onto our network (they'd switched from a competitor),
we knew something was wrong almost immediately.
There was a little more traffic than was normal for a library like this, but a huge percentage looked automated.
We regularly look at a few internal metrics like what percentage of ads we send are viewed and how long they appear on the screen. But the metrics screamed that this new site wasn't normal traffic at all.
Within a few days, we kicked them off and refunded the small amount of traffic that got through to our advertisers.

We got requests like this almost daily for weeks.
At first, we thought this example was one of a kind.
Soon, we discovered that scammers had registered similar domains to various modules' real domains,
made a sites that proxied traffic to the real library's site but could inject ads,
and created fake personas to impersonate the real library's devs:
names and emails that loosely matched one of the developers on GitHub.
There were dozens of examples but to name some specific modules:

* [AsyncJS](https://caolan.github.io/async/v3/)  ([fake mirror](https://asyncjs.xyz/))
* [DatafluxJS](https://github.com/massimocandela/dataflux)  ([fake mirror](https://dataflux-js.xyz))
* [NobloxJS](https://noblox.js.org/)  ([fake mirror](https://nobloxjs.xyz/))
* [Tool Cool Color Picker](https://github.com/toolcool-org/toolcool-color-picker)  ([fake mirror](https://tc-color-picker.xyz/))


While the scammers seem to have temporarily stopped applying to our network,
they created dozens of fake sites and dozens of fake personas
implying that they're doing this with some scale across other ad networks as well.
These scams weren't particularly hard to see through but were more noteworthy for how shameless they were.
In each case, the scammers were pretending to be the real developer while attemping to monetize that person's work.

In a few examples where we could get the real developer's email address from their GitHub profile,
we emailed the developer to see if they'd heard of this "unofficial mirror",
but in each case they confirmed our suspicion that they hadn't.
These developers hadn't done anything wrong,
but most werely that surprised that somebody would try to profit from their work.


## Keeping our defenses strong

In response to knowing we're now on the scammers' radar,
we made a few changes to make sure our network stays safe:

- We do some additional scrutiny on the clients viewing our ads.
- Our vetting process for incoming publishers has become more formalized
  and got a few additional steps to ensure sites on our network are real and on topic.
- We now have a system that alerts us to significant changes in traffic (quantity or quality) to a publisher.
- We have a live publisher KPIs dashboard that can show trends and key metrics for all our publishers at once.

As we grow, size may not always be our best defense,
but we intend to make sure our network stays exclusive, secure, and high quality.

Thanks for coming along with us on this journey to build an ethical ad network
and an introduction to the shadier side of the ad business.
Please [email us](mailto:ads@ethicalads.io) if you have any fraud prevention ideas
or feedback on our product.
We always love to hear from you.
