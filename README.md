# Node.js Tutorial
- Node.js  is an open source server enviroment.
- Node.js allows you to run Javascript on the server 
 ### Example
var http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}).listen(6000)