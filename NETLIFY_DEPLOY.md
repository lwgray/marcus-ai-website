# Deploy Marcus Website to Netlify

Complete guide to deploying your Marcus documentation site to Netlify at marcus-ai.dev.

## What You're Deploying

A Next.js + Nextra documentation site with:
- Landing page at `marcus-ai.dev`
- Full documentation at `marcus-ai.dev/docs`
- Anthropic-inspired design
- Mobile responsive
- Dark mode support

## Prerequisites

- [x] Netlify account (free tier works perfectly)
- [x] Domain `marcus-ai.dev` (you have this)
- [x] GitHub repository for Marcus

## Quick Deploy (5 Minutes)

### Step 1: Install Dependencies

```bash
cd /Users/lwgray/dev/marcus/website
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` - you should see the landing page and docs!

### Step 3: Build for Production

```bash
npm run export
```

This creates an `out/` directory with your static site.

### Step 4: Deploy to Netlify

#### Option A: Netlify CLI (Fastest)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from website directory
cd /Users/lwgray/dev/marcus/website
netlify deploy --prod
```

When prompted:
- **Publish directory**: `out`
- **Site name**: `marcus-ai` (or custom)

#### Option B: Netlify Web Interface

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag the `out/` folder to the upload area
4. Site deploys in ~30 seconds!

#### Option C: GitHub Integration (Recommended for Auto-Deploy)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your `marcus` repository
5. Configure build settings:
   - **Base directory**: `website`
   - **Build command**: `npm run export`
   - **Publish directory**: `website/out`
6. Click "Deploy site"

**Automatic deployments**: Every push to main auto-deploys!

### Step 5: Configure Custom Domain

In Netlify dashboard:

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Enter `marcus-ai.dev`
4. Netlify provides DNS configuration

**Update your DNS** (wherever you bought marcus-ai.dev):

```
# Option 1: Netlify DNS (Easiest - Recommended)
Use Netlify's nameservers:
  dns1.p05.nsone.net
  dns2.p05.nsone.net
  dns3.p05.nsone.net
  dns4.p05.nsone.net

# Option 2: Custom DNS
Type: A
Name: @
Value: 75.2.60.5 (Netlify's load balancer)

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

### Step 6: Enable HTTPS

In Netlify dashboard:
1. Go to **Site settings** → **Domain management**
2. Scroll to "HTTPS"
3. Click "Verify DNS configuration"
4. Click "Provision certificate"

SSL certificate auto-installs in ~1 minute. Site now accessible at `https://marcus-ai.dev`!

## Verify Everything Works

Check these URLs:
- ✅ `https://marcus-ai.dev` - Landing page
- ✅ `https://marcus-ai.dev/docs` - Documentation home
- ✅ `https://marcus-ai.dev/docs/getting-started/quickstart` - Quickstart guide
- ✅ `https://marcus-ai.dev/docs/api` - API reference

## Environment Variables (If Needed)

If you add analytics or other services:

```bash
# In Netlify dashboard
Site settings → Environment variables

# Add variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Continuous Deployment

Once GitHub is connected:

1. **Make changes** to docs or website
2. **Commit and push** to GitHub
3. **Netlify auto-deploys** (takes ~2-3 minutes)
4. **Site updates** automatically

Check deployment status at `https://app.netlify.com/sites/[your-site]/deploys`

## Build Settings (Already Configured)

Your `netlify.toml` includes:

```toml
[build]
  command = "npm run export"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
```

## Performance Optimizations

Netlify automatically provides:
- **CDN** - Global edge network
- **Compression** - Gzip/Brotli
- **Caching** - Smart cache headers
- **Image optimization** - Automatic image processing
- **Pre-rendering** - Fast page loads

## Troubleshooting

### Build Fails

```bash
# Check build locally
npm run export

# View build logs in Netlify dashboard
# Usually shows missing dependencies or build errors
```

### 404 on Docs Pages

Ensure `netlify.toml` has:
```toml
[[redirects]]
  from = "/docs/*"
  to = "/docs/:splat"
  status = 200
```

### CSS Not Loading

Clear browser cache or add cache busting:
```bash
# In Netlify dashboard
Site settings → Build & deploy → Post processing
Enable "Asset optimization"
```

### Domain Not Working

1. Check DNS propagation: `nslookup marcus-ai.dev`
2. Verify Netlify DNS settings
3. Wait 24-48 hours for full propagation

## Advanced Features

### Form Handling

Add forms with Netlify Forms:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>
```

### Functions (API Routes)

Create serverless functions:
```bash
mkdir netlify/functions
# Add .js files - auto-deploy as API endpoints
```

### Split Testing

Test different versions:
```bash
# In Netlify dashboard
Site settings → Split testing
Create branch deploy for testing
```

### Analytics

Enable Netlify Analytics ($9/month):
- Real-time visitor data
- No cookies or tracking scripts
- Privacy-friendly

## Monitoring

Check site health:
- **Status**: `https://app.netlify.com/sites/[your-site]`
- **Deploys**: View all deployments and rollback if needed
- **Logs**: Real-time build and function logs

## Cost

**Free tier includes**:
- 100GB bandwidth/month
- 300 build minutes/month
- Unlimited sites
- HTTPS
- Deploy previews
- Form submissions (100/month)

Perfect for documentation sites!

## Next Steps

- [ ] Deploy site to Netlify
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Test all pages
- [ ] Set up auto-deploy from GitHub
- [ ] Add Google Analytics (optional)
- [ ] Configure redirects if needed
- [ ] Add site to search consoles (Google, Bing)

## Quick Commands Reference

```bash
# Local development
npm run dev              # Start dev server
npm run build            # Build for production
npm run export           # Export static site

# Netlify CLI
netlify login            # Login to Netlify
netlify deploy           # Deploy draft
netlify deploy --prod    # Deploy to production
netlify open             # Open Netlify dashboard
netlify status           # Check deployment status
```

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Nextra Docs**: https://nextra.site
- **Next.js Docs**: https://nextjs.org/docs

---

**Ready to deploy?** Run these commands:

```bash
cd /Users/lwgray/dev/marcus/website
npm install
npm run export
netlify login
netlify deploy --prod
```

Your site will be live at `marcus-ai.dev` in minutes! 🚀