Title: Keeping Yourself Safe from Security and Privacy Issues in Advertising
Date: February 6, 2023
description: The adtech landscape is a minefield of privacy issues, malware, and bad actors. While we're an ad company, we have tips to keep you safe from the worst of it.
tags: security, privacy, adblock, adtech
authors: David Fischer
image: /images/posts/2023-malware-advertising-protect-yourself.jpg
image_credit: <span>Photo by <a href="https://unsplash.com/@jackson_893?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Geiger</a> on <a href="https://unsplash.com/photos/JJPqavJBy_k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>


Many of our readers are familiar with privacy issues related to advertising.
If you need some convincing, check out our [privacy teardown on search engines]({filename}../posts/2022-privacy-teardown-search-engines.md) from a few months ago
comparing the big search companies against some privacy-focused search companies.
Nobody wants their personal information siphoned off to companies they've never heard of.

We're going to highlight some other issues in the minefield that is adtech
and we have some recommendations to keep you safe and secure.


## Malware in advertising

The days of ad networks running scripts on behalf of advertisers
that made cross-site scripting vulnerabilities (XSS) trivial are mostly gone.
However, that doesn't mean that security issues around advertising have also gone the way of MySpace.

A very recent trend is malvertising: real advertisers paying to promote malware,
ransomware, or spyware. These kinds of ads usually target people searching for software to install
especially things like developer tools, password managers, and cryptocurrency wallets.
In some cases, the ad landing page which serves the malware is even designed or named to mimic its real counterpart.

<div class="postimage text-center">
  <img class="w-50 shadow-lg" src="{static}../images/posts/2023-malvertising-on-google.png" alt="Malware being advertised ('malvertising') in Google search ads">
  <p>Malware being advertised ("malvertising") in Google search ads in January 2023. <br>Credit: <a href="https://twitter.com/malwrhunterteam/status/1616565189754900480" rel="noopener nofollow">MalwareHunterTeam on Twitter</a></p>
</div>

There's been a big uptick in this kind of advertising over the last month.
While I expect Google and domain registrars will clamp down on the worst offenders pretty quickly,
these kinds of issues resurface periodically both on Google and elsewhere.

In mid-2018, for example, [Google kicked off some particularly egregious kinds of cryptocurrency advertisers](https://support.google.com/adspolicy/answer/7648803).
Many of those same advertisers just went to less discerning networks to keep doing the same thing.
Our own network had a massive uptick in prospects interested in blockchain advertising that week.


## How to keep yourself safe

<div class="postimage text-center">
  <img class="w-50 shadow-lg" src="{static}../images/posts/2023-ad-blocker-meme.jpg" alt="Even people working in the ad industry protect themselves">
  <p>Even people working in the ad industry protect themselves. <br>Credit: <a href="https://www.reddit.com/r/adops/comments/yrrmsn/i_feel_seen/" rel="noopener nofollow">/r/adops on Reddit</a></p>
</div>

It might be a bit strange for an ad company like us to recommend this,
but tracker blockers or ad blockers are a great way to keep yourself private and safe
from malware or scams in advertising.
Last month, we had a post for privacy week
where we [recommended some ad and tracker blockers]({filename}../posts/2023-data-privacy-week.md#ad-blockers)
that we use ourselves.

We are definitely a bit biased since it doesn't block us (because we don't track you),
but EFF's [Privacy Badger](https://privacybadger.org/) is a great tracker blocker
that works differently than most other ad blockers out there.
While it only blocks trackers, since most ads track you, it ends up blocking a lot of ads.

A lot of yours and our favorite sites on the internet rely on ads to keep operating.
If you're like us, you want to support them while still protecting your privacy
and keeping yourself safe.
Despite ad blockers and tracker blockers, EthicalAds still reaches tons of developers.

<div class="postimage text-center">
  <img class="w-75 shadow-lg" src="{static}../images/posts/2023-privacy-badger-notrackers.png" alt="Results of the EFF's Privacy Badger on our homepage showing no trackers">
  <p>Results of the EFF's Privacy Badger on our homepage showing no trackers</p>
</div>


## How EthicalAds keeps you safe

Our biggest advantage over the big ad networks is that because we're small,
we have a relationship with every single one of our advertisers.
This keeps our ads relevant to software development and safe from bad actors promoting malware.
It would be an impressive feat of social engineering to get a malware advertiser
onto our network.

A person on our team reviews every ad for new advertisers before they go live.
We also never run third-party code or serve advertiser hosted resources.
Everything is hosted on our servers.
We built this ad network to run ads on our own site Read the Docs so we completely understand
the concerns publishers have in running ads on their sites.

The other side of this coin is that we also have also talked to and vetted every single
one of our publishers.
A member of our team checks every publisher site before paid ads go live.
Advertisers care a lot about brand safety (they tell us a lot!).
They don't want the brand they're trying to build
being promoted next to malware or questionable content.

Both publishers and advertisers care a lot about what they're building.
Our promise to them is that we will treat their brand the way we treat our own.

Want to advertise or host ads on a network you can trust?
[Get in touch]({filename}../pages/contact.md)!
