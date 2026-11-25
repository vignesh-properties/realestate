# Vignesh Properties Website

A responsive static website for Vignesh Properties, built with HTML, CSS and vanilla JavaScript. It is ready to publish using GitHub Pages.

## Project structure

```text
vignesh-properties-github-pages/
├── index.html
├── README.md
├── .nojekyll
├── robots.txt
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── favicon.svg
```

## Run locally

No build tools or dependencies are required.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local web server, you can also run `python -m http.server 8000` from the project folder and visit `http://localhost:8000`.

## Publish with GitHub Pages

### Option A — use a project repository

1. Create a GitHub repository, for example `vignesh-properties`.
2. Upload/commit **the contents of this folder** to the repository root (so `index.html` is at the top level).
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the Pages deployment to complete. GitHub will display the published URL in the Pages settings.

The URL will normally look like `https://YOUR-USERNAME.github.io/vignesh-properties/`.

### Option B — publish at your account root

If you want the site at `https://YOUR-USERNAME.github.io/`, create a repository named exactly `YOUR-USERNAME.github.io`, then commit the project files to its root and enable GitHub Pages as above.

## Update the site

Edit `index.html`, `assets/css/style.css`, or `assets/js/main.js`, then commit and push your changes. GitHub Pages will publish the updated static files automatically.

## Before publishing

- Verify the phone number, email address, WhatsApp destination and business details.
- Confirm you have permission to publish the listed insurance provider names/logos. The current page uses provider names as text, not their logos.
- GitHub Pages hosts static files. A contact form requiring message submission would need a separate form service or backend; the current site uses direct phone, email and WhatsApp links.
