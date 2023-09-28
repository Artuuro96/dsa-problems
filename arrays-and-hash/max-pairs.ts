/* A coach of a school chess club wants to start a mentoring program for newer players.
Each player has an integer rating representing skill level. 
The coach would like to pair up students whose ratings differ by no less than a given minimum.
What is the maximum number of pairs that can be formed? 
Example n =6
rating = [1, 2, 3, 4, 5, 67
minDiff = 4
There are n = 6 players. Two pairs of players have a
difference of 4 or more: those with ratings (1, 5) and (2, 6).
*/

// O(N2)
export function maxPairs(ratings: number[], minDiff: number) {
	const pairs = new Set();
	const result: number[][] = [];
	let k = 0;
	for(let i = 0; i < ratings.length; i++) {
		for(let j = 0; j <ratings.length; j++) {
			if(Math.abs(ratings[i] - ratings[j]) >= minDiff) {
				if(!pairs.has(ratings[i]) && !pairs.has(ratings[j])){
					pairs.add(ratings[i]);
					pairs.add(ratings[j]);
					result.push([ratings[i], ratings[j]]);
					k++;
				}
			}
		}
	}
	if(pairs.size === 0){
		return {
			result: []
		}
	}
	return { pairs, result };
}

console.log(maxPairs([1,2,3,4,5,6], 4).result);
console.log(maxPairs([1,1,1,1], 4).result);
console.log(maxPairs([3,4,5,2,1,1], 3).result);

// Optimized function O(N)
export function maxPairsOptimized(ratings: number[], minDiff: number){
	const mapPairs = new Map<number, [number, number]>();
	ratings.forEach(rating => {
		const result = rating - minDiff;
		if(result > 0 && !mapPairs.has(result)) {
			mapPairs.set(result, [result, rating]);
		}
	}); 
	if(mapPairs.size === 0) return [];
	return Array.from(mapPairs.values());
}

console.log("Optimzed result: ", maxPairsOptimized([1,2,3,4,5,6], 4));
console.log("Optimized result: ", maxPairsOptimized([1,1,1,1], 4));
console.log("Optimized result: ", maxPairsOptimized([3,4,5,2,1,1], 3));



