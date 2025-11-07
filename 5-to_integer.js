const [, , arg] = process.argv;
const num = parseInt(arg, 10);

console.log(!isNaN(num) ? `My number: ${num}` : 'Not a number');