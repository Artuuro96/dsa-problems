/* 
Given an array of n integers arr, and a sum k, you need to return count of triplets with the sum k(Duplicate triplets are allowed).

arr[] : {1,3,2,4,1,3,4,2}, k = 5
Output: 4 //{1,2,2}, {2,1,2}, {1,3,1}, {1,1,3}
above 4 Outputs does not include permutations, its 4 times because every time we are considering different index of elements. (1,2 and 3 appear twice, so considering different indices everytime, we get output 4)
*/

function findTriplets(arr: number[], sum: number) {
  let triplets: Array<Array<number>> = [];
  for (let i = 0; i < arr.length; i++) {
    let res = sum - arr[i];
    let found = false;
    let j = 0;
    const compMap = new Map<number, number>();
    while(j < arr.length && !found){
      if(j != i) {
        if(compMap.has(arr[j])) {
          let k = compMap.get(arr[j]) as number
          triplets.push([i, k, j]);
          found = true;
        } else {
          let complement = res - arr[j];
          compMap.set(complement, j)
        }
      }
      j++;
    }
  }
  const tripletMap = new Set<string>();
  triplets.forEach(triplet => {
    tripletMap.add(JSON.stringify(triplet.sort()));
  })
  console.log('========>', tripletMap.values())
  console.log('========>', triplets)
}

findTriplets([1,3,2,4,1,3,4,2], 5)