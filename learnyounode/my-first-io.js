const fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
const str = buffer.toString();
const strs = str.split('\n');
const len = strs.length -1;
console.log(len);

