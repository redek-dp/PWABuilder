# PWABuilder

[![Build Status](https://dev.azure.com/PWABuilder/pwabuilder-site-pre/_apis/build/status/PWA%20Builder%20Site%20-%20Prod?branchName=master)](https://dev.azure.com/PWABuilder/pwabuilder-site-pre/_build/latest?definitionId=2&branchName=master)

Node/Vue/Nuxt site for PWABuilder!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) LTS version (with NPM)
* [NPM](http://npmjs.com/)
* [Python 2](https://www.python.org/)
* If on Windows, run as administrator: `npm install -g --production windows-build-tools --vs2015`

## Installation

* `git clone https://github.com/pwa-builder/PWABuilder.git`, this repository
* change into the new directory
* `npm install`

## Running / Development

* `npm run dev`
* Visit your app at [http://localhost:3000](http://localhost:3000).

### Running Tests

* `npm test`

### Running Test Coverage

* `npm run cover`

### Running Test Coverage

* `npm install selenium-standalone@latest -g` _only once_
* `selenium-standalone install` _only once_
* `npm run e2e` 

> You need to have installed [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 

### Building

* `npm run build` (production)

### Serve

* `npm start` (doesn't compile the code)

## Further Reading / Useful Links

* [Vuejs](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/en/)
* [Nuxtjs](https://nuxtjs.org/)

