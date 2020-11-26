// Info about configuration https://nuxtjs.org/guide/configuration/
const env = require(`./environments/${process.env.NODE_ENV}`);

// Webpack plugin for Monaco
const MonacoEditorPlugin = require('monaco-editor-webpack-plugin');

console.log(`Environment: ${process.env.NODE_ENV}`);

module.exports = {
  env: env,
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'PWABuilder',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'All the tools you need to build and deploy your Progressive Web Apps.'
      },
      {
        name: 'msapplication-TileImage',
        content: '/Images/assets/icons/ms-icon-144x144-487a503e5cb29bbe0df7296db4093b7e.png'
      },
      {
        name: 'msapplication-TileColor',
        content: '#3c3c3c'
      },
      {
        name: 'theme-color',
        content: '#000000'
      },
      {
        name: 'ms.appid',
        content: 'PWABuilder'
      }

    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'Images/favicon-32x32.png'
      },
      {
        rel: 'manifest',
        href: '/manifest.webmanifest'
      },
      {
        rel: 'preconnect',
        href: 'https://web.vortex.data.microsoft.com'
      },
      {
        rel: "stylesheet",
        href: "/css/all.css"
      },
      {
        rel: 'apple-touch-icon',
        href: '/Images/assets/icons/apple-icon-06144a2a7b5101d447ecb4832502e73e.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/Images/assets/icons/apple-icon-57x57-b82ef058b133f3197df61c326fa7cd6d.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/Images/assets/icons/apple-icon-72x72-66bbf8447788cee426eebcddfa8eede8.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/Images/assets/icons/apple-icon-76x76-8e88034967133f6a0454fe32e2070ffd.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/Images/assets/icons/apple-icon-114x114-a2731f540851db0ed9fb4a7c74e2c6ce.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/Images/assets/icons/apple-icon-120x120-06144a2a7b5101d447ecb4832502e73e.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/Images/assets/icons/apple-icon-144x144-487a503e5cb29bbe0df7296db4093b7e.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/Images/assets/icons/apple-icon-152x152-b600c0b40a21bbb9f8c1d18acde168e9.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/Images/assets/icons/apple-icon-180x180-f0f5be1ded11c7ec66b00dd23c277a5d.png'
      }
    ],
    script: [{
        src: '/pwabuilder-sw-register.js',
        type: 'module'
      },
      {
        src: "https://az725175.vo.msecnd.net/scripts/jsll-4.js"
      },
      {
        src: '/awa-register.js'
      },
      {
        src: '/webcomponents-polyfill.js'
      },
      {
        src: '/copyButton.js',
        type: 'module'
      },
      {
        src: 'webadb.js'
      },
      {
        src: '/platformPop.js',
        type: 'module'
      },
      {
        src: '/pwa-install.js',
        type: 'module'
      }
    ]
  },
  loading: {
    color: '#1FC2C8'
  },
  css: ['~/assets/scss/app.scss'],
  build: {
    extractCSS: true,
    vendor: ['babel-polyfill', 'vuex-class', 'nuxt-class-component', 'vue-i18n'],
    plugins: [
      new MonacoEditorPlugin({
        // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        // Include a subset of languages support
        // Some language extensions like typescript are so huge that may impact build performance
        // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
        // Languages are loaded on demand at runtime
        languages: ['javascript', 'typescript', 'css', 'html', 'json']
      })
    ]
  },
  router: {
    middleware: ['i18n', 'default']
  },
  plugins: ['~/plugins/i18n.js', { src: '~/plugins/vuex-persist', ssr: false }],
  modules: [
    '~/modules/typescript',
    '@nuxtjs/axios'
  ]
}
