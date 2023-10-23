console.log('Start of the program');

setTimeout(() => {
  console.log('setTimeOut');
},0)

setImmediate(() => {
  console.log('setImmediate');
});

console.log('End of the programa');

process.nextTick(() => {
  console.log('process.nextTick');
});