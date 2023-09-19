#!/usr/bin/node
const filePath = process.argv[2];
const str = process.argv[3];
const fs = require('fs');

fs.writeFile(filePath, str, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
