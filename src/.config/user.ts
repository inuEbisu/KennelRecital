import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    website: "https://inuebisu.cn",
    title: "犬窝闲谭",
    subtitle: "KennelRecital",
    author: "inuEbisu",
    description: "inuEbisu's personal blog",
    navLinks: [
      { name: '首页', href: '/' },
      { name: '关于', href: '/about' },
      { name: '伙伴', href: '/friends' },
    ],
    socialLinks: [
      { name: 'email', href: 'mailto:inuebisu@outlook.com' },
      { name: 'github', href: 'https://github.com/inuEbisu' },
      // { name: 'notebook', href: 'https://note.inuebisu.cn'},
    ],
    footer: [
      '© 2020-2025 <a target="_blank" href="%website">%author</a>',
    ],
  },
  seo: {
    twitter: "@inuEbisu_3rd",
  },
}
