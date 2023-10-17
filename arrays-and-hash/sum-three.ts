/*
Given an array arr[] of size n and an integer X. Find if there’s a triplet in the array which sums up to the given integer X.

Examples: 
Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
Output: 12, 3, 9 
Explanation: There is a triplet (12, 3 and 9) present 
in the array whose sum is 24. 

Input: array = {1, 2, 3, 4, 5}, sum = 9 
Output: 5, 3, 1 
Explanation: There is a triplet (5, 3 and 1) present 
in the array whose sum is 9.

*/

function sumThree(arr: number[], sum: number): number[] | null {
  for (let i = 0; i < arr.length; i++){
    const compMap = new Map<number, number>();
    let res = sum - arr[i];
    for (let j = i + 1; j < arr.length; j++){
      if(compMap.has(arr[j])) {
        let k = compMap.get(arr[j]) as number
        return [arr[i], arr[k], arr[j]];
      }
      let complement = res - arr[j];
      compMap.set(complement, j);
    }
  }
  return null;
}

console.log(sumThree([12,3,4,1,6,9], 24))
