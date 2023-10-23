
/*
 * Dado un String que solamente contiene los caracteres '(', ')', '{', '}', '[' y ']',
 * implementa un algoritmo para determinar si es válido.
 *
 * Ejemplo 1:
 *  Input: "([]){}"
 *  Output: true
 *
 * Ejemplo 2:
 *  Input: "({)}"
 *  Output: false
 */

import { Stack } from "./stack";
const openChars = [123,91,40];

function addClosedChar(stack: Stack, charCode: number) {
  if(charCode === 123) {
    stack.push(125);
  }
  if(charCode === 91) {
    stack.push(93);
  }
  if(charCode === 40) {
    stack.push(41);
  }
}

function isValidCharSequence(charSeq: string) {
  const stack = new Stack();
  for (const char of charSeq) {
    const charCode = char.charCodeAt(0);
    if(openChars.includes(charCode)) {
      addClosedChar(stack, charCode);
    } else {
      if(stack.isEmpty() || stack.pop() !== charCode) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(isValidCharSequence('{}[]()'));
console.log(isValidCharSequence('([{}])'));
console.log(isValidCharSequence('({})[]'));
console.log(isValidCharSequence('({})]['));