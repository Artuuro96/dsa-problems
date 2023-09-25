
/*
 * Un anagrama es una palabra creada a partir de la reordenación de las letras de otra palabra. Ej: saco - caso
 * Dado un array de strings, devuelve los anagramas agrupados. Cualquier orden es válido.
 *
 * Ejemplo:
 *  Input: words = ["saco", "arresto", "programa", "rastreo", "caso"].
 *  Output: [["saco", "caso"], ["arresto", "rastreo"], ["programa"]].
 * 
 * Algorithm
 * 1.- Create a new HashMap empty
 * 2.- For each word in the array received, we need to sort the word alphabetically, assign this the word sorted as the hash
 * in order to identify if the next word is an anagram
 * 3.- check in the hasmap if the hash already exist, if not, set the hash (word sorted alphabetically)
 * 4.- find the hash(word sorted) in hashmap and push the word as the key pair value in the map.
 * 5.- return the values of the map in an array
 */

const words = ["saco", "arresto", "programa", "rastreo", "caso"];

class Anagram {
  private sortWord(word: string): string {
    return word.split('').sort().join().toString();
  }

  findAndGruop(words: string[]): string[][]{
    const anagramMap = new Map<string, string[]>()
    for (let i = 0; i < words.length; i++) {
      const wordHashSorted = this.sortWord(words[i]);
      if(!anagramMap.has(wordHashSorted)){
        anagramMap.set(wordHashSorted, []);
      }
      anagramMap.get(wordHashSorted)?.push(words[i]);
    }
    return Array.from(anagramMap.values());
  }
}

const anagram = new Anagram();
console.log("======================== Solution 1 ==========================")
console.log("BIG O ===> O(N * Log N)")
console.log("RESULT ===> ", anagram.findAndGruop(words));


class GroupAnagramsSolution {
  groupAnagrams(strs: string[]): string[][] {
    if (!strs || strs.length === 0) return [];

    const anagramMap: Map<string, string[]> = this.buildAnagramMap(strs);
    return Array.from(anagramMap.values());
  }

  private buildAnagramMap(strs: string[]): Map<string, string[]> {
    const anagramMap = new Map<string, string[]>();
    for (const s of strs) {
      const hash = this.getAnagramHash(s);
      if (!anagramMap.has(hash)) {
        anagramMap.set(hash, []);
      }

      anagramMap.get(hash)?.push(s);
    }

    return anagramMap;
  }

  private getAnagramHash(s: string): string {
    const letterCount = Array(26).fill(0);
    for (const c of s) {
      letterCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return JSON.stringify(letterCount);
  }
}

const solution = new GroupAnagramsSolution();
const result = solution.groupAnagrams(words);
console.log("======================== Solution 2 (Optimized) ==========================")
console.log("BIG O ===> O(N) * O(c)")
console.log("RESULT ===> ", result);