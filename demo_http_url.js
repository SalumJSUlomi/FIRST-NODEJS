var fs = require('fs');
fs.writeFile('myfile.txt', 'Hello Tanzania', (err) => {
  if (err) throw err;
  console.log('Saved...');
})