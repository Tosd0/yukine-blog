import { defineConfig, presetIcons, presetWind4, transformerDirectives } from 'unocss'
import { themeConfig } from './src/theme.config'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetIcons(),
  ],
  transformers: [transformerDirectives()],
  preflights: [
    {
      getCSS: () => {
        const light = themeConfig.appearance.colors.light
        const dark = themeConfig.appearance.colors.dark
        return `
:root {
  --theme-primary: ${light.primary};
  --theme-secondary: ${light.secondary};
  --theme-accent: ${light.accent};
  --theme-neutral: ${light.neutral};
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --theme-primary: ${dark.primary};
    --theme-secondary: ${dark.secondary};
    --theme-accent: ${dark.accent};
    --theme-neutral: ${dark.neutral};
  }
}
:root[data-theme="dark"] {
  --theme-primary: ${dark.primary};
  --theme-secondary: ${dark.secondary};
  --theme-accent: ${dark.accent};
  --theme-neutral: ${dark.neutral};
}
`
      },
    },
  ],
  theme: {
    colors: {
      primary: 'var(--theme-primary)',
      secondary: 'var(--theme-secondary)',
      accent: 'var(--theme-accent)',
      neutral: 'var(--theme-neutral)',
    },
    font: {
      serif: 'HiraMinProN-W6, Source Han Serif CN, Source Han Serif SC, Source Han Serif TC, serif',
      sans: '寒蝉全圆体, Source Sans Pro, Roboto, Helvetica, Helvetica Neue, Source Han Sans SC, Source Han Sans TC, PingFang SC, PingFang HK, PingFang TC, sans-serif',
    },
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'link': 'p-[0.1em] underline underline-offset-2 decoration-[0.1em] ease-in-out duration-400 transition-colors hover:bg-primary hover:text-secondary hover:decoration-primary',
  },
  rules: [
    [
      /^text-(\d+(?:\.\d+)?)$/,
      ([, size]) => ({
        'font-size': `calc(${size} * var(--spacing))`,
      }),
    ],
    ['animate-fade-in-down', { animation: 'fade-in-down 1s linear 1' }],
    ['animate-fade-in-left', { animation: 'fade-in-left 1s ease-in-out 1' }],
  ],
  safelist: [
    ...themeConfig.site.socialLinks.map(social => `${social.icon}`),
    'i-mdi-brightness-5',
    'i-mdi-brightness-3',
    'i-mdi-brightness-auto',
  ],
})
