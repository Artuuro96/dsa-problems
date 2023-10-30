/*
Problem
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
*/

const clouds = [0,0,0,1,0,0]
const path:number[] = []

function jumpingOnClouds(clouds: number[]): { jumps: number; path: number[] } {
  // Write your code here
  let i = 0;
  let jumps = 0;
  while(i < clouds.length) {
      path.push(i);
      if(clouds[i+1] == 1) {
          i = i + 2;
          jumps++
        
          continue;
      } 
      if(clouds[i+1] == 0 && clouds[i+2] == 0) {
          i = i + 2
          jumps++;
        
          continue;
      }
      i = i + 1
      jumps++
  }
  return {
    jumps: jumps - 1,
    path,
  }
}

console.log(jumpingOnClouds(clouds))