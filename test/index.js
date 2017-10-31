import test from 'ava'

import spawn from '..'

test(async t => {
  const p = spawn('ava', ['--version'], {
    stdio: 'pipe',
    encoding: 'utf8',
  })
  t.truthy(p.childProcess)
  t.is((await p).trim(), '0.23.0')
})
