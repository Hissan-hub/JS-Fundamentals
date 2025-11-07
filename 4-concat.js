const [, , arg1, arg2] = process.argv;

console.log(
  arg1 && arg2 ? `${arg1} ${arg2}` :
  arg1 ? arg1 :
  ''
);