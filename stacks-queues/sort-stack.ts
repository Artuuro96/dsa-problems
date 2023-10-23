/*
 * Ordena un Stack de forma que los elementos más pequeños queden en el tope del Stack.
 * Puedes usar un Stack adicional, pero no está permitido copiar los elementos a otra
 * estructura de datos.
 *
 * Ejemplo:
 *  Input: (tope) 5->1->4->2
 *  Output: (tope) 1->2->4->5
 * 
 * while the input stack is not empty 
 * 1. Pop from the input stack the element
 * 2. Save the element that you pop from the input stack in a tmp variable
 * 3. if the sorted stack is empty OR tmp is less than the peek from sorted stack
 *   3.1 push the tmp into the sorted stack
 * 4. while tmp is bigger than the peek of the sorted stack
 *   4.1 por the element from the sorted stack 
 *   4.2 push back into input stack
 * 5. push tmp into the sorted stack
 */

import { Stack } from "./stack";

function sortStack(stack: Stack): Stack {
  const sortedStack = new Stack();
  while(!stack.isEmpty()) {
    let tmp = stack.pop();
    while (!sortedStack.isEmpty() && tmp > sortedStack.peek()) {
      stack.push(sortedStack.pop());
    }
    sortedStack.push(tmp);
  }
  return sortedStack;
}

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(1);
stack.push(5);
stack.push(3);
console.log(sortStack(stack).print());