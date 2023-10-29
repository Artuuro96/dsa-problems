/**
 * totalSum = i
 */
const numbers = [10,10,10,10,10];

function sumArray(i: number): number {
  if(i >= 0) {
    return numbers[i] + sumArray(i - 1);
  }
  return 0;
}


console.log(sumArray(numbers.length-1));