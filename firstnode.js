var http = require('http');
var time = require('./myfirstmodule');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`The Date and Time are Currently: ${time.myDateTime()}`);
  res.end();
}).listen(8000);