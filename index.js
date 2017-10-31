'use strict'

const spawn = require('cross-spawn-promise')
const npmRunPath = require('npm-run-path')

module.exports = (command, args, options) =>
  spawn(
    command,
    args,
    Object.assign(
      {
        stdio: 'inherit',
        env: npmRunPath.env(),
      },
      options
    )
  )
