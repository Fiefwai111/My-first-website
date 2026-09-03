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
| `assets/images/cert-ecoli.jpg` | E. coli lab test report (&lt; 3, tested monthly) | Portrait, e.g. 900×1200px |
| `assets/images/cert-b12.jpg` | Vitamin B12 lab test report (2.5x market) | Portrait, e.g. 900×1200px |

A clear photo or scan of each document works fine — a phone photo on a flat surface is enough for launch; a proper scan can replace it later with zero code changes.

Japan/US export standard are mentioned on the same page as standards met, but don't have a dedicated document placeholder yet — tell me the certifying body/document name whenever you have it and I'll add image slots for those too.

## Homepage hero carousel (`index.html`)

The homepage hero photo is now a 5-photo carousel — it auto-advances every ~4.5s, and can also be swiped/dragged or controlled with the arrow buttons and dots at any time. Frame (aspect ratio 4:5, portrait):

| File | Suggested content | Suggested size |
|---|---|---|
| `assets/images/hero-farm.jpg` | Farm photo 1 | 1080×1350px (portrait 4:5) |
| `assets/images/hero-2.jpg` | Farm photo 2 | 1080×1350px (portrait 4:5) |
| `assets/images/hero-3.jpg` | Farm photo 3 | 1080×1350px (portrait 4:5) |
| `assets/images/hero-4.jpg` | Farm photo 4 | 1080×1350px (portrait 4:5) |
| `assets/images/hero-5.jpg` | Farm photo 5 | 1080×1350px (portrait 4:5) |

## Homepage product cards (`index.html`)

| File | Used for | Suggested size |
|---|---|---|
| `assets/images/product-dried.jpg` | Dried Wolffia (Fullgreen) product card | 800×800px (square) |
| `assets/images/product-fresh.jpg` | Fresh Wolffia product card | 800×800px (square) |
| `assets/images/product-jelly.jpg` | TA-TO Wolffia Jelly product card | 800×800px (square) |
| `assets/images/product-jelly-lifestyle.jpg` | B2C jelly lifestyle photo | 1000×750px |

## Fullgreen dried Wolffia photo carousel (`products.html`, Dried section)

The Dried Wolffia product detail section has a swipeable 5-photo gallery (same arrows + dots as the Jelly one). Frame (portrait, aspect ratio 4:5, like a vertical Instagram post — same as the Fresh Wolffia gallery below):

| File | Suggested content | Suggested size |
|---|---|---|
| `assets/images/product-dried-1.jpg` | Box + sachet product shot | 1080×1350px (portrait 4:5) |
| `assets/images/product-dried-2.jpg` | Powder texture close-up | 1080×1350px (portrait 4:5) |
| `assets/images/product-dried-3.jpg` | Mixed into a drink / smoothie | 1080×1350px (portrait 4:5) |
| `assets/images/product-dried-4.jpg` | Sachet in hand | 1080×1350px (portrait 4:5) |
| `assets/images/product-dried-5.jpg` | Additional lifestyle photo | 1080×1350px (portrait 4:5) |

## Fresh Wolffia photo carousel (`products.html`, Fresh section)

The Fresh Wolffia product detail section has a swipeable 5-photo gallery. Frame (portrait, aspect ratio 4:5, like a vertical Instagram post):

| File | Suggested content | Suggested size |
|---|---|---|
| `assets/images/product-fresh.jpg` | Fresh Wolffia photo 1 | 1080×1350px (portrait 4:5) |
| `assets/images/product-fresh-2.jpg` | Fresh Wolffia photo 2 | 1080×1350px (portrait 4:5) |
| `assets/images/product-fresh-3.jpg` | Fresh Wolffia photo 3 | 1080×1350px (portrait 4:5) |
| `assets/images/product-fresh-4.jpg` | Fresh Wolffia photo 4 | 1080×1350px (portrait 4:5) |
| `assets/images/product-fresh-5.jpg` | Fresh Wolffia photo 5 | 1080×1350px (portrait 4:5) |

## TA-TO Jelly photo carousel (`products.html`, Jelly section)

The Jelly product detail section has a swipeable 6-photo gallery (arrows + dots, works with touch swipe too). Each slot below is independent — you can reuse the marketing graphics you already have.

| File | Suggested content | Suggested size |
|---|---|---|
| `assets/images/product-jelly-1.jpg` | Hero product shot (box + jelly stick) | 1000×1000px (square) |
| `assets/images/product-jelly-2.jpg` | Lab-tested standards graphic (FQA LAB / ALS logos) | 1000×1000px (square) |
| `assets/images/product-jelly-3.jpg` | "Best time to eat" lifestyle collage | 1000×1000px (square) |
| `assets/images/product-jelly-4.jpg` | Texture close-up (dried Wolffia flecks) | 1000×1000px (square) |
| `assets/images/product-jelly-5.jpg` | Key ingredients graphic | 1000×1000px (square) |
| `assets/images/product-jelly-6.jpg` | Additional product photo | 1000×1000px (square) |
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
