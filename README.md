# Node.js Tutorial

- Node.js is an open source server enviroment.
- Node.js allows you to run Javascript on the server

### Example

var http = require('http');
http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'}).listen(6000);

- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OSX etc).

## Why Node.js?

Node.js uses asychronous programming.
A common task for a web server can be to open a file on the server and return the content to the client.
