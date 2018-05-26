var http = require('http'),
    server = http.createServer();

server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
    });
server.listen(9000);