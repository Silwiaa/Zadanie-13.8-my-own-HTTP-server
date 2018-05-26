var http = require('http'),
    server = http.createServer();

server.on('request', function (request, response) {
    response.write('Hello world!');
    response.write('<h1>This is awesome!</h1>');
    response.end();
    });
server.listen(9000);