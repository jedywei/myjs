'use strict'
const fs = require('fs');
const path = require('path');
function filtered_ls(apath, aext) {
    fs.readdir(apath, { withFileTypes: true }, (err, dirents) => {
        if (err) return console.error(err);
        dirents.forEach(dirent => {
            if (path.win32.extname(dirent.name) == ext)
                console.log(dirent.name);
        });
    });
}

var ext = '.' + process.argv[3];
filtered_ls(process.argv[2], ext);
