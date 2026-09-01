# Images & video to add

The site already has slots for all of this media. Nothing needs to change in the
HTML/CSS — just add a file with the **exact name** below into the right folder
(via GitHub's "Add file → Upload files", or a normal push), and it will appear
automatically. Until a file exists, that spot shows a friendly placeholder
instead of a broken image.

## Logo

| File | Where it's used | Status |
|---|---|---|
| `assets/images/logo-mark.png` | Header + footer brand icon | ✅ Added — the real logo, cropped to just the circular mark |
| `assets/images/logo-full.png` | Wide lockup (icon + wordmark) | ✅ Added, not yet used anywhere — available for a larger placement (e.g. hero) if wanted |

## Certificate documents (`quality.html`)

These are the real certificates — 4 confirmed, all pending the actual scanned/photographed document:

| File | Certificate | Suggested size |
|---|---|---|
| `assets/images/cert-vegan.jpg` | 100% Vegan certificate | Portrait, e.g. 900×1200px |
| `assets/images/cert-gmp.jpg` | GMP certificate (closed-system cultivation) | Portrait, e.g. 900×1200px |
| `assets/images/cert-ecoli.jpg` | E. coli lab test report (0 detected) | Portrait, e.g. 900×1200px |
| `assets/images/cert-b12.jpg` | Vitamin B12 lab test report (2.5x market) | Portrait, e.g. 900×1200px |

A clear photo or scan of each document works fine — a phone photo on a flat surface is enough for launch; a proper scan can replace it later with zero code changes.

Japan/US export standard are mentioned on the same page as standards met, but don't have a dedicated document placeholder yet — tell me the certifying body/document name whenever you have it and I'll add image slots for those too.

## Homepage (`index.html`)

| File | Used for | Suggested size |
|---|---|---|
| `assets/images/hero-farm.jpg` | Hero photo of the farm | 1000×1250px (portrait), landscape works too |
| `assets/images/product-dried.jpg` | Dried Wolffia (Fullgreen) product card | 800×800px (square) |
| `assets/images/product-fresh.jpg` | Fresh Wolffia product card | 800×800px (square) |
| `assets/images/product-jelly.jpg` | TA-TO Wolffia Jelly product card | 800×800px (square) |
| `assets/images/product-jelly-lifestyle.jpg` | B2C jelly lifestyle photo | 1000×750px |
| `assets/images/founder.jpg` | Founder/team photo (circular crop) | 400×400px (square) |

## Our Story (`about.html`)

| File | Used for |
|---|---|
| `assets/images/farm-wide.jpg` | Wide shot of the farm (racks/troughs) — also used as video poster |
| `assets/images/farm-people.jpg` | Photo of the farm team at work |
| `assets/video/farm-tour.mp4` | Farm tour video (MP4, H.264 recommended, keep under ~50MB for fast loading) |

## Products (`products.html`)

Reuses `product-dried.jpg`, `product-fresh.jpg`, `product-jelly.jpg` from above —
larger/higher-resolution versions are fine, they'll be cropped to fit.

---

**Uploading tip:** GitHub's web upload only accepts one filename per file, so
rename the file to match the table exactly *before* dragging it in (or rename it
during upload in the commit screen). Once it's committed to the
`claude/quail-egg-farm-website-nss68d` branch, the site rebuilds automatically
and the image appears within about a minute.
