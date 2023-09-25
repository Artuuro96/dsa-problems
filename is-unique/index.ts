/*
 * Dado un método que recibe una String, comprobar si todos los caracteres son únicos o no.
 *
 * isUnique("abcde") => true;
 * isUnique("abcded") => false;
 */

const MAX_CHAR_NUMBER = 128;

const isUnique = (word: string): boolean => {
  if(word.length > MAX_CHAR_NUMBER) {
    return false;
  }

  const characters = new Set<string>();
  for(let i = 0; i < word.length; i++) {
    if(characters.has(word[i])) {
      return false;
    }

    characters.add(word[i]);
  }
  return true;
}


console.log(isUnique("abcdefghijklmnñopqrstuvxyza"));