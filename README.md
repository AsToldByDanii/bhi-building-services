# BHI Building Services — Website

Full website for **BHI Building Services** — New York's trusted construction, renovation, and building maintenance company. Founded by Michael Besse and David Pantelides.

---

## 📁 File Structure

```
bhi-website/
├── index.html          ← Main site (all pages)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Navigation, animations, form logic
├── images/             ← Add logo + project photos here
└── README.md
```

---

## 🚀 Deploy to GitHub Pages (Step by Step)

### Step 1 — Create a New Repository on GitHub
1. Go to [github.com](https://github.com) and log in
2. Click **"New"** (green button, top left)
3. Name it: `bhi-building-services` (or similar)
4. Set to **Public**
5. Click **"Create repository"**

### Step 2 — Upload the Files
**Option A — GitHub Desktop (easiest):**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your new repo locally
3. Copy all files from this folder into the cloned folder
4. Commit with message: `Initial site upload`
5. Push to GitHub

**Option B — Upload via browser:**
1. Open your new repo on GitHub
2. Click **"uploading an existing file"**
3. Drag in all files (maintaining the folder structure)
4. Click **"Commit changes"**

### Step 3 — Enable GitHub Pages
1. In your repo, go to **Settings** → **Pages**
2. Under **"Source"**, select **"Deploy from a branch"**
3. Choose branch: `main` | folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/bhi-building-services/`

(Takes ~1-2 minutes to go live after saving)

---

## 📸 Customization Checklist

Before launch, update the following:

- [ ] **Logo** — Replace the text logo in `<nav>` with `<img src="images/logo.png" />` using the actual BHI logo file
- [ ] **Team Photos** — Replace placeholder Unsplash photos with real photos of Michael and David (in the About page)
- [ ] **Gallery Photos** — Replace placeholder images with actual BHI project photos
- [ ] **Phone Number** — Add their phone number to the Contact page info section
- [ ] **Email** — Confirm `info@bhibuildingservices.com` is correct (or update)
- [ ] **Contact Form** — The form currently shows a success screen on submit. To actually send emails, connect it to [Formspree](https://formspree.io) (free tier available):
  - Create a free Formspree account
  - Add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag
  - Change `method="POST"`
  - Remove the `novalidate` attribute
- [ ] **Domain** — To use a custom domain (e.g. bhibuildingservices.com), add a `CNAME` file with the domain name and configure DNS per GitHub Pages docs

---

## 🎨 Brand Colors Used

| Token | Hex | Usage |
|-------|-----|-------|
| Red | `#C1121F` | Primary accent, CTAs, highlights |
| Black | `#0a0a0a` | Background |
| Dark | `#111111` | Card backgrounds |
| White | `#FFFFFF` | Text, buttons |
| Gray | `#888888` | Body text |

---

## 📄 Pages Included

| Page | Description |
|------|-------------|
| **Home** | Hero, services overview, 4-step process, stats, CTA |
| **Services** | Residential + commercial detail, accordion FAQ for each service |
| **About** | Brand story, company values, team bios (Michael & David) |
| **Gallery** | Project photo grid + Instagram link |
| **Contact** | Quote form + contact info + social links |

---

Built for BHI Building Services by As Told By Danii.
