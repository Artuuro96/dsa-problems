/*
Sum of digits
Given a number, N. Find the sum of all the digits of N
Input:
N = 12
Output:
3
Explanation:
Sum of 12's digits: 1+2=3
*/
const numStr = '12345';

function countDigits(i: number): number {
  if(i < 0) return 0;
  return parseInt(numStr[i], 10) + countDigits(i - 1);
}

console.log(countDigits(numStr.length - 1));