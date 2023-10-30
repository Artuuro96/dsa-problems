/*
You are given an integer N. Print numbers from 1 to N without the help of loops.
Use recursion to solve this problem
*/

function printNumbers(limit: number) {
  if(limit > 0) {
    printNumbers(limit - 1);
    console.log(limit);
  }
}

printNumbers(10);