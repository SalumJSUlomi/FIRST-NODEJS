var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  var data = `<html>
  <body>
     <h1 style = "color:red">Hello Serengeti</h1>
     <p>The Big National Park in the World</p>
  </body>
  </html>`;
  fs.appendFile('myfile.html', data, (err) => {
    if (err) throw err;
    else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  })
}).listen(4000);
