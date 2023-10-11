'use restrict'

const net = require('net');
const strftime=require('strftime');
const port = process.argv[2];

net.createServer((socket) => {
    const datetime = strftime('%F %H:%M', new Date()); 
    socket.end(datetime + '\n');
}).listen(port);

