//console.log(process.argv);
//const args = process.argv.slice(1); // Separa os termos em arrays distintos.
//console.log(args);
//const vasco = args [0].split('=')[0];
//console.log(vasco);

const argv = require('minimist2')(process.argv.slice(2));
console.log(argv);
const a = parseFloat(argv['a']);
const b = parseFloat(argv['b']);

import { aSmallTest } from "./moduleC";
const SmallTest = new aSmallTest();
SmallTest.showResult(a, b);

// Formas de uso do Minimist 2:

/* 

$ node example/parse.js -a beep -b boop
{ _: [], a: 'beep', b: 'boop' }


$ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' } */ 