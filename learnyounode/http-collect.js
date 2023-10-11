'use strict'
const http = require('http');
const bl = require('bl');
const url = process.argv[2];
http.get(url, (res) => {
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));

});

// http.get(url, (res) => {
//     res.setEncoding('utf8');
//     let raw = '';
//     res.on('data', data => {
//         raw+= data;
//     });
//     res.on('end', () => {
//         console.log(raw.length);
//         console.log(raw);
//     });
// });
