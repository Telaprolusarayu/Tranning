var ur1 = require('ur1');
var adr = "https://www.facebook.com?year=2024&month=august";
var q = ur1.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata = q.query;
console.log(qdata.month);
