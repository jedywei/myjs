'use strict'
const http = require('http');
const url = process.argv[2];
http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', console.log);
    res.on('error', console.error);
}).on('error', console.error);

// http.get(url, (res) => {
//     const { statusCode } = res;
//     res.setEncoding('utf8');
//     let raw = '';
//     res.on('data', data => {
//         raw+= data + '\n';
//     });
//     res.on('end', () => {
//         console.log(raw);
//     });
// });
