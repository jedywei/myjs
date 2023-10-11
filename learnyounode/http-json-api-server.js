'use strict'

const http = require('http');
const url = require('url');
const port = process.argv[2];

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

http.createServer((req, res) => {
    const api = url.parse(req.url, false).pathname;
    const params = new URLSearchParams(url.parse(req.url, false).search);
    let iso = undefined;
    if (params) 
        iso = params.get('iso');

    // console.debug('url: %s', req.url);
    // console.debug('url.search: %s', url.parse(req.url, true).search);
    // console.debug('params: %o', params);
    // console.debug('api: %s', api);
    // console.debug('iso: %s', iso);

    if (!api || !iso) {
        // res.writeHead(400, {'context-type': 'text/plain'} );
        res.writeHead(400);
        res.end('Query command like: /api/parsetime?iso=..., or /api/unixtime?iso=...\n');
        return;
    }

    const date = new Date(iso);
    const now = new Date();
    // console.debug('now: %s', now);
    // console.debug('date: %s', date);
    // console.debug('date: %s', isValidDate(date));
    if (! isValidDate(date)) {
        res.writeHead(400);
        res.end('invalid iso date time format.\n');
        return;
    }

    let jobj = {};

    if (api == '/api/parsetime') {
        jobj.hour = date.getHours();
        jobj.minute = date.getMinutes();
        jobj.second = date.getSeconds();

    } else if (api == '/api/unixtime') {
        jobj.unixtime = date.getTime();
    } else {
        res.writeHead(400);
        res.end('invalid request api\n');
        return;
    }
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(jobj) + '\n');
    
}).listen(port);
