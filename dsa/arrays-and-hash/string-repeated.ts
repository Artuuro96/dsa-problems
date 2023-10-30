/*
Problem
https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/

function repeatedString(s: string, n: number): number {
  // Write your code here
  const wordsRepeated = Math.floor(n / s.length);
  const lastWordRepIndex = wordsRepeated * s.length;
  const remainingWords = n - lastWordRepIndex;
  let count = s.split('a').length - 1;
  count = wordsRepeated * count;
  for(let i = 0; i < remainingWords; i++){
      if(s[i] == 'a') {
          count++
      }
  }
  return count;
}

console.log(repeatedString("abcac", 20))