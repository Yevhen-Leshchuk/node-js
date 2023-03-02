const Calc = require('calc-js').Calc;

console.log(process.argv);
const [, , a, b] = process.argv;

console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
