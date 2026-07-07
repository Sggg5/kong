# 空 · Kong

> 虚室生白，吉祥止止。  
> *"Emptiness yields clarity; stillness brings fortune."*

**空** (Kōng) is an ever-evolving digital meditation — a serene cosmic space that renews itself every hour with a new philosophical reflection, poetic verse, or thought-provoking quote.

**[🌌 Live Demo](https://sggg5.github.io/kong)** · **[📦 GitHub](https://github.com/Sggg5/kong)**

[![Update](https://img.shields.io/github/actions/workflow/status/Sggg5/kong/hourly-update.yml?label=hourly&style=flat-square&color=0a0a0f)](https://github.com/Sggg5/kong/actions/workflows/hourly-update.yml)
[![Pages](https://img.shields.io/github/deployments/Sggg5/kong/github-pages?label=pages&style=flat-square&color=0a0a0f)](https://sggg5.github.io/kong)
[![License](https://img.shields.io/badge/license-MIT-0a0a0f?style=flat-square)](LICENSE)

---

## ✦ Features

| | |
|---|---|
| 🌠 **Interactive Cosmos** | 500-particle starfield with mouse-attraction, shooting stars, nebula glows, click ripples, and custom cursor |
| 🎵 **Generative Ambient** | Drone soundscape via Web Audio API — 3 drifting sine oscillators + filtered noise |
| ⏰ **Hourly Renewal** | A new quote every hour, cycling through Daoism, Chan Buddhism, poetry, and scientific wonder |
| 🔮 **Constellation Mode** | Toggle to reveal connections between nearby stars |
| 🧘 **Focus Mode** | Full-screen meditation timer with breath-space |
| 📜 **Quote Archive** | Every quote is archived to `history/` — browse the full timeline at `/history` |
| ⬇ **Share Cards** | Download a beautiful cosmic quote card as PNG |
| 📱 **PWA** | Installable — manifest.json + service worker for offline access |
| 🔌 **Public API** | `GET /api/quote.json` → current quote as JSON, no auth required |
| 🖥️ **CLI** | `npx kong quote` — enjoy the void from your terminal |
| 🤖 **Automated** | 3 GitHub Actions workflows: hourly update, weekly APOD enrichment, quality checks |

## ✦ Quote Sources

Laozi · Zhuangzi · Heart Sutra · Diamond Sutra · Huineng · Wang Wei · Su Shi · Zhang Ruoxu · Lu Jiuyuan · Rumi · Bruce Lee · Carl Sagan · Stephen Hawking · Steve Jobs

## ✦ Tech Stack

- **Frontend:** Pure HTML / CSS / JavaScript — zero framework dependencies
- **Visuals:** HTML5 Canvas particle system with custom rendering
- **Audio:** Web Audio API generative ambient engine
- **CLI:** Node.js — `bin/kong.js` with 5 commands
- **CI/CD:** GitHub Actions — 3 scheduled + 1 push-triggered workflow
- **Hosting:** GitHub Pages

## ✦ CLI Usage

```bash
# Install globally
npm install -g .

# Commands
kong quote    # random quote
kong status   # current data.json state
kong timer    # countdown to next auto-update
kong sky      # print ASCII universe
kong help     # show help
```

## ✦ API

```bash
# Current quote (no auth)
curl https://sggg5.github.io/kong/api/quote.json

# Full history archive
curl https://sggg5.github.io/kong/history/index.json
```

## ✦ Local Development

```bash
# Serve site
python -m http.server 8000

# Simulate an hourly update locally
node scripts/local-update.js
```

## ✦ Project Structure

```
kong/
├── index.html              # Main interactive experience
├── share.js                # Share card generator
├── data.json               # Hourly-rotated quote data
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── 404.html                # Custom 404
├── sitemap.xml             # SEO sitemap
├── package.json            # Node.js CLI entry
├── bin/kong.js             # CLI tool
├── scripts/local-update.js # Local dev utility
├── history/                # 📜 Full quote archive
│   ├── index.html          # Timeline viewer
│   └── index.json          # Machine-readable archive
├── api/                    # 🔌 JSON API
│   ├── index.html          # API docs
│   └── quote.json          # Current quote endpoint
└── .github/workflows/
    ├── hourly-update.yml       # ⏰ Every hour: new quote
    ├── cosmic-enrichment.yml   # 🌌 Weekly: NASA APOD + stats
    └── quality-check.yml       # ✅ On push: validate all files
```

## ✦ License

MIT — use it, share it, empty it.
