# EthicalAds Marketing Audit — Advertiser Report

**Audience:** EthicalAds cofounders + advisor. Focused entirely on the advertiser side of the marketplace.

---

## Executive summary

We sell something the advertiser hub (`/advertisers/`) does not currently advertise: a curated, 100%-developer audience on a network where the buyer can preview the publisher list before purchase, lock in a posted CPM, and run without DPA negotiation, cookie banners, or third-party scripts. Carbon, Google, and the newer privacy-contextual networks each lack at least three of those. The homepage and advertiser hub instead lead with "AI-powered contextual targeting," a commodity feature label that puts us in a fight against bigger networks on a metric we can't win.

The biggest single repositioning move is *describing what advertisers actually buy from us, in advertiser-economic terms*, instead of describing the technology that powers it.

---

## Who's actually buying — and what they're each evaluating

The "advertiser" the marketing site addresses is generic. The real buyers fragment into 5 personas, each with different decision drivers:

1. **Dev-tool marketers at Series A–C SaaS** (APIs, databases, observability, auth, CI/CD). $5K–50K/quarter. Compare us to LinkedIn, Reddit Ads, newsletter sponsorships, paid podcasts. They want: CPL, MQL quality, ICP coverage.
2. **Demand-gen leads at developer-platform companies** (Vercel/Supabase/Linear tier). $25K–250K/quarter. Compare us to Google Search, paid newsletters, conference sponsorships. They want: signups, expansion across engineering orgs.
3. **DevRel-adjacent marketers at open-source-commercial companies** (Tidelift, Sentry-tier). Cares about: community sentiment, "doesn't feel gross," reach without alienating maintainers. Compares us to GitHub Sponsors-as-marketing and conference sponsorships.
4. **Hiring/recruiting brands.** Want applications per dollar and candidate quality. Compare us to LinkedIn Recruiter, dev-job-boards, Greenhouse partner network.
5. **Privacy-blocked enterprise marketers.** Their legal team has said no to Google for EU traffic, or their security team blocks placements that load third-party scripts. They want: a network they can show to legal without a 6-week negotiation.

Today the advertiser hub serves persona 1 reasonably and the other four poorly. The audience grid lists topics (frontend/backend/DevOps/AI/security) but not the *kind of campaign* each topic supports. Personas 4 and 5 are unaddressed despite both being strong fits.

---

## What we offer that no competitor combines

Each item below can be matched in isolation; the combination cannot.

- **100% developer audience.** Google generic placements convert at developer rates of <1%. Carbon is comparable to us in audience purity but smaller. Translated to CPM math: AdSense at $0.50 CPM × ~1% dev intent = $50 effective dev CPM. We are $5 effective dev CPM. We are *cheaper per developer reached*, which is the advertiser-economic framing.
- **Pre-disclosed publisher list.** Carbon doesn't show you. Google can't (RTB). We publish `/publishers/list/` and let you cherry-pick. This is a different *sales motion*, not a feature: it changes buyer psychology from "trust me" to "you choose." Almost no advertiser visiting our site today knows this is on offer.
- **Posted CPMs by topic and region, locked for the campaign.** Carbon's pricing is application-only. Google's is auction-derived. We publish the matrix.
- **GDPR/CCPA compliant by default — no DPA, no cookie banner, no DPIA.** This is a *buyer-unblock*, not a feature. There is a real and growing cohort of advertisers whose own legal/privacy teams have rejected Google for EU traffic. We need none of that paperwork.
- **ML niche targeting via landing-page similarity.** This is what the 2025 niche-targeting-updates blog post describes — embeddings on landing pages, centroids, ~hundreds of niches. It is materially more sophisticated than Carbon's topic-bucket targeting. The internal positioning is right: *"the targeting power of search ads with display economics"*. That's a sales line. It's currently nowhere on the advertiser hub.
- **Acceptable Ads certified.** Devs run uBlock at high rates (estimates put it 50%+); ABP/ublock allowlist means our impressions actually render. Carbon has parity here but doesn't lead with it.
- **No conversion pixels — by design.** This is a constraint advertisers accept. The honest pitch is: *"you measure conversions in your own analytics via UTMs; we don't load anything on your landing page."* For brands whose own marketing identity is privacy-aligned (Sentry, Tidelift, Mozilla), this is a brand-fit asset, not a limitation.
- **Real campaign-manager support.** Carbon comparable; Google not. Underused in our pitch.

---

## Market context and competitor sizing

Concrete numbers that ground the rest of this report. Sources are linked inline; full reference list at the end.

- **The contextual advertising market reached ~$234B in 2025** with a 10.5% CAGR ([source](https://www.monetizemore.com/blog/best-contextual-advertising-networks/)). The category we play in is large, growing, and — as third-party cookies are phased out across browsers — increasingly the *only* viable category for non-search display.
- **52% of developers use ad blockers on desktop**, against ~32% globally ([source](https://backlinko.com/ad-blockers-users)). uBlock Origin alone has ~39M active users worldwide and ~38% market share among ad-blocker extensions. Any developer-focused network without an Acceptable Ads bypass loses *half its impressions* on the dev audience by default. We have the bypass; this is a real moat.
- **CodeFund — the most direct precedent for our positioning — shut down July 2020** ([HN discussion](https://news.ycombinator.com/item?id=23696197)). Same pitch as us: open-source, ethical, dev-focused. Their closure accelerated our growth and we [inherited their publishers](https://www.ethicalads.io/blog/2022/08/going-v10-the-backstory-and-future-of-our-ad-network/). The market signal: this niche tolerates one credible operator at a time. Today, that's us.
- **Carbon Ads operates ~350+ publishers** with audience composition reportedly 64% backend / 57% frontend / 27% mobile / 15% PMs ([Carbon's own stats](https://www.carbonads.net/)). EthicalAds operates ~195 publishers (Q1 2026) — roughly half Carbon's network size, but our audience is *materially purer* (we are dev-only; Carbon explicitly serves designers via Dribbble and product managers).
- **Privacy-contextual enterprise networks** are scaling fast but not yet in our vertical. Seedtag (founded 2014, Spanish origin) is PE-funded, launched in the US in 2022, and is now [expanding into CTV](https://www.adexchanger.com/tv/seedtag-cuts-its-teeth-on-ctv-with-contextual-targeting/). [Peer39](https://www.cbinsights.com/company/peer39) (founded 2006) has raised ~$30M. GumGum is global. None are dev-vertical *yet* — but they will be within ~18 months, and they'll have better infrastructure than us.
- **Newsletter sponsorships** are the encroaching alternative for advertiser budget. [TLDR](https://advertise.tldr.tech/) (~275K subs) charges $3,500–$15,000 per issue (~$12 CPM at the lower tier; meaningfully higher than our developer CPMs). Bytes.dev has ~216K subs; JavaScript Weekly is comparable. These are budgets *not* coming to display networks today.
- **[Read the Docs](https://about.readthedocs.com/company/) — our parent — serves >55M doc pages/month across 80,000+ open-source projects.** That's the institutional asset behind "built by maintainers, for maintainers" and the reason our invite-only network has the trust it does.

---

## Competitive positioning — sharper than the current hub

- **Google AdSense / Ad Manager.** Massive reach (Google's ad business is ~$300B+ annually), but dev intent is buried in noise. Pitch: *"You're paying Google to show your dev-tool ads on cooking recipe sites."* The math holds; the framing converts. AdSense bans for invalid traffic, AI-generated content, copyright edge cases, and policy violations are an active publisher-pain narrative — relevant for the publisher pitch but indirectly for us as advertisers want to be sure their ads run on stable, vetted publishers (which they don't with Google).
- **Carbon Ads / BSA.** Closest peer (~350 sites vs our ~195). We win on: pre-disclosed publisher list (Carbon won't show), posted pricing (Carbon's is application-only), ML landing-page-similarity targeting (Carbon's is topic-bucket), and forbidden third-party resources in advertiser creative (Carbon's policy admits some creative loads trackers). We lose on: scale, brand recognition, and audience breadth (Carbon serves designers + PMs + devs; we serve only devs — that's a feature for some buyers, a bug for others).
- **Direct sponsorships (newsletters, podcasts, YouTube).** Where dev-marketing budget is increasingly flowing. TLDR's $12 CPM is *higher* than our developer CPM, so the math here is straightforward: we deliver comparable dev-targeted impression volume across many publishers at a lower per-impression cost, with no relationship-management overhead. Position as the *complement* to direct sponsorships, not the alternative.
- **Privacy-contextual enterprise networks (Seedtag, GumGum, Peer39).** Generic-vertical today; moving down-market over the next 18 months. They will arrive with better infrastructure than us. Defense: dev-vertical curation and Read the Docs provenance they can't buy off a list.

---

## What's wrong with the current advertiser hub specifically

1. **Hero copy serves no specific persona.** "Reach Developers With The Perfect Message" is generic.
2. **Audience grid lists topics but not campaign types.** A SaaS marketer with a Python tool can't quickly tell "this is for me, here's the page."
3. **Testimonials carousel has 3 quotes without numbers.** Catchy/SuperOrbital/Tidelift quotes are vibes-only ("such a pleasure to work with"). The Tidelift quote is the only one that mentions CPL — and it's vague.
4. **Pricing transparency is good but the *why* is missing.** Buyers from AdSense will sticker-shock at $5–7 CPM. The dev-CPM math (above) needs to live next to the pricing table.
5. **Pre-disclosed publisher list is buried.** It's our most decisive differentiator vs Carbon and is footer-only. Should be a hero claim with a CTA: *"Pick your placements before you buy."*
6. **Niche targeting is mentioned but never demonstrated.** The similarity-pages tool exists at `/advertisers/similar-pages/` but isn't promoted from the advertiser hub. Showing it inline is a 2-week build that materially upgrades the page.
7. **No vertical case studies.** Hiring (Triplebyte) and devtool (Tidelift) and OSS-commercial (Catchy) cases exist as stubs but lack named numbers. Can't convert persona 4 (hiring) without a hiring case study with cost-per-applicant.
8. **No "what happens after I submit the form."** Turnaround, first-campaign timeline, who reviews creative, what optimization looks like — all unstated. Buyers want to know.
9. **Compliance angle is mentioned but never assembled.** No downloadable compliance one-pager. EU advertisers blocked by their privacy team need something they can attach to a procurement ticket.
10. **Conversion-tracking constraint isn't sold honestly.** It's a feature for the right buyer; current FAQ treatment reads defensive.

---

## Prioritized next steps for advertiser growth

### Quick wins (1 week)
- Add the dev-CPM math to the pricing page: "AdSense $0.50 CPM × <1% dev intent = $50/dev. EthicalAds $5 CPM × 100% dev = $5/dev."
- Surface the pre-disclosed publisher list as a hero CTA on `/advertisers/`. Headline: *"Pick your placements before you buy."*
- Add the 2022 content-as-intent CTR chart to the advertiser hub. It's the strongest advertiser-facing argument we own and is currently buried in a blog post.

### High-leverage builds (2–6 weeks)
- **Vertical landing pages** — `/advertisers/saas/`, `/advertisers/hiring/`, `/advertisers/devtool-launch/`, `/advertisers/oss-commercial/`. Each ~800 words, persona-specific copy, persona-specific case study, persona-specific CTA.
- **Compliance one-pager (PDF).** No DPA, no cookie banner, no third-party scripts, data retention policy, sub-processor list. Make it forwardable to legal teams.
- **3 case studies with named numbers.** Triplebyte (hiring), Tidelift (OSS-commercial), one SaaS or devtool launch. Each with: campaign goal, budget, CPL, conversion rate, named contact.
- **"What to expect" page or modal** triggered after the inbound form. Turnaround SLA, first-campaign checklist, creative-help offer.
- **Promote the niche-targeting demo** from the advertiser hub. It's our most unique technical capability.

### Strategic bets
- **An "advertise-to-developers" SEO destination.** Not the homepage — a separate page that ranks for `"how to advertise to developers"`, `"developer advertising"`, `"reach software engineers"`. The category is uncontested and we have the most content rights to it.
- **Quarterly advertiser benchmark report.** "What ads work on developer sites in Q2 2026" — anonymized data on creative formats, copy length, CTR ranges by topic. Gives the advertiser-marketing team a destination asset and creates a content moat against Carbon.
- **Self-serve campaign demo.** A 5-minute walkthrough video on the advertiser hub. Most personas above will not book a sales call until they've seen what they're buying.

---

## Bottom line

The advertiser-side moat is real and decisive against Carbon, against Google, and against the newer privacy-contextual entrants. The marketing under-claims it. Five things — pre-disclosed placements, dev-CPM math, the niche-targeting demo, vertical-specific landing pages, and case studies with named numbers — would close most of the gap. The 2022 content-as-intent post and the 2024 niche-targeting series have already made the intellectual case. The advertiser hub just needs to inherit it.

---

## Sources

**External**

- **Contextual ad market sizing** — [Best Contextual Advertising Networks 2026 (MonetizeMore)](https://www.monetizemore.com/blog/best-contextual-advertising-networks/), citing The Business Research Company's 2025 contextual advertising market report ($234B, 10.5% CAGR).
- **Ad blocker statistics** — [Ad Blocker Usage and Demographic Statistics 2026 (Backlinko)](https://backlinko.com/ad-blockers-users) and [Ad Blocker Usage Statistics 2026 (TechRT)](https://techrt.com/ad-blocker-usage-statistics/) — 52% developer rate, 32% global, uBlock Origin counts.
- **CodeFund shutdown** — [Hacker News discussion (July 2020)](https://news.ycombinator.com/item?id=23696197). EthicalAds inheritance confirmed in [our own backstory post (Aug 2022)](https://www.ethicalads.io/blog/2022/08/going-v10-the-backstory-and-future-of-our-ad-network/).
- **Carbon Ads network size and audience** — [carbonads.net](https://www.carbonads.net/) and [About Carbon Ads](https://www.carbonads.net/about). Publisher CPM range from [Carbon Ads FAQ](https://www.carbonads.net/faq).
- **Seedtag** — [Seedtag Cuts Its Teeth On CTV With Contextual Targeting (AdExchanger)](https://www.adexchanger.com/tv/seedtag-cuts-its-teeth-on-ctv-with-contextual-targeting/) — US launch 2022, PE funding, CTV expansion.
- **Peer39 funding** — [Peer39 profile (CB Insights)](https://www.cbinsights.com/company/peer39) — ~$30M total raised since founding in 2006.
- **TLDR sponsorship pricing** — [advertise.tldr.tech](https://advertise.tldr.tech/) and [Growth In Reverse: TLDR profile](https://growthinreverse.com/tldr/) — subscriber count and CPM tiers.
- **Newsletter sponsorship benchmarks** — [Newsletter Sponsorship Cost (beehiiv)](https://www.beehiiv.com/blog/newsletter-sponsorship-cost) and [developer-newsletters list (jackbridger)](https://github.com/jackbridger/developer-newsletters).
- **Read the Docs scale** — [Read the Docs — About](https://about.readthedocs.com/company/) — 55M doc pages/month, 80,000+ projects, ~100K users.

**Internal**

- **195 publishers, Q1 2026 financials** — most recent EthicalAds quarterly transparency newsletter on the [EthicalAds blog](https://www.ethicalads.io/blog/).
- **Carbon's privacy-policy admission about advertiser creative loading third-party trackers** — cited in our own [vs-carbon-ads comparison page](https://www.ethicalads.io/alternative-to-carbon-ads/).
- **Content-as-intent CTR data** — [Does Content Imply User Intent? (EthicalAds blog, 2022)](https://www.ethicalads.io/blog/2022/11/a-new-approach-to-content-based-targeting-for-advertising/).
