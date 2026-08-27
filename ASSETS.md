# Images & video to add

The site already has slots for all of this media. Nothing needs to change in the
HTML/CSS — just add a file with the **exact name** below into the right folder,
push it to the repo (or upload it there), and it will appear automatically.
Until a file exists, that spot shows a friendly placeholder instead of a broken image.

## Logo

| File | Where it's used | Notes |
|---|---|---|
| `assets/images/logo-mark.svg` | Header + footer brand icon | A placeholder mark is already there. Replace the file with your real logo (SVG preferred, PNG also works if you rename the references in the HTML `<img>` tags, or just save your PNG logo as `logo-mark.svg`... actually PNG won't work with the `.svg` extension — if your logo is a PNG/JPG, tell me and I'll swap the `<img>` tags to `logo-mark.png` instead). |

## Homepage (`index.html`)

| File | Used for | Suggested size |
|---|---|---|
| `assets/images/hero-farm.jpg` | Hero photo of the farm | 1000×1250px (portrait), landscape works too |
| `assets/images/product-dried.jpg` | Dried Wolffia product card | 800×800px (square) |
| `assets/images/product-fresh.jpg` | Fresh Wolffia product card | 800×800px (square) |
| `assets/images/product-jelly.jpg` | Wolffia Jelly product card | 800×800px (square) |
| `assets/images/product-jelly-lifestyle.jpg` | B2C jelly lifestyle photo | 1000×750px |
| `assets/images/founder.jpg` | Founder/team photo (circular crop) | 400×400px (square) |

## Our Story (`about.html`)

| File | Used for |
|---|---|
| `assets/images/farm-wide.jpg` | Wide shot of the farm ponds (also used as video poster) |
| `assets/images/farm-people.jpg` | Photo of the farm team at work |
| `assets/video/farm-tour.mp4` | Farm tour video (MP4, H.264 recommended, keep under ~50MB for fast loading) |

## Products (`products.html`)

Reuses `product-dried.jpg`, `product-fresh.jpg`, `product-jelly.jpg` from above —
larger/higher-resolution versions are fine, they'll be cropped to fit.

## Certifications (optional)

If/when you send certificate PDFs (Halal, export standard, B12 lab report, carbon
footprint report), let me know and I'll add a downloadable "documents" section to
`quality.html` linking to them directly.

---

**A note on the photos already shared in chat:** the logo and product photos
(TA-TO jelly box, purple jelly stick, Fullgreen powder box) you sent earlier in
this conversation could not be automatically saved into the repository — image
attachments in chat aren't written to disk in this environment. Please re-send
them as an upload/push to the repo (or via any file-transfer method that lands
on disk) using the filenames above, and they'll show up on the site immediately.
