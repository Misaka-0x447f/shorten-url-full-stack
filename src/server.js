var http = require('http');

console.log("hello, world!");

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world!');
    
}).listen(process.env.PORT || 8080);