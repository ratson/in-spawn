# in-spawn

Spawn child process as promise, including node_modules/.bin.

## Installation

```
npm install in-spawn --save
```

## Usage

<!-- eslint-disable strict -->

```js
const spawn = require('in-spawn')

spawn('ava', ['--version'])
```
