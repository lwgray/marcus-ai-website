# Marcus AI Website - Deployment Checklist

Use this checklist to ensure everything is set up correctly before going live.

## ✅ Pre-Deployment Checklist

### Repository Setup

- [ ] Repository reorganized (Next.js files in root, no `website/` folder)
- [ ] Old static HTML files removed (index.html, styles.css, etc.)
- [ ] `.github/workflows/sync-docs.yml` exists in marcus-ai-website
- [ ] `.github/workflows/notify-website-docs-update.yml` exists in marcus repo
- [ ] Both repositories pushed to GitHub

### GitHub Actions Setup

- [ ] Personal Access Token created in GitHub
- [ ] Token has `repo` and `workflow` scopes
- [ ] Token saved in marcus repo as secret `WEBSITE_SYNC_TOKEN`
- [ ] Secret verified in marcus repo Settings → Secrets

### Local Testing

- [ ] Dependencies installed: `npm install`
- [ ] Dev server runs: `npm run dev`
- [ ] Landing page loads at `http://localhost:3000`
- [ ] Docs pages load at `http://localhost:3000/docs`
- [ ] Production build succeeds: `npm run export`
- [ ] `out/` directory created with files

### Documentation Sync

- [ ] Manual sync triggered successfully: `gh workflow run sync-docs.yml`
- [ ] OR docs copied manually for initial setup
- [ ] `pages/docs/` directory populated with content
- [ ] All doc sections present:
  - [ ] getting-started/
  - [ ] concepts/
  - [ ] guides/
  - [ ] systems/
  - [ ] api/
  - [ ] roadmap/

### Netlify Configuration

- [ ] Netlify account created/accessed
- [ ] Repository connected to Netlify
- [ ] Build settings configured:
  - [ ] Build command: `npm run export`
  - [ ] Publish directory: `out`
  - [ ] Node version: 18
- [ ] First deployment successful
- [ ] Site accessible via Netlify URL

### Custom Domain

- [ ] Custom domain `marcus-ai.dev` added in Netlify
- [ ] DNS configured (Netlify nameservers or A record)
- [ ] HTTPS certificate provisioned
- [ ] Site accessible at `https://marcus-ai.dev`
- [ ] Site accessible at `https://www.marcus-ai.dev` (if configured)

### Website Verification

- [ ] Landing page loads correctly
- [ ] Navigation works (landing ↔ docs)
- [ ] All documentation sections accessible
- [ ] Search functionality works
- [ ] Dark mode toggle works
- [ ] Mobile responsive design works
- [ ] All links functional (GitHub, social, etc.)

### Performance & SEO

- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Check page load speed (< 2 seconds)
- [ ] Verify meta tags present
- [ ] Check social media preview cards
- [ ] Test on multiple browsers
- [ ] Test on mobile devices

### Monitoring Setup

- [ ] GitHub Actions running successfully
- [ ] Netlify deployments working
- [ ] Error tracking configured (optional)
- [ ] Analytics configured (optional)

## 🔄 Post-Deployment Testing

### Test Documentation Sync

1. [ ] Edit a file in marcus/docs/ (e.g., add test line to README)
2. [ ] Push to marcus repo
3. [ ] Verify GitHub Action runs in marcus repo
4. [ ] Verify GitHub Action runs in marcus-ai-website repo
5. [ ] Wait 3-5 minutes for deploy
6. [ ] Check change appears on live site
7. [ ] Remove test change

### Test Manual Sync

1. [ ] Trigger manual sync: `gh workflow run sync-docs.yml`
2. [ ] Verify workflow runs successfully
3. [ ] Check docs are up to date

### Test Netlify Deployment

1. [ ] Make small change to website (e.g., update README)
2. [ ] Push to marcus-ai-website repo
3. [ ] Verify Netlify starts build
4. [ ] Verify deployment completes
5. [ ] Check change appears on live site

## 📊 Success Criteria

### Technical

- ✅ Build time < 60 seconds
- ✅ Deploy time < 2 minutes
- ✅ Page load < 2 seconds
- ✅ Lighthouse score > 90
- ✅ No console errors
- ✅ No broken links

### Functional

- ✅ All pages accessible
- ✅ Navigation working
- ✅ Search working
- ✅ Mobile responsive
- ✅ Dark mode working
- ✅ Docs sync working

### Content

- ✅ All documentation present
- ✅ Images loading correctly
- ✅ Code examples formatted
- ✅ Links working
- ✅ Social links updated

## 🐛 Common Issues & Solutions

### Build Fails

**Issue**: Netlify build fails
**Solution**:
```bash
# Test locally first
cd ~/dev/marcus-ai-website
npm run export

# Check for errors
# Fix and push again
```

### Docs Not Syncing

**Issue**: Documentation not updating automatically
**Solution**:
1. Check GitHub secret exists in marcus repo
2. Verify workflow file exists in marcus repo
3. Check Actions logs for errors
4. Manually trigger sync: `gh workflow run sync-docs.yml`

### Domain Not Working

**Issue**: marcus-ai.dev not loading
**Solution**:
1. Check DNS propagation: `nslookup marcus-ai.dev`
2. Verify DNS configuration in Netlify
3. Wait 24-48 hours for full propagation
4. Try incognito/private browsing

### HTTPS Not Working

**Issue**: Certificate not provisioning
**Solution**:
1. Verify DNS is correct
2. Wait 20-30 minutes
3. Click "Verify DNS" in Netlify
4. Contact Netlify support if persistent

## 📞 Getting Help

If you encounter issues:

1. **Check logs**:
   - GitHub Actions: Actions tab in both repos
   - Netlify: Deploy logs in dashboard

2. **Review documentation**:
   - [README.md](README.md) - Main documentation
   - [SETUP.md](SETUP.md) - Setup guide
   - [NETLIFY_DEPLOY.md](NETLIFY_DEPLOY.md) - Deployment details

3. **Support channels**:
   - GitHub Issues in marcus repo
   - Netlify support documentation
   - Community forums

## ✨ Final Steps

After completing all checks:

- [ ] Share site with team
- [ ] Update any references to old documentation location
- [ ] Celebrate! 🎉

---

## 🎯 Quick Reference

**Local Development**:
```bash
cd ~/dev/marcus-ai-website
npm run dev
# Visit http://localhost:3000
```

**Build for Production**:
```bash
npm run export
# Creates out/ directory
```

**Deploy to Netlify**:
```bash
# Automatic: just push to GitHub
git push

# Manual: using Netlify CLI
netlify deploy --prod
```

**Trigger Docs Sync**:
```bash
# Automatic: edit docs in marcus repo and push
# Manual: trigger workflow
gh workflow run sync-docs.yml -R lwgray/marcus-ai-website
```

**Check Status**:
- GitHub Actions: https://github.com/lwgray/marcus-ai-website/actions
- Netlify: https://app.netlify.com
- Live site: https://marcus-ai.dev

---

**All checked?** Your Marcus AI website is ready to go! 🚀