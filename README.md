# Cortland Legacy: The Achievement Journey

**Concept in Development — For Leadership Review**

An interactive concept showcase for a proposed Cortland-wide Badge, Patch & Achievement Program, designed to eventually integrate into the Cortland Companion dashboard as a page under **My Goals › My Legacy Journey**.

> Budget figures ($65 denim, $180 letterman, cohort sizes) are hypothetical planning inputs, not supplier quotes or headcount data.
>
> This is an exploratory concept, not an approved Cortland program. All associates, dates, statuses, and metrics shown are fictional examples. Badge names, qualification standards, patch eligibility, and merchandise designs have not been approved.

## What’s inside

- Landing experience with the Grow / Achieve / Belong pillars
- Digital badges, annual Cortlandian and distinguished patches, and two jacket milestones
- The Cortland Legacy Collection: the five-year Cortlandian Denim and ten-year Cortland Legacy Letterman (front and back mockups)
- Patch placement studio with standardized zones shared by both jackets
- Interactive ten-year journey with four example associates
- Four recognition levels (Legacy, Earned, Distinguished, Exceptional)
- Filterable badge and patch gallery with criteria and previews
- Existing tenured associates: transitional review and Options A, B, and C compared (none selected)
- Budget calculator: jacket costs, cohorts, 1/3/5-year backlog timelines, central vs. community funding
- Companion dashboard preview (“My Legacy Journey”) with both milestone cards
- Leadership decision areas (session-only markers, never saved)
- Program principles

## Project structure

```
index.html              Page markup
css/styles.css          Styles; design tokens at the top (:root)
js/config.js            Badges, earning rules, personas, decisions, patch art paths
js/app.js               Rendering and interactions
assets/patches/         Patch artwork (Years 1–3 are example art, not final)
assets/reference/       Existing Cortland patch art, shown for style reference
```

No build step and no dependencies. The only external request is the Outfit typeface from Google Fonts, with system-font fallbacks.

## Run it locally

Open `index.html` in any modern browser. For a local server instead:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

1. Create a repository and push these files to the `main` branch.
2. In the repository, go to **Settings › Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute or two, the site is live at `https://<your-org-or-user>.github.io/<repo-name>/`.

> If this concept should stay internal, use a private repository. Note that GitHub Pages sites can be public even when the repository is private, depending on your plan; check with your organization before publishing.

## Making changes

| To change… | Edit |
|---|---|
| Badge names, criteria, evidence, tiers | `CONFIG.badges` in `js/config.js` |
| Jacket names, messaging, qualification, fulfillment | `CONFIG.jackets` |
| Example associates in the ten-year journey | `CONFIG.personas` |
| Existing-tenure options | `CONFIG.tenureOptions` |
| Budget defaults and funding table | `CONFIG.budget`, `CONFIG.fundingTable` |
| Leadership decision areas and prompts | `CONFIG.decisions` |
| Principles | `CONFIG.principles` |
| Dashboard example data | `CONFIG.dash` |
| Patch artwork | Add files to `assets/patches/` and list them in `PATCH_ART` |
| Colors, radius, type | Design tokens at the top of `css/styles.css` |

Any service year without an entry in `PATCH_ART` uses the built-in crest placeholder.

## Accessibility

Keyboard-accessible controls with visible focus, light and dark mode, reduced-motion support, and recognition levels distinguished by shape and text rather than color alone.

---

Internal concept for Cortland. Not licensed for external use.
