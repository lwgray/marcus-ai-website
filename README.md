# Marcus AI Website

Official website and documentation for Marcus AI at [marcus-ai.dev](https://marcus-ai.dev).

## 🌐 Repository Structure

This repository contains the complete Marcus AI website, separate from the main [marcus](https://github.com/lwgray/marcus) application repository.

## 📚 Documentation Sync

Documentation is **automatically synced** from the [marcus repository](https://github.com/lwgray/marcus/tree/main/docs) via GitHub Actions:

- **Source of Truth**: `marcus/docs/` (main app repo)
- **Synced To**: `pages/docs/` (this repo)
- **Trigger**: Automatic on any change to `marcus/docs/**`
- **Frequency**: Real-time via GitHub Actions + daily backup sync

### How It Works

1. Edit documentation in [`marcus/docs/`](https://github.com/lwgray/marcus/tree/main/docs)
2. Push changes to marcus repo
3. GitHub Action in marcus repo triggers sync
4. Documentation automatically syncs to this repo
5. Netlify rebuilds and deploys website

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (Static Site Generation)
- **Documentation**: Nextra (Docs theme)
- **Styling**: Custom CSS (Anthropic-inspired design)
- **Hosting**: Netlify
- **CI/CD**: GitHub Actions
- **Domain**: marcus-ai.dev

## 📁 Repository Structure

```
marcus-ai-website/
├── pages/
│   ├── index.mdx           # Landing page
│   ├── docs/               # Documentation (auto-synced from marcus repo)
│   │   ├── getting-started/
│   │   ├── concepts/
│   │   ├── guides/
│   │   ├── systems/
│   │   ├── api/
│   │   └── roadmap/
│   ├── _app.jsx            # App wrapper
│   └── _meta.json          # Navigation
├── styles/
│   └── globals.css         # Anthropic-style CSS
├── public/
│   ├── logo/               # Logos (add yours here)
│   └── images/             # Images
├── .github/
│   └── workflows/
│       └── sync-docs.yml   # Auto-sync from marcus repo
├── theme.config.jsx        # Nextra configuration
├── next.config.js          # Next.js config
├── netlify.toml            # Netlify deployment config
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone this repository
git clone https://github.com/lwgray/marcus-ai-website.git
cd marcus-ai-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:3000` to see the site locally.

### Testing Documentation

To test with actual documentation locally:

```bash
# Option 1: Manually trigger sync (requires GitHub CLI)
gh workflow run sync-docs.yml

# Option 2: Copy docs manually for testing
cp -r /path/to/marcus/docs/* pages/docs/
```

## 📦 Build & Deploy

### Production Build

```bash
# Build static site
npm run export

# Output in: out/
```

### Deploy to Netlify

#### Automatic (Recommended)

Netlify automatically deploys when you push to `main` branch:

1. Push changes to GitHub
2. Netlify detects changes
3. Runs `npm run export`
4. Deploys to marcus-ai.dev

#### Manual

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Netlify Configuration

**Build settings** (already configured in `netlify.toml`):
- **Build command**: `npm run export`
- **Publish directory**: `out`
- **Node version**: 18

## 🔄 Documentation Sync Setup

### For Website Maintainers

No action needed! Documentation syncs automatically.

### For Marcus Repo Maintainers

To set up the sync (one-time):

1. **Create Personal Access Token** in GitHub:
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate token with `repo` scope
   - Name it: `WEBSITE_SYNC_TOKEN`

2. **Add Token to Marcus Repo**:
   - Go to marcus repo → Settings → Secrets
   - Add secret: `WEBSITE_SYNC_TOKEN` = [your token]

3. **Workflow is Already Set Up**:
   - File: `.github/workflows/notify-website-docs-update.yml`
   - Triggers on any push to `docs/**`

### Manual Sync

Trigger sync manually if needed:

```bash
# Using GitHub CLI
gh workflow run sync-docs.yml -R lwgray/marcus-ai-website

# Or via GitHub web interface:
# Actions → Sync Documentation → Run workflow
```

## 🎨 Customization

### Colors

Edit `styles/globals.css`:
```css
:root {
  --primary-color: #0D9373;    /* Teal brand color */
  --primary-light: #07C983;    /* Hover state */
}
```

### Logo

Add logo files to `public/logo/`:
- `light.svg` - Light mode logo
- `dark.svg` - Dark mode logo

Update `theme.config.jsx`:
```jsx
logo: <img src="/logo/light.svg" alt="Marcus AI" />
```

### Navigation

Edit `theme.config.jsx`:
- Header links
- Footer content
- Social links
- Search settings

## 🔗 URL Structure

- `/` - Landing page
- `/docs` - Documentation home
- `/docs/getting-started/*` - Getting started guides
- `/docs/concepts/*` - Conceptual documentation
- `/docs/guides/*` - How-to guides
- `/docs/systems/*` - System architecture
- `/docs/api/*` - API reference
- `/docs/roadmap/*` - Future plans

## 🐛 Troubleshooting

### Documentation Not Syncing

1. Check GitHub Action status in marcus repo
2. Verify `WEBSITE_SYNC_TOKEN` secret exists
3. Manually trigger sync: `gh workflow run sync-docs.yml`

### Build Fails

```bash
# Test build locally
npm run export

# Check Netlify build logs
netlify open
```

### Changes Not Showing

- Clear browser cache
- Check Netlify deploy status
- Verify files were committed to git

## 📊 Performance

- **Build time**: ~30-60 seconds
- **Deploy time**: ~1 minute
- **Page load**: < 1 second (static files)
- **Lighthouse score**: 90+ (optimized)

## 🤝 Contributing

### To Website

1. Fork this repository
2. Create feature branch
3. Make changes
4. Submit pull request

### To Documentation

**Do NOT edit docs in this repo!**

Edit documentation in the [marcus repository](https://github.com/lwgray/marcus/tree/main/docs) - changes will automatically sync here.

## 📞 Support

- **Live Site**: [marcus-ai.dev](https://marcus-ai.dev)
- **Main App**: [github.com/lwgray/marcus](https://github.com/lwgray/marcus)
- **Issues**: [Marcus Issues](https://github.com/lwgray/marcus/issues)
- **Discussions**: [Marcus Discussions](https://github.com/lwgray/marcus/discussions)

## 📄 License

MIT License - Same as Marcus project