'use strict'

const http = require('http');
const bl = require('bl');

var urls=[];
urls.push(process.argv[2], process.argv[3], process.argv[4]);
var results = [];

urls.forEach((url,index) => {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            if (err) console.error(err);
            results.splice(index, 0, data.toString());
            if (results.length >= 3) {
                 results.forEach(data => { console.log(data) });
            }
        }));
    });
});



// urls.forEach((url, index) => {
//     http.get(url, (res) => {
//         res.setEncoding('utf8');
//         var raw = '';
//         res.on('data', data => {
//             raw += data;
//         });
//         res.on('end', () => {
//             results.splice(index, 0, raw);
//             if (results.length >= 3) {
//                 results.forEach(data => { console.log(data) });
//             }
//         });
//     });
// });

