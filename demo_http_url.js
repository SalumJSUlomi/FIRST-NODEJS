var fs = require('fs');
fs.unlink('demo_html.html', (err) => {
  if (err) throw err;
  console.log('File Deleted...')
});
