#!/usr/bin/env node
'use strict';
const meow = require('meow');
const exec = require('child_process').exec;

meow(`
  Usage
    $ nodeinit
`);

exec('git init', (err, stdout, stderr) => {
  if(err) {
    console.log('git error', err);
    process.exit(0);
  }
});

exec('gibo Node >> .gitignore', (err, stdout, stderr) => {
  if(err) {
    console.log('gibo error > ', err);
    process.exit(0);
  }
});
