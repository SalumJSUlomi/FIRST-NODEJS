var url = require('url');

var addr = 'http://localhost:8000/default.html?year=2020&month=february';
var q = url.parse(addr, true);
console.log(q);
console.log(q.host);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata);
console.log(qdata.year);
