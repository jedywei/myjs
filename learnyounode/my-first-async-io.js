'use strict'
const fs = require('fs');
fs.readFile(process.argv[2], (err, data) => {
    if (err) return console.error(err);
    const len = data.toString().split('\n').length;
    console.log(len-1);
});

