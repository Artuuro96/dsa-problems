/* 
  problem:
  https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup 
*/
function stockMerchant(arr: number[]){
  let pairs: {[key: number]: number} = {};
  let count = 0;

  arr.forEach(a => {
    pairs[a] = pairs[a] == undefined ? 1 : pairs[a] + 1
  });
  
  Object.keys(pairs).forEach(key => {
    if(Math.floor(pairs[Number(key)] / 2) != 0){
      count += Math.floor(pairs[Number(key)] / 2)
    }
  });

  return count;
}


console.log(stockMerchant([1,2,1,2,1,3,2]));