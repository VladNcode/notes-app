const validator = require('validator');
const notes = require('./notes');

const msg = notes();

console.log(msg);

console.log(validator.isEmail('email@example.com'));
console.log(validator.isURL('example.com'));
