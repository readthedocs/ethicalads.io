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

## Competitive positioning — sharper than the current hub

- **Google AdSense / Ad Manager.** Bigger reach but dev intent buried in noise. Pitch: *"You're paying Google to show your dev-tool ads on cooking recipe sites."* The math holds; the framing converts.
- **Carbon Ads / BSA.** Closest peer. We win on pre-disclosed placements, posted pricing, ML niche targeting, and no third-party-resource leak in advertiser creative (Carbon's privacy policy admits some advertiser creative loads third-party trackers; ours forbids).
- **Direct sponsorships (newsletters, podcasts, YouTube).** Where dev-marketing budget is increasingly flowing. We don't compete on personal-brand fit; we compete on scale and per-impression cost. Bytes / JavaScript Weekly are $2K+ per issue; we deliver comparable impression counts across many publishers at a fraction, with no relationship-management overhead. Position as the *complement* to direct sponsorships, not the alternative.
- **Privacy-contextual enterprise networks (Seedtag, GumGum, Peer39).** Moving down-market. They'll have better infrastructure than us within ~18 months. Defense: dev-vertical depth and curated publisher list they can't buy.

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
