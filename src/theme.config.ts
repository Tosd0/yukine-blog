import { defineThemeConfig } from './config'

export const themeConfig = defineThemeConfig({
  site: {
    author: 'Tosd0',
    description: '生於心，有節於外，謂之音。',
    title: '雪音',
    subtitle: 'Yukine / ゆきね',
    website: 'https://yukine.cc',
    locale: 'zh-cn',
    navigationLinks: [
      {
        title: '文章',
        url: '/',
      },
      {
        title: '归档',
        url: '/archives',
      },
      {
        title: '标签',
        url: '/tags',
      },
      {
        title: '关于',
        url: '/about',
      },
    ],
    socialLinks: [
      {
        title: 'github',
        url: 'https://github.com/tosd0',
        icon: 'i-mdi-github',
      },
      {
        title: 'rss',
        url: '/atom.xml',
        icon: 'i-mdi-rss',
      },
      {
        title: 'email',
        url: 'mailto:hi@yukine.cc',
        icon: 'i-mdi-email-outline',
      },
    ],
  },
  feeds: {
    rss: {
      fullText: true,
    },
  },
  seo: {
    twitter: {
      username: '',
    },
  },
  latex: {
    provider: 'katex',
  },
  comment: {
    provider: 'disqus',
    disqus: {
      shortname: 'YOUR_DISQUS_SHORTNAME',
    },
    twikoo: {
      envId: '',
    },
    giscus: {
      scriptUrl: 'https://giscus.app/client.js',
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '1',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy',
    },
  },
  analytics: {
    provider: 'umami',
    google: {
      measurementId: '',
    },
    umami: {
      websiteId: 'YOUR_UMAMI_WEBSITE_ID',
      scriptUrl: 'https://analytics.umami.is/script.js',
    },
  },
  appearance: {
    theme: 'auto',
    colors: {
      light: {
        primary: '#2e405b',
        secondary: '#ffffff',
        accent: '#c7254e',
        neutral: '#000000',
      },
      dark: {
        primary: '#ffffff',
        secondary: '#232222',
        accent: '#c7254e',
        neutral: '#ffffff',
      },
    },
  },
})
