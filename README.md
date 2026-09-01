# Thai River Caviar — Website

A bilingual (Thai / English) marketing site for Thai River Caviar, an export-grade
Wolffia (ไข่ผำ) farm. Built as a plain static site — no build step, no framework,
no server required.

- **B2B first**: home page, product pages, and quality/certification page are
  built to speak to supplement, cosmetics, and food-manufacturing buyers.
- **B2C second**: a lighter "shop retail" path for the ready-to-eat Wolffia
  jelly, via `contact.html#b2c` and buttons that link out to your existing
  online shop.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page — hero, trust badges, story teaser, products, CTAs |
| `about.html` | Our Story — R&D timeline, cultivation method, video, people |
| `products.html` | Dried / Fresh / Jelly product details |
| `quality.html` | Certifications, B12 data, zero E. coli, closed-system GMP cultivation, export standards |
| `contact.html` | B2B sample/RFQ form + B2C shop link and interest form |

## Editing content

- **Site-wide settings** (brand name, email, LINE link, shop URL, address,
  phone, certification names): edit **`assets/js/site-config.js`**. Every page
  pulls from this one file, so you only edit it once.
- **Page text**: each piece of text sits in an element with `data-th="..."` and
  `data-en="..."` attributes — edit both to keep Thai and English in sync. The
  visible language is switched by the TH/EN button in the header (no page
  reload, no separate URL).
- **Images/video**: see [`ASSETS.md`](./ASSETS.md) for the exact filenames the
  site expects. Drop a file in with the right name and it appears — no code
  changes needed. Until then, a clean placeholder is shown.
- **Design tokens** (colors, fonts, spacing): `assets/css/style.css`, under
  `:root` at the top of the file.

## How the "forms" work (no backend)

The Contact page forms build a `mailto:` link from what the user typed and open
their email client with the message pre-filled, addressed to the email in
`site-config.js`. Nothing is stored anywhere, and there's nothing to host.

If later you want submissions to land in a spreadsheet or inbox automatically
without opening the visitor's email client, swap the form's behavior for a
service like Formspree — happy to wire that up when you're ready.

## Running it locally

No build tools needed. Either:

- Just open `index.html` directly in a browser, or
- Serve it locally so relative paths behave exactly like production:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploying

Any static host works. Two easy free options:

**GitHub Pages**
1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Repo Settings → Pages → Source: deploy from the branch you want (e.g. `main`), folder `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

**Netlify / Vercel**
1. Connect the GitHub repo.
2. Build command: none. Publish directory: `/` (repo root).
3. Deploy — you'll get a live URL immediately, with a custom domain option.

## Still pending (marked as placeholders on the site)

- Real logo file and farm/product photos + video (see `ASSETS.md`)
- Certificate names/issuers and lab report documents (Japan/US export standard, Vegan, B12, GMP, E. coli) — see `ASSETS.md` for the certificate image filenames the site expects
- Retail shop URL (Shopee/Lazada/LINE MyShop/etc.)
- Farm/company address, phone number, company registration number
- Pricing (currently "Request a Quote" for B2B; retail pricing pending)

Send any of the above at any time and the corresponding page updates —
most of it is a one-line change in `assets/js/site-config.js`.
