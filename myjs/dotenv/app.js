require('dotenv').config();
const config = require('config');
console.log(process.env.mybankaccount);
console.log(process.env.myboy);
console.log(process.env.CDPATH);

const password = config.get('password');
console.log(process.env.mybankaccount + ': ' + password);

try {
    console.log(config.get('Customer.dbConfig'))
} catch(err) {
    console.error(err);
}