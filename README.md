# eThute Lenna — Landing Page

> **Finally, Maths & Science that makes sense.**  
> Instant homework help with animated visuals, in English or isiZulu, 24/7.

---

## 📁 Project Structure

```
ethute-lenna-landing/
├── index.html              ← Main landing page
├── public/
│   └── logo.jpg            ← eThute Lenna logo
├── src/
│   ├── styles/
│   │   └── main.css        ← All styles
│   └── main.js             ← Scroll reveal, navbar, form logic
└── README.md               ← This file
```

---

## 🚀 Deploying to Cloudflare Pages (Step-by-Step)

### Step 1 — Push to GitHub

1. Create a GitHub account at [github.com](https://github.com) if you don't have one
2. Click **"New repository"**
3. Name it: `ethute-lenna-landing`
4. Set it to **Public**
5. Click **"Create repository"**

Then upload your files:
- Drag and drop the entire project folder into the GitHub repo page, OR
- Use GitHub Desktop (download at [desktop.github.com](https://desktop.github.com))

### Step 2 — Deploy on Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign in or create a free Cloudflare account
3. Click **"Create a project"** → **"Connect to Git"**
4. Authorise GitHub and select `ethute-lenna-landing`
5. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (root)
6. Click **"Save and Deploy"**

Your site will be live at: `ethute-lenna-landing.pages.dev`

### Step 3 — Connect Your Custom Domain

1. In Cloudflare Pages → your project → **"Custom Domains"**
2. Click **"Set up a custom domain"**
3. Enter: `ethutelenna.com`
4. Follow the DNS instructions shown

---

## ✏️ Updating Content

| What to change | Where |
|---|---|
| Heading / subheading | `index.html` → Hero section |
| Features text | `index.html` → Features section |
| Subjects list | `index.html` → Subjects section |
| Colours / fonts | `src/styles/main.css` → `:root` variables |
| Logo | Replace `public/logo.jpg` |

---

## 🎨 Brand Colours

```css
--blue-dark:  #1a3a5c   /* Main headings */
--blue-mid:   #1e5799   /* Buttons, accents */
--blue-light: #2980b9   /* Gradients */
--purple:     #8b5cf6   /* Highlights */
--gold:       #f59e0b   /* Coins, problem cards */
```

---

## 📬 Waitlist Data

Entries are currently saved to `localStorage` in the user's browser.  
To collect real emails, replace the `handleSubmit` function in `src/main.js` with a [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/) endpoint.

---

Built with ❤️ for South African Grade 12 learners 🇿🇦
