'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN: '"783b52068495b5ae7da22be41f1c3c62bbeab72c"',
  API: '"https://api.github.com/"'
})
