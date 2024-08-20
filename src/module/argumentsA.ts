//console.log(process.argv);
const args = process.argv.slice(1); // Separa os termos em arrays distintos.
//console.log(args);
const vasco = args [0].split('=')[0];
console.log(vasco);