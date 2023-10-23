
/**
 * Given an string str, return true if it is a palindrome if not return false
 * @param str 
 * @algorithm
 * 1. if length of str is 1 or 2 return true
 * 2. determine if the length of str is pair
 *  2.1 we can start to compare the first index with the last one increasing 1 per loop the index and decreasing 1 lastIndex
 *  2.3 we can iterate while index === last,  
 * 3. else means 
 *  3.1 the stop condition will be index != Math.floor(length / 2) + 1
 *  3.2 we can start to compare the first index with the last one increasing 1 per loop the index and decreasing 1 lastIndex
 *  3.3 we can iterate while index === last, 
 */

function isPalindrome(str: string) {
  let start = 0;
  let last = str.length - 1;
  let arrStr = str.split('');
  let mid;
  if(str.length % 2 === 0) {
    mid = str.length / 2;
  } else {
    mid = Math.floor(str.length / 2) + 1;
  }

  while(start !== mid) {
    if(arrStr[start] !== arrStr[last]) {
      return false
    } 
    start++;
    last--;
  }
  return true;
}

console.log(isPalindrome('logracasillasallisacargol'));
console.log(isPalindrome('ana'));
console.log(isPalindrome('estonoesunpalindromo'));