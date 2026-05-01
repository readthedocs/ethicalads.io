# EthicalAds Marketing Audit — Publisher Report

**Audience:** EthicalAds cofounders + advisor. Focused entirely on the publisher side of the marketplace.

---

## Executive summary

The publisher hub does most of the publisher pitch correctly: invite-only, no tracking, no cookie banner, talk to a human, real customers (Flask, ESLint, daily.dev). What it under-claims is the *economic* decision. Publishers don't choose us because of vision; they choose us because over a year, they earn more, get banned less, and don't have to apologize for the ads. That argument is not on the page in any form a prospective publisher can act on.

The repositioning move is *describing the financial and operational publisher experience explicitly, with numbers, and treating the open-source ad server and the Read the Docs origin as the trust anchors for that economic claim*.

---

## Who's actually applying — and what they're each evaluating

The "publisher" the marketing site addresses is generic. The real prospects fragment into 5 personas, each with different decision drivers:

1. **OSS maintainers monetizing docs** (Flask, ESLint, daily.dev, Read the Docs-tier). Want sustainability without alienating contributors. Compare us to GitHub Sponsors, Open Collective, donation drives, "ask the foundation."
2. **Indie tech-bloggers earning ~$300/year from AdSense.** Want to 5–10× revenue without ruining the site. Compare us to AdSense, Substack paid posts, BuyMeACoffee, Patreon.
3. **Tutorial / educational / course-landing sites.** Want a steady revenue stream that doesn't compete with their funnel. Compare us to AdSense, lead magnets, affiliate links.
4. **Developer-tool community sites and forums.** Want passive monetization on community pages without the moderation overhead of direct deals. Compare us to AdSense, Carbon, sponsor-of-the-week models.
5. **The "I refuse to run ads" cohort.** Largest untapped market by far. OSS maintainers, indie tech writers, and dev community admins who have rejected ads on principle — usually because they've seen what AdSense does to a site. They are the prospects most likely to say yes once shown what *our* ads look like.

Today the publisher hub serves persona 1 well (logo wall is exactly Flask/ESLint/daily.dev) and the other four poorly. There is no smaller-publisher case study, no comparison to GitHub Sponsors / Open Collective for OSS maintainers, no "before/after AdSense earnings" comparison for persona 2, and no answer at all to the principled objector in persona 5.

---

## What we offer publishers that no competitor combines

Each item below can be matched in isolation; the combination cannot.

- **70% revenue share.** Industry-leading. Carbon is reportedly ~50%; AdSense is ~68% for display. We pay materially more on a per-impression basis.
- **$50 minimum payout, automatic, multi-rail (PayPal, Open Collective, GitHub Sponsors, Stripe).** AdSense minimum is $100 and net-30+. Carbon requires you to *request* a payout. Our default is automatic and lower-friction. Open Collective and GitHub Sponsors as payout rails are uniquely OSS-aligned — funds can flow directly into a project's treasury.
- **Open-source ad server.** `github.com/readthedocs/ethical-ad-server` is publicly auditable. No ad network in our space publishes their server. For a publisher who doesn't fully trust ad networks (which is most of them), the ability to *read the code that runs ads on their site* is decisive.
- **No third-party scripts, ever.** Carbon's privacy policy admits some advertiser creative loads third-party trackers. Ours forbids. Publishers using us never need a cookie banner, never trigger uBlock Origin's privacy warnings, never have to explain to readers why a tracker showed up on their docs page.
- **One unobtrusive ad per page.** Publishers control placement. No reflow, no autoplay, no interstitials. The 2024 minimalist-ads blog post argues this directly: *"For a site built on repeat visitors, bad ads sacrifice the long-term viability for short-term revenue."* That's the whole publisher pitch in one sentence.
- **Real human review, no AdSense-style auto-bans.** AdSense bans on traffic spikes, on policy edge cases, on no notice. Our Publisher Policy promises 7 days notice (where possible) and a real conversation. For a publisher whose site is their livelihood, ban-risk is a meaningful financial liability we materially reduce.
- **Read the Docs provenance.** RTD hosts a meaningful portion of OSS docs traffic. The brand carries credibility no Carbon competitor can fake. We are *built by maintainers, for maintainers*, and the founders publicly identify as such.
- **Acceptable Ads certified.** Our ads still render in browsers running uBlock Origin / ABP. For a site whose audience blocks ads at high rates (devs especially), this directly affects yield.
- **Community Ads program** — free placements for OSS / non-profit conferences. Publishers can opt their inventory into supporting causes when paid demand is short. Aligns with publisher values.

---

## Competitive positioning — sharper than the current hub

- **Google AdSense.** Default for unsophisticated dev publishers. The pitch isn't "we're better than Google" — it's "AdSense banned a dev blog yesterday, and the publisher had no recourse." Target the search funnel for `"adsense banned my dev blog"`, `"adsense alternatives for python developers"`, `"adsense low CPM developer blog"`. We rank for none of these today.
- **Carbon Ads / BSA.** Direct peer. We win on revenue share (70 vs ~50), payout automation (auto vs request), no third-party scripts (we forbid; they admit), and the open-source server (uniquely ours). The vs-carbon comparison page already lays this out — it's footer-only and should be promoted.
- **GitHub Sponsors / Open Collective / Patreon / BuyMeACoffee.** Donation-as-funding. Compatible, not competing. We can run *alongside* these to add a passive revenue stream without compromising the donation pitch. Position as: *"Sponsorships fund big initiatives. EthicalAds funds the mortgage."*
- **"I refuse to run ads."** The most important competitor for persona 5. The pitch isn't "ads aren't bad" — it's "**our** ads aren't what you're rejecting, and the Read the Docs team built them after Read the Docs faced exactly your decision."

---

## What's wrong with the current publisher hub specifically

1. **Hero doesn't lead with the financial argument.** The H1 is *"Developers: join the ad network without tracking."* It's good, but a publisher's actual question is *"how much will I make and how hard is it?"*
2. **70% revenue share is buried in the FAQ.** The most differentiated economic claim we have is not on the publisher hub at all. Carbon's ~50% is the comparable; not knowing this is a missed-conversion event for every visitor.
3. **The publisher calculator is buried.** It exists at `/publishers/calculator/` and is footer-only. A prospective publisher's first question should be answered with one click from the hero.
4. **Logo wall is all big brands.** Flask, ESLint, daily.dev are all top-of-the-network. An indie blogger on the page sees these and thinks "this isn't for me." We need at least one indie or smaller-publisher case study that makes "wait, my 50K-pageview Python blog can use this" instantly clear.
5. **Open-source ad server is a sentence in the FAQ.** This is the single most uncopyable trust anchor we have. It should be a hero block: *"Audit our ad server before you integrate it."* Today, no publisher knows this is on offer.
6. **No comparison to GitHub Sponsors / Open Collective.** OSS maintainers in persona 1 default to those models. Without a comparison, we lose the "do both" framing.
7. **The "real human review, no auto-bans" angle is invisible.** AdSense ban-risk is a real and recurring fear. We materially reduce it. We don't say so.
8. **No "what your site needs to qualify" content.** Invite-only is good positioning, but a prospective publisher reading the hub can't tell whether their site is in scope. Conversion suffers.
9. **The Read the Docs origin story is on the About page.** It's the strongest publisher-trust asset we have. A line like *"Built by maintainers, for maintainers — Read the Docs needed this and so did you"* belongs on the publisher hero.
10. **2-day response SLA is slower than advertiser side (1 day) without explanation.** Either align them or explain why publisher review is more thorough — silence reads as "we care less about you."

---

## Prioritized next steps for publisher growth

### Quick wins (1 week)
- Add 70% revenue share to the publisher hero. The fact alone is a conversion event for anyone comparing to Carbon.
- Surface the publisher calculator with a hero CTA: *"Estimate your monthly earnings."*
- Add a "Built by Read the Docs" credibility line to the hero. Currently relegated to the footer.

### High-leverage builds (2–6 weeks)
- **`/publisher-trust/` page** that operationalizes the open-source claim. Architecture diagram, link to the GitHub repo, "here's how to verify we don't load anything we shouldn't on your site." This is uncopyable — Carbon and Google can't offer it. Should be a publisher-onboarding step, not a footnote.
- **Indie publisher case study.** Find one: a Python blog, a Go tutorial site, a niche framework's docs. Surface monthly earnings, integration time, "would you switch back to AdSense?" answer.
- **AdSense-comparison landing page.** SEO-targeted at the search intent above. *"AdSense banned your dev blog. Here's what to do next."*
- **GitHub Sponsors / Open Collective comparison page.** Position as compatible, not competitive. Frame: passive ad revenue funds month-to-month; sponsorship funds big initiatives.
- **Persona-specific publisher-hub variants.** A clean split between *"OSS project maintainer"* and *"indie blogger"* messaging. Today both get the same generic page.

### Strategic bets
- **A "Powered by EthicalAds" badge program** with a referral kicker. Every publisher embedding the badge becomes a top-of-funnel acquisition channel. Currently nothing exists.
- **Monthly publisher transparency report.** A public list of paid-out amounts (anonymized or opt-in), top-earning niches, average $/1K pageviews by topic. Builds the case for publishers on the fence.
- **A "join the network" application that gives instant feedback.** Today the form is opaque and the response is 2 days. A pre-application checklist (traffic, audience composition, content type) would qualify prospects in advance and reduce wasted review cycles.
- **Direct outreach to the "I refuse to run ads" cohort.** Identify high-quality OSS docs sites that don't monetize today, send a personalized note about the EthicalAds approach, link to the open-source server. Low-volume, high-conversion outbound.

---

## Bottom line

The publisher hub is closer to its mission than the advertiser hub is — it has a clearer audience, better case studies, and a genuine value-fit story. What it lacks is the *economic and operational* layer. Publishers are rational economic actors evaluating a long-term partnership: how much, how easily, with what ban-risk, with what brand-alignment. We have decisive answers on every one of those questions and the hub today communicates almost none of them. Adding the rev-share number, the calculator, the open-source-trust page, an indie case study, and a comparison to AdSense and to GitHub Sponsors would close most of the gap.
