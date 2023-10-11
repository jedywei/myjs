'use strict'
const fs = require('fs');
const path = require('path');
module.exports = function (apath, aext, acallback) {
    fs.readdir(apath, (err, files) => {
        if (err) { return acallback(err); }
        files = files.filter(file => {
            return path.extname(file) === '.' + aext;
        });
        acallback(null, files);
    });
}
// module.exports = function (apath, aext, callback) {
//     const ext = '.' + aext;
//     fs.readdir(apath, (err, files) => {
//         let matches = [];
//         if (err) { return callback(err); } 
//         files.forEach(file => {
//             if (path.extname(file) == ext)
//                 matches.push(file);
//         });
//         callback(null, matches);
//     });
// }
