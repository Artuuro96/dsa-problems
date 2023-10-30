/*
problem:
https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/

function countingValleys(steps: number, path: string): number {
  // Write your code here
  let position = 0;
  let valleys = 0;
  for(let step = 0; step<path.length; step++) {
    if(path[step] === 'D') {
      position--;
    }
    if(path[step] === 'U') {
      let previousPos = position;
      position++;
      if(previousPos < 0 && position === 0) {
        valleys++
      }
    }
  }
  return valleys
}


console.log(countingValleys(12, 'DDUUDDUDUUUD'))
console.log(countingValleys(8, 'UDDDUDUU'))