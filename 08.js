#!/usr/bin/env node

const fs = require('fs')

fs.readFile('08.json', 'utf8', (err, data) => {
  console.log(data);
})
