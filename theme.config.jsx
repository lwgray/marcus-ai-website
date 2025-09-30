import { useRouter } from 'next/router'

const config = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Marcus AI</span>,
  project: {
    link: 'https://github.com/lwgray/marcus'
  },
  chat: {
    link: 'https://discord.gg/your-discord' // Update with your Discord
  },
  docsRepositoryBase: 'https://github.com/lwgray/marcus/tree/main/docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://marcus-ai.dev" target="_blank">
          Marcus AI
        </a>
        . Built with Next.js and Nextra.
      </span>
    )
  },
  head: () => {
    const { asPath } = useRouter()
    const url = 'https://marcus-ai.dev' + asPath
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content="Marcus AI - Intelligent Agent Coordination" />
        <meta
          property="og:description"
          content="Enable AI agents to collaborate autonomously on software development projects with context, intelligence, and transparency."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  },
  primaryHue: 162,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navigation: {
    prev: true,
    next: true
  },
  toc: {
    float: true,
    title: 'On This Page'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  editLink: {
    text: 'Edit this page on GitHub'
  },
  feedback: {
    content: 'Questions? Give us feedback →',
    labels: 'feedback'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Marcus AI'
    }
  }
}

export default config