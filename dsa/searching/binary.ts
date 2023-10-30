function findElement(arr: number[], elem: number): number | null {
  let start = 0;
  let end = arr.length;
  let found = false;
  let count = 0;
  while(!found) {
    let mid = Math.floor(((end + start) / 2));
    if(start === mid){
      found = true
    }
    if(arr[mid] == elem) {
      return mid
    }
    if(arr[mid] < elem) {
      start = mid;
    } else {
      end = mid;
    }
    count++
  }
  return null;
}

/*
function binarySearch(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}
*/

let arrGen: number[] = []
for(let i  = 0; i < 10000; i++) {
  arrGen.push(i)
}
arrGen = arrGen.sort();

console.time("execution binary search time");
console.log(findElement(arrGen, 9000));
console.timeEnd("execution binary search time");

console.time("execution binary search time");
console.log(findElement(arrGen, 9000));
console.timeEnd("execution binary search time");

console.time("execution force search time");
console.log(arrGen.find((i, index) => {
  return i === 9000 
}))
console.timeEnd("execution force search time");