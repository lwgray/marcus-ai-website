# Marcus AI Website

The main website for Marcus AI, showcasing the AI agent orchestration platform and ecosystem.

Visit the live site at [marcus-ai.dev](https://marcus-ai.dev).

## Design Philosophy

The website design is inspired by:
- **Anthropic.com**: Clean, minimal aesthetic with focus on clarity
- **scikit-bio**: Clear user personas with practical code examples

## Project Structure

```
marcus-ai-website/
├── index.html          # Main homepage
├── styles.css          # Minimal, clean styling
├── assets/            # Images and other assets
├── products/          # Product pages
│   ├── marcus.html
│   └── seneca.html
└── netlify.toml      # Netlify configuration
```

## Local Development

1. Clone this repository:
```bash
git clone https://github.com/lwgray/marcus-ai-website.git
cd marcus-ai-website
```

2. Serve locally (Python):
```bash
python -m http.server 8000
```

Or use any static server of your choice.

3. Visit http://localhost:8000

## Deployment

The site automatically deploys to [marcus-ai.dev](https://marcus-ai.dev) when changes are pushed to the main branch via Netlify.

## Contributing

1. Keep the design minimal and clean
2. Focus on clarity and purpose
3. Test on multiple devices
4. Maintain fast load times

## License

MIT License