var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer((req, res) => {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/USER/Desktop/nodejs/img/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, (err) => {
        if (err) throw err;
        res.write('File Uploaded and Moved');
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">');
    res.write('<input type = "file" name = "filetoupload" required><br>');
    res.write('<input type = "submit">');
    return res.end();
  }
}).listen(7000);