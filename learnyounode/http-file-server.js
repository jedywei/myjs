'use strict'

const http = require('http');
const path = require('path');
const fs = require('fs');
const port = process.argv[2];
const dir = process.argv[3];


http.createServer((req, res) => {
    const file = path.join(dir, req.url);
    // console.log(file);
    var readStream = fs.createReadStream(file);
    res.writeHead(200, { 'content-type': 'text/plain' });
    // res.write('this is a book\n');
    readStream.pipe(res);
    // readStream.on('end', ()=> {
    //     res.end();
    // });
}).listen(port);
