/*
 * Dado un array de números enteros y un target, retorna los índices de dos
 * números para los que la suma de ambos sea igual al target.
 *
 * Puedes asumir que hay solamente una solución.
 *
 * Ejemplo 1:
 *  Input: nums = [9,2,5,6], target = 7
 *  Output: [1,2]
 *  Explicación: nums[1] + nums[2] == 7, devolvemos [1, 2].
 *
 * Ejemplo 2:
 *  Input: nums = [9,2,5,6], target = 100
 *  Output: null
 * 
 * Algorithm
 * 
 * 1. Iterate the array and take the first number.
 * 2. While the result is different from 7, try the different sum of combinations of the array elements in search of one equal to 7
 * 3. If there is no sum of two items that is equal to 7, return false.
 */

const calculateSumTwo = (arrayNumber: number[], target: number): any => {
  const complementMap = new Map<number, number>();
  for(let i = 0; i < arrayNumber.length; i++) {
    if(complementMap.has(arrayNumber[i])) {
      return [i, complementMap.get(arrayNumber[i])]
    }
    const complement = target - arrayNumber[i];
    complementMap.set(complement, i)
  }
  return complementMap;
}

console.log(calculateSumTwo([9,2,6,7,4,3], 8))
