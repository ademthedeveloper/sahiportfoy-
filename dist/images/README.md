# 🖼️ Your own logo & photos

Everything visual is centralized in **`src/lib/constants.ts`**.
You have two easy ways to use your own images.

---

## Option A — Local files (recommended for Vercel)

1. Put your image files inside this folder (`public/images/`).
2. Open `src/lib/constants.ts` and set the matching slot to `"/images/<your-file>.jpg"`.

### Slots you can fill

| Slot in `constants.ts`   | Suggested file            | Used in                | Suggested size |
|--------------------------|---------------------------|------------------------|----------------|
| `brand.logoUrl`          | `/images/logo.png`        | Navbar + Footer logo   | ~h 80–120px, transparent PNG |
| `images.hero`            | `/images/hero.jpg`        | Hero background        | 1920×1280 (landscape) |
| `images.aboutMain`       | `/images/about-main.jpg`  | About section (large)  | 1100×1300 (portrait)  |
| `images.aboutInset`      | `/images/about-inset.jpg` | About small inset      | 720×720 (square)      |
| `images.aboutSkyline`    | `/images/skyline.jpg`     | Stats band background  | 720×540 (landscape)   |
| `images.portfolio[0..5]` | `/images/p1.jpg` …        | Portfolio cards (6)    | 900×1150 (portrait)   |
| `images.gallery[0..4]`   | `/images/g1.jpg` …        | Scrolling gallery (5)  | 700×500 (landscape)   |
| `images.avatars[0..3]`   | `/images/a1.jpg` …        | Testimonial avatars (4)| 200×200 (square)      |

> Tip: For the **logo on the transparent (dark) hero**, provide a **light/white**
> version of your logo so it stays visible.

---

## Option B — Hosted URLs

Instead of local files, paste any image URL directly into the slot,
e.g. `hero: "https://your-cdn.com/hero.jpg"`.

---

## Text / tagline

- Edit `brand.tagline` in `src/lib/constants.ts` to change the small line
  under the wordmark.
- All other site copy lives in **`src/lib/i18n.tsx`** (Turkish + English).
