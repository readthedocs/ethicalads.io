Title: Publisher Spotlight Series: Ido Shamun from Daily.dev
Date: January 6, 2022
description: Our first publisher spotlight series post features Ido Shamun, a founder of Daily.dev. Daily.dev uses EthicalAds for monetization and aims to be every developer's homepage
tags: publisher-spotlight
authors: David Fischer
image: /images/posts/2022-publisher-spotlight-dailydev.jpg


<figure>
    <figcaption>Listen to this interview:</figcaption>
    <audio controls src="/audio/publisher-spotlight-ido-shamun-dailydev.mp3">
            Your browser does not support the <code>audio</code> element.
    </audio>
</figure>


*This is part of a new publisher spotlight series where we highlight publishers
using EthicalAds and help them tell their story.
This first episode is with Ido Shamun from [Daily.dev](https://daily.dev).*


**David: Hello and and welcome to sort of the first episode of an EthicalAds podcast.
I'd like to introduce my guest who is Ido Shamun, one of the founders of Daily.dev,
which aims to be every developers homepage. Welcome Ido.**


Ido: Hey David, it's great to be here. Good luck with your new series.


**Thanks. It might be a very short series, but we'll see how it goes.
So firstly I'd love to get in your words, what is Daily.dev?**


So Daily.dev is a platform for developers.
We aggregate news, developer news from all over the web. Hundreds of sources.
We personalize it for the developers so they get only the content they are interested in.
We've been running this product for like three years already,
four years and it's growing growing pretty great so far.
Um, we've reached 100,000 weekly active users,
almost 60,000 users every day. So it's going pretty good. I would say.


**That's a lot of daily actives.
Yeah, it sounds, it sounds like it's going really well. How'd you get started?
What made you get started on this?**


So we started as a side project honestly.
We started it as out of a need that we
had in our engineering team back in our previous company.
So we had like, we had this slack bot that kept sending us notifications,
on new content from different sources.
And we thought, maybe we can build something out of it and create something for
other developers so they will be able to enjoy it as well.
So we started slowly releasing the first version,
someone entered us on ProductHunt slowly the
world of mouth increased and at some point,
we decided to go full on on this project and we founded the company and now
we've been growing the team as well, so yeah.



**That's fantastic. That sounds like everything's going really well.
What sort of tech stack are you looking at with with Daily.dev?**


So mainly we look at NodeJS, Javascript, React
for the front end and we have several,
services written in Golang and Python.

Really depends on the task at hand. Python is very great at
scraping and Golang for performance, critical missions,
but mostly JavaScript is our go to language



**Sure, that's cool.
The developer homepage has been sort of like the
goal of a lot of products in the past,
Maybe google reader, but definitely iGoogle. I remember that service.
I was a user of iGoogle which was sort of like a
developer homepage gave you some features like that.
Maybe even Reddit.
Reddit could be considered the homepage for for people.
What sets Daily.dev apart from these other things.**



So first of all,
I think the fact that we are aiming only for developers really enables
us uh to fit our solution to the audience to the community.
Because if we wanted, for example to aggregate news
for the general audience,
then the product would probably end up being something totally different.
So the fact that we're doing it for developers gives us,
a better a very chance to succeed in our mission.
We also choose some unique way to implement this vision,
which is a browser extension.
So we we have both a browser extension and a web app that we built later on,
but we started as a browser extension that overrides your new tab.
So we are actually on page once you install us.
So every time you open a new tab, you see the news for developers like you.
You can choose and get whatever you want out of it.
And maybe even comment or up-vote the
articles you love and contact with other developers.


**That's really cool.
By occupying the new tab space, I feel like every developer has got like 50 tabs and sometimes you close them,
you declare tab bankruptcy and go back to go back to square zero for the next day.
Some people, some people don't declare bankruptcy for a couple weeks.
By doing that, you must be doing like a ton of traffic,
You talked a little bit about your daily
actives and your monthly actives or weekly actives.
What kind of total traffic are you doing even excluding duplicates?
So, you know, not just users, but like total traffic. You must be doing a ton.**


Yes, a total traffic in around 30 million page views per month.


**That's a lot.
I think going back to sort of like my work and Read the Docs,
that's probably about where Read the Docs is
and Read the Docs is massive and hosts tons of projects.
So you're you're handling an absolute ton of traffic. That's really cool.
II also think it's interesting that
you talked about focusing really on developers.
You know, that that's sort of something that we at EthicalAds.
That that's exactly what we're doing, right.
You know, we're not super innovative in those terms.
We're just another ad network,
but by really focusing on developers and the
goals of developers and what developers want.
I think that
there's almost always a niche you can carve out for yourself. So that's really cool.**


And today developers are not that niche even.
It's a very big community in a very big audience.


**Yeah, true, true. Yeah.
This is going to be the simple question: how does Daily.dev make money?
How do you how do you monetize your traffic and audience.**


So obviously we we run ads. This is exactly the reason we're doing this interview.
But for us we knew from the first moment that this product should be free.
We don't like the paywall thing of content,

So we have to figure out a different way
to make money and make this project sustainable.
So we saw advertisements as a potential monetization channel,
which for now works great.


**Yeah, that's that's really cool.
You know, Read the Docs had a similar issue with sustainability early in our history,
and ads really made sense for us as well.
It sort of grows as your audience grows,
typically as your audience is growing your server costs
are growing and all sorts of things are growing.
So having something that that scales with that is good rather than
things that don't like user donations sometimes
don't scale with the size of the project.
Sometimes they do, sometimes they scale in weird ways.**

**Now, one of the interesting questions and part of the reason
why I think it's really interesting to talk to you
from like the EthicalAds business perspective is you show
a mix of EthicalAds and ads from Carbon,
another developer focused ad network.
Why did you go that route instead of sticking with a single ad network?**


I think the same reason as a network
looks for many publishers and many advertisers you don't want
to be locked to one single network,
that can theoretically do whatever they want with you, right?
Because I'm tied, I'm bound to this one network.
Now if if the prices go up, I have nothing to do with it.
If something bad happens and suddenly there have no advertisers there,
again in this situation I can't do anything.
Where if I try to work with several networks, then I reduce my risk as a business
and get a more stable monetization channel.

We also for some clients do direct deals if they ask us for something very custom.
So for Daily.dev, we actually have three ways to to sell ads.
So it's through Carbon, through Ethical and through direct deals.
We also believe that, you know, competition is very good for everyone.


**Yeah, good.
We are happy to compete with Carbon as far as we compete.
We're both sort of tiny when you compare us with say something like Google.**

**Now in the past you used CodeFund.
Do you want to talk a little bit about that?
What happened to CodeFund?
I think Eric Barry who was sort of the founder of Code Fund, he probably talked to you a lot,
I talked to Eric a lot too. How did you like working with CodeFund?**



Eric Berry is still a very good friend even though you know we went our
separate ways in some way after he had to close CodeFund.
But I think CodeFund is also some of the reason we are doing this mix [with Carbon and EthicalAds] after
we experienced the shutdown of the network that we work with,
we saw the impact on our revenue, so we knew we had to tackle it in some way.

But the experience with CodeFund was pretty great,
The people behind it and what they did was truly amazing.
Unfortunately things have turned out the way they turned,
but for us it was a real joy.



**Yeah.
Eric Berry was fantastic when he was working on CodeFund.
I mean, he's still fantastic today.
I still talk to Eric from time to time. I count him as a friend.
The privacy preserving ad space
is pretty small and it was sad for Eric to leave that space.
But at the same time, very good for us as that sort of helped us launch our network.**

**Notably you don't have Google ads in the mix,
Were you just are you just happy enough with the existing mix of two
or three if you count your own direct sales or was there a particular reason you didn't want Google ads?**



Actually there was a particular reason we don't want advertisements that
don't have to do anything with developers to be on our feed.
For example, I don't want to see Nike shoes on our feed.
Not that I have anything against Nike shoes, but it's just not a tool for developers.

I want our community members to feel feel at home and don't feel someone is trying to sell to them.
Whenever I get a chance to talk to someone who uses this Daily.dev,
they always mention that they don't even know that it's ads on there.
It's very native to their experience.
You obviously know because you sell the ads,
but you can see tools like MongoDB, Slack, CircleCI all of those companies and services that developers look for.
Whereas in GoogleAds,
you can get something based on your recent Google search,
so it really doesn't fit our audience?



**Yeah, I completely understand. That's that's feedback that we do get.
You're not the first person to give me that feedback.
In fact on Read the Docs, we thought something similar.
We didn't want to show ads based on your past Google
searches or based on retargeted traffic or something like that,
even though as somebody who sort of sells advertising for a living,
I know that those work.**

**I know that those work decently well for advertisers, but it can sort of take you out of the moment.
If you're reading a very tech heavy site or something like that and then suddenly you get an ad
for Nike shoes because you bought shoes a week ago that can sort of take you out of it.**



Yeah, we also prefer --
so someone coined the term context aware ads --
I think where we put the the ad based on the content you see,
not necessarily the content you read [previously].
So, although right now we are doing kind of a mix between the two,
we want to we want to slowly shift to context aware,
which has obviously less tracking and less everything that has to
do with privacy.
If you read a web development article,
all I have to do is target based on the article which is about web development,
I don't need to know anything about you,
which immediately removes all the privacy concerns out of the equation.



**You're basically pitching my business,
This is fantastic.
That's sort of one of the things that we really
specialize in is having really targeting ads to content.
Obviously we still have some big advertisers who buy everything developer related.
But we have advertisers who just want to buy
maybe back end web development or advertisers who just
want to buy Blockchain or advertisers who just want
to buy like data science or something like that.
We definitely believe in sort of like context targeted ads
over behavioral targeted or past action targeted ads.**

**It's interesting to hear you talk about that because normally
that's sort of like on the ad networks problem.
But I guess if you're selling your own ads some of the time that that becomes [your problem].
You're going to have advertisers say, "hey, I want to buy Daily.dev,
but just this niche, not all developers".**



We are a general purpose tool for developers.
It's not like we are a data science tool.
If we were a data science tool or part of the data science community,
I want to show only data science ads.
In our case, every user has different preferences and
is looking for something different.
So although you own the network and you sell the ads,
I still need to be able to indicate to you as a network what kind of
ad I need in this case because we are more flexible than just the usual [publisher].



**Yeah.
You are you you definitely delve a little deeper
into that than than most of our publishers.
That's for sure.
But that's also what makes it kind of interesting to talk to you about this.
So that that's really cool.**

**Have you had an advertiser reach out to you and ask you specifically "I want this niche".
Is that a common occurrence or has that happened a few times or tell me about that.**



This is especially the case when they reach out to us out for direct deals.
Otherwise we direct them to you or to Carbon depending on the customer,
because closing a direct deal for us is a lot of overhead.
So sometimes we prefer to pay the rev share and just
direct the client to you.



**Sure. I understand.
It does come down to it.
When you're building a site right?
If you can handle that relationship efficiently yourself,
handle your own sponsorships or your own deals,
you're gonna make more money than you would
with handing it off to ads, but it also is a distraction.
So it is sort of a trade off.
I think there is sort of a threshold sometimes where sites get big enough,
where they're big enough to handle some of their own deals.
That's probably about where you are.**

**Some sites are just too small for that.
There's just no way that they could handle the overhead of a deal like that.
That's interesting.
You're sort of talking exactly to sort of like the life cycle.
As publishers get big.
Once the publisher is enormous,
they don't need somebody like us or even somebody like Carbon.
Yeah, there's definitely sort of a mix in this size.**


I think the journey is still very long until we just this point.


**Sure. Us too.
What has the revenue from advertising sort of enabled you to do for Daily.dev?**



It enabled us to go full on on this project without
risking our personal life in a way because we were able to get a decent salary
at the time we started.
It enables us now to hire new team
members and to be able to build the product much faster.
You touched it at first, but having the ads really enables us to focus on growth
rather than monetization because it grows end by end.
So if you grow the community,
the monetization channels will grow as well and we don't have to think about churn
and conversion rates and stuff like this.
We can really focus on delivering great value to the users and just increase the awareness to the product.



**Cool. Yeah, that's fantastic.
What are some new features that are coming for Daily.dev?
If you could talk about them? I don't want spoilers if you don't want to spoil it.**



We're pretty open about the things we build and we have also the change log
that we keep pumping with news like almost every week.
So this is obviously a great place to check if you want to see what we released before.
But anyway, what's upcoming next is we are planning a revamp of our layout.
The grid will remain the same,
but you will see a new sidebar with tons of new options for navigation and quick links and everything you need.
So the user interface is going to change pretty drastically.
And we're also looking for ways to
increase the communication between different users.
We're thinking about letting the community publish their own [content].
by submitting like HackerNews or connecting with each others in a way of two.
So 2022 will probably be around community and networking with other developers on the platform.



**That's awesome.
Hopefully 2022 is a big year.
It's coming up. Every time I say that I sort of scare myself a little bit.
I know it's like just two weeks away**

**I guess we're recording this in December,
although it probably won't go live until January, just a meta discussion,
breaking down that third wall.
Before I let you go,
is there is there anything else you want to add,
anything about EthicalAds, anything not add related. Really anything.
Do you want to give a shout out to anybody?**


Looking at everything that's going on right now with the developers landscape,
this is a great time to be a developer.
Everyone is interested in developer tools and making the life of developers
much easier and simpler.
I really appreciate the fact that
I have the chance to serve such a great community and I hope I will
keep doing it for the upcoming years and
I'm so grateful to have great partners like you.



**Thank you very much. You know, I totally agree with you.
It's a great time to build a product.
That that's exactly what we're doing. That's exactly what you're doing.
It's fantastic.
It's probably the best time in history to create something new.
So you know that it's a great time to be alive I suppose.**



Yeah, it's super easy to create products this day.
You almost need to think only about business logic.



**Yeah. With all the services out there.
Basically every time I think about Stripe, I'm like, "oh man Stripe's magical".
How could I run a business without Stripe.
There's a Stripe for everything though
like there's a different product for
whatever it is, whatever it is you need to do.
There's something to help you build that.
So yeah, it's truly a great time to be a developer.
It's such like a great positive outlook. I love it.**

**Thanks a lot Ido for for doing this interview and taking the
time out of your day to talk with me
and answer these questions and everything like that.
I really appreciate it.**


Thank you David.
