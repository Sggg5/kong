# 空 · Kong

> 虚室生白，吉祥止止。  
> *"Emptiness yields clarity; stillness brings fortune."*

**空** (Kōng) is an ever-evolving digital meditation — a serene cosmic space that renews itself every hour with a new philosophical reflection, poetic verse, or thought-provoking quote.

**[🌌 Live Demo](https://sggg5.github.io/kong)** · **[📦 GitHub](https://github.com/Sggg5/kong)**

---

## ✦ Features

| | |
|---|---|
| 🌠 **Interactive Cosmos** | 500-particle starfield with mouse-attraction, shooting stars, nebula glows, and click ripples |
| 🎵 **Generative Ambient** | Drone soundscape via Web Audio API — 3 drifting sine oscillators + filtered noise |
| ⏰ **Hourly Renewal** | A new quote every hour, cycling through Daoism, Chan Buddhism, poetry, and scientific wonder |
| 🔮 **Constellation Mode** | Toggle to reveal connections between nearby stars |
| 🧘 **Focus Mode** | Full-screen meditation timer with breath-space |
| 📱 **PWA** | Installable — manifest.json + service worker for offline access |
| 🖥️ **CLI** | `npx kong quote` — enjoy the void from your terminal |
| 🤖 **Automated** | 3 GitHub Actions workflows: hourly update, weekly APOD enrichment, quality checks |

## ✦ Quote Sources

Laozi · Zhuangzi · Heart Sutra · Diamond Sutra · Huineng · Wang Wei · Su Shi · Zhang Ruoxu · Lu Jiuyuan · Rumi · Bruce Lee · Carl Sagan · Stephen Hawking

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
├── data.json               # Hourly-rotated quote data
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── 404.html                # Custom 404
├── package.json            # Node.js CLI entry
├── bin/kong.js             # CLI tool
├── scripts/local-update.js # Local dev utility
└── .github/workflows/
    ├── hourly-update.yml       # ⏰ Every hour: new quote
    ├── cosmic-enrichment.yml   # 🌌 Weekly: NASA APOD + stats
    └── quality-check.yml       # ✅ On push: validate all files
```

## ✦ License

MIT — use it, share it, empty it.
