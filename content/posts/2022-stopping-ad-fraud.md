Title: Stopping Ad Fraud: Brazen Scams and How We Keep Our Network Safe
Date: September 20, 2022
description: The advertising business has a well-deserved reputation for scams and fraud. We detail some of what we've seen and how we keep our network safe.
tags: security, adtech
authors: David Fischer
image: /images/posts/2022-stopping-ad-fraud.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@jdent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Dent</a> on <a href="https://unsplash.com/s/photos/security?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


As we mentioned in our [newsletter recently]({filename}newsletter-july-2022.md),
EthicalAds was targeted by an ad scam ring.
Fortunately, we were able to see through the scam quickly and to protect ourselves and our advertisers.
However, we thought this would make for an interesting post talking about some of our defenses
and some of the brazen scams folks try to pull.


## Anatomy of a scam

As our network grows, we knew we would have a target on our back for scammers.
Since we don't track users and have pledges around what data we retain
in our [Do Not Track policy](https://server.ethicalads.io/.well-known/dnt-policy.txt),
scammers will go after us and think we're easy pickings.
When there's money to be made online, people will try to do it.

The way these scams usually work is that a person will set up a site, request an ad publisher account,
and then simulate fake traffic to the site and rake in the earnings.
I'm sure folks working at Google have seen thousands of variations on this
and they're probably pretty good at defending against it.


## Our defenses

Like most ad networks, we have a number of defenses to automatically try to detect and prevent this.
While our code is open source, some of these defenses rely on configuration outside of our open source code.
Just to talk to some of them:

- We use both free and paid databases of blocklists belonging to known VPNs or known automated traffic.
- Our upstream CDN provider, Cloudflare, can block or challenge problematic clients,
  but we also use the threat score metric they provide.
- We aggressively rate limit the ability to view and click ads.
  Normal ad traffic doesn't come from just a few clients.
- We do a number of other normal protections that ad networks do
  like use nonces to prevent ads being viewed multiple times
  and making sure the client requesting an ad makes sense.

These defenses work very well at making sure we're counting real traffic for our advertisers
and paying our publishers appropriately and fairly.
We routinely hear from our advertisers that their own analytics shows *more traffic* coming from us
than our reporting.
That's not to say they're wrong and we're right but just that we may not be counting exactly the same thing.
Analytics programs are interested in all non-bot traffic while we report only billable ad traffic.

Probably our biggest defense, however, is our relative size to the big networks.
Unlike larger ad networks, we vet every single publisher site we onboard.
We talk to every publisher, we only do a few at most in any given week, and the process isn't automated.
A person from our team looks at the site where EthicalAds will appear both before our ads appear and after they appear but before paid ads are turned on to make sure everything looks good.
This keeps both off-topic, non-developer sites as well as outright scams off our network.

What we didn't expect was that we would get fake developer sites with fake backstories applying to join our network.


## Ad scammers are brazen

In late July, we got some requests that appeared to come from documentation for decent sized open source libraries.
Docs sites for code modules are a natural place to put an ad in front of an engaged audience
and it puts money directly into the hands of open source maintainers.
This is our bread and butter and we built EthicalAds to do exactly this for [Read the Docs](https://readthedocs.org/).

When we first let one of these sites onto our network (they'd switched from a competitor),
we knew something was wrong almost immediately.
There was a little more traffic than was normal for a library like this, but a huge percentage looked automated.
We regularly look at a few internal metrics like what percentage of ads we send are viewed and how long they appear on the screen. But the metrics screamed that this new site wasn't normal traffic at all.
Within a few days, we kicked them off and refunded the small amount of traffic that got through our checks.

We got requests like this almost daily for weeks.
What we discovered is that scammers had registered similar domains to the library's real domain,
made a site that proxied traffic to the real library's site but could inject ads,
and created fake personas to impersonate the real library's devs:
names and emails that loosely matched one of the developers on GitHub.
There were dozens of examples but to name some specific modules (these are the real ones):

- [AsyncJS](https://github.com/caolan/async)
- [NobloxJS](https://noblox.js.org/)
- [DatafluxJS](https://github.com/massimocandela/dataflux)
- [Tool Cool Color Picker](https://github.com/toolcool-org/toolcool-color-picker)

While the scammers seem to have temporarily stopped applying to our network,
they created dozens of fake sites and dozens of fake personas
implying that they're doing this with some scale.
In a few examples where we could get the real developer's email address from their GitHub profile,
we emailed the developer to see if they'd heard of an "unofficial mirror",
but in each case they confirmed our suspicion that they hadn't.


## Keeping our defenses strong

In response to knowing we're now on the scammers' radar,
we made a few changes to make sure our network stays safe:

- We do some additional scrutiny on the clients viewing our ads.
- Our vetting process for incoming publishers has become more formalized
  and got a few additional steps to ensure sites on our network are a good fit.
- We now have a system that alerts us to significant changes in traffic (quantity or quality) to a publisher.
- We have a live publisher KPIs dashboard that can show trends and key metrics for all our publishers at once.

As we grow, size may not always be our best defense,
but we intend to make sure our network stays exclusive, secure, and high quality.

Thanks for coming along with us on this journey to build an ethical ad network
and an introduction to the shadier side of the ad business.
Please [email us](mailto:ads@ethicalads.io) if you have any fraud prevention ideas
or feedback on our product.
We always love to hear from you.
