var net = require('net');
var server = net.createServer((socket) => {
	socket.write('hello\n');
	socket.write('world\n');
	socket.on('data', (data) => {
		socket.write(data);
	});
});
server.listen(8000);
