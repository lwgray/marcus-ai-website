# Marcus AI Documentation Website

Official documentation website for Marcus AI, built with Mintlify (the same technology powering docs.claude.com).

🌐 **Live Site**: https://marcus-ai.dev
📚 **Source Code**: https://github.com/lwgray/marcus
💬 **Discussions**: https://github.com/lwgray/marcus/discussions

## Technology Stack

- **Framework**: [Mintlify](https://mintlify.com/) - Same as docs.claude.com
- **Hosting**: Netlify
- **Documentation Source**: [marcus/docs/](https://github.com/lwgray/marcus/tree/main/docs)
- **Auto-Sync**: GitHub Actions

## Quick Start

### Local Development

```bash
# Install Mintlify CLI (if not already installed)
npm install -g mintlify

# Start dev server
mintlify dev

# Or specify port
mintlify dev --port 3002
```

Visit http://localhost:3000 (or your specified port)

### Project Structure

```
marcus-ai-website/
├── mint.json              # Navigation & configuration
├── introduction.mdx       # Landing page
├── getting-started/       # Synced from marcus repo
├── concepts/              # Synced from marcus repo
├── guides/                # Synced from marcus repo
├── systems/               # Synced from marcus repo
├── api-reference/         # Synced from marcus repo
├── roadmap/               # Synced from marcus repo
├── .github/workflows/     # Auto-sync workflow
└── netlify.toml          # Deployment config
```

## Documentation Sync

Documentation files are automatically synced from the main [marcus repository](https://github.com/lwgray/marcus):

- **Trigger**: Push to `docs/` directory in marcus repo
- **Workflow**: `.github/workflows/sync-docs.yml`
- **Frequency**: On-demand + daily at 2 AM UTC

### Manual Sync

To manually sync documentation:

```bash
# Using GitHub CLI
gh workflow run sync-docs.yml

# Or copy files directly
cp -r ~/dev/marcus/docs/getting-started ./
cp -r ~/dev/marcus/docs/concepts ./
cp -r ~/dev/marcus/docs/guides ./
cp -r ~/dev/marcus/docs/systems ./
cp -r ~/dev/marcus/docs/api ./api-reference
cp -r ~/dev/marcus/docs/roadmap ./
```

## Configuration

### mint.json

The `mint.json` file controls:
- Navigation structure
- Color scheme (Marcus green: #0D9373)
- Top bar links and CTA
- Tabs and anchors
- Footer and social links

### Customization

To customize the site:

1. **Colors**: Edit `colors` in `mint.json`
2. **Navigation**: Edit `navigation` array in `mint.json`
3. **Landing Page**: Edit `introduction.mdx`
4. **Logo**: Add files to root directory:
   - `logo/dark.svg`
   - `logo/light.svg`
   - `favicon.svg`

## Deployment

### Netlify (Current)

The site auto-deploys to Netlify on every push:

- **Build Command**: `npm install -g mintlify && mintlify build`
- **Publish Directory**: `_site`
- **Domain**: marcus-ai.dev

### Mintlify Cloud (Alternative)

For the full Anthropic experience, deploy to Mintlify Cloud:

1. Sign up at https://mintlify.com/
2. Connect your GitHub repository
3. Configure custom domain

Benefits:
- Faster builds
- Better analytics
- Advanced search features
- Automatic optimizations

## Features

### Built-in Components

Mintlify provides beautiful components out of the box:

```mdx
<Card title="Title" icon="icon-name" href="/link">
  Description text
</Card>

<CardGroup cols={2}>
  <Card>...</Card>
  <Card>...</Card>
</CardGroup>

<Accordion title="Expandable Section">
  Content inside
</Accordion>

<Note>Important information</Note>
<Warning>Warning message</Warning>
<Tip>Helpful tip</Tip>
```

### Search

AI-powered search is built-in and automatically indexes all content.

### Dark Mode

Automatic dark mode support with smooth transitions.

### Mobile Responsive

Optimized for all screen sizes out of the box.

## Development

### Adding New Pages

1. Create `.md` or `.mdx` file in appropriate directory
2. Add to `navigation` in `mint.json`
3. Mintlify auto-reloads

Example:

```json
{
  "group": "Guides",
  "pages": [
    "guides/new-guide"
  ]
}
```

### Markdown Extensions

Mintlify supports:
- Standard Markdown
- MDX (React components)
- Code syntax highlighting
- Tabs and accordions
- Callout boxes
- Math equations (LaTeX)

## Troubleshooting

### "File not found" warnings

If you see warnings about missing files:

```bash
# Sync documentation from marcus repo
cd ~/dev/marcus-ai-website
cp -r ~/dev/marcus/docs/* ./
```

### Dev server won't start

```bash
# Update Mintlify CLI
npm install -g mintlify@latest

# Clear cache
rm -rf .mintlify
```

### Build fails on Netlify

Check `netlify.toml` build command matches:
```toml
[build]
  command = "npm install -g mintlify && mintlify build"
  publish = "_site"
```

## Resources

- **Mintlify Documentation**: https://mintlify.com/docs
- **Marcus AI Repo**: https://github.com/lwgray/marcus
- **Component Reference**: https://mintlify.com/docs/components
- **Configuration Options**: https://mintlify.com/docs/settings/global

## Contributing

Documentation improvements are welcome!

1. Edit files in the [marcus/docs/](https://github.com/lwgray/marcus/tree/main/docs) directory
2. Changes will automatically sync to this website
3. For website-specific changes (navigation, styling), edit this repository

## License

Same license as the Marcus AI project.

## Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/lwgray/marcus/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/lwgray/marcus/discussions)
- 📧 **Contact**: [Via GitHub](https://github.com/lwgray)