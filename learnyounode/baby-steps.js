'use strict'
let total = 0;
// process.argv.slice(2).forEach((element, index) => {
//     total = total + Number(element);
//     // console.log((index+1) + "->" + element, "sum:" + total);
// });

for ( let i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}

console.log(total);

