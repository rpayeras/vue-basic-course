'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TOKEN: '"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"',
  API: '"https://api.github.com/"'
})
