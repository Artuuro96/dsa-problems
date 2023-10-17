console.log('Inicio del programa');

setTimeout(() => {
  console.log('setTimeOut');
},0)

setImmediate(() => {
  console.log('setImmediate');
});

console.log('Fin del programa');

process.nextTick(() => {
  console.log('process.nextTick');
});