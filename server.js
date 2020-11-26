
// Custom server from official example https://github.com/nuxt/nuxt.js/blob/dev/examples/custom-server/server.js
// We need this because we are on Azure, if is not your case or similar you can 
// add to your package.json the script: "start": "cross-env NODE_ENV=production nuxt start"

// Add production as fallback if you haven not configured the environment
process.env.NODE_ENV = process.env.NODE_ENV;
process.env.HOST = process.env.HOST || '127.0.0.1'
process.env.PORT = process.env.PORT || 3000

const app = require('express')()
const { Nuxt, Builder } = require('nuxt')

// Import and set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'preview');

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)
console.log('app is using nuxt renderer')

// Add the nosniff header for every request, per security guidelines
const dontSniffMimetype = require('dont-sniff-mimetype')
app.use(dontSniffMimetype());

// Start express server
app.listen(process.env.PORT, process.env.HOST);
console.log('app is listening on: ', process.env.HOST, process.env.PORT);