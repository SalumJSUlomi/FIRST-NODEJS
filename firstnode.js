var http = require('http');
var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Tanzania');
  res.end();
});

//port
server.listen(8000);