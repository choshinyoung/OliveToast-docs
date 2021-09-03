const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'OliveToast Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ffc800' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Custom Command Guide',
        link: '/guide/',
      },
      {
        text: 'Toast Commands',
        link: '/toastCommands/',
      },
      {
        text: 'Github',
        link: 'https://github.com/choshinyoung/OliveToast'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Custom Command Guide',
          collapsable: false,
          children: [
            '',
            'regex',
            'toast',
          ]
        }
      ],
      '/toastCommands/': [
        {
          title: 'Toast Commands',
          collapsable: false,
          children: [
            '',
            'literals',
            'operators',
            'statements',
            'others',
            'lists',
            'strings',
            'default',
            'messages',
            'users',
            'roles',
            'channels',
            'servers',
            'db',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
