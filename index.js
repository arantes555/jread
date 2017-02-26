#!/usr/bin/env node
'use strict'
const jetpack = require('fs-jetpack')

const readJson = (file, keys) => {
  const data = jetpack.read(file, 'json')
  const toReturn = []
  keys.forEach(key => {
    let value = data
    key.split('.').forEach(subkey => {
      value = value[ subkey ]
    })
    toReturn.push(value)
  })
  return toReturn
}

module.exports = { readJson }

const main = () => {
  const args = process.argv
  const executable = args.shift()
  let file = args.shift()
  if (executable.endsWith('node')) file = args.shift() // if running as a node script, the 2nd arg will be the script name
  readJson(file, args).forEach(result => console.log(result))
}

if (require.main === module) main()
