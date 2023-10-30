/*
 * Implementa una clase MyQueue utilizando dos stacks.
 *
 * Como Stack usaremos la Interfaz Deque, que proporciona las operaciones de una cola doblemente terminada,
 * permitiéndola usar como Pila o Cola (solo las operaciones de Pila están permitidas en este ejercicio).
 *
 * Java también tiene la clase Stack, pero su uso no está recomendado por extender de la clase Vector, que
 * no tiene demasiado sentido, y por ser una clase específica y no una interfaz. Si quieres saber más sobre
 * este tema puedes acceder al siguiente enlace:
 * https://stackoverflow.com/questions/12524826/why-should-i-use-deque-over-stack
 */

import { Stack } from "./stack";

class QueueWithStack {
  private firstStack: Stack = new Stack();
  private secondStack: Stack = new Stack();

  /** Impletment a logic equivalent to a queue using 2 stacks
   * @name add 
   * @algorithm
   * 1.- push the element in the first stack
   */
  public add(value: number) {
    this.firstStack.push(value);
  }

  /** Impletment a logic equivalent to a queue using 2 stacks
   * @name remove 
   * @algorithm
   * 1.- Check if he secondStack is empty
   *  1.1.- Move every element of the first stack to the second stack so the order of the second will be the first stack order inverted
   *  1.2.- Pop the element form the first stack
   * firstStack = top->[3]->[2]->[1]
   * 
   * secondStack = top->[1]->[2]->[3]
   * firstStack = top->null
   * 
   * 2.- Remove the top of the secondStack
   * firstStack = top->null
   * secondStack = top->[2]->[1]
   */
  public remove(){
    this.dumpElementsIntoSecStack();
    return this.secondStack.pop();
  }

  public peek() {
    this.dumpElementsIntoSecStack();
    return this.secondStack.peek();
  }

  public print() {
    let second = this.secondStack.top;
    let queueString = '[last]'
    while(second !== null) {
      queueString = queueString.replace('[last]', `[last]->[${second.value}]`);
      second = second.next;
    }
    console.log(queueString);
  }

  private dumpElementsIntoSecStack() {
    if(this.secondStack.isEmpty()) {
      while(!this.firstStack.isEmpty()) {
        this.secondStack.push(this.firstStack.pop());
      }
    }
  }
}

function main() {
  const queueWithStack = new QueueWithStack();
  queueWithStack.add(1);
  queueWithStack.add(2);
  queueWithStack.add(3);
  queueWithStack.add(4);
  queueWithStack.remove();
  queueWithStack.remove();
  queueWithStack.remove();
  queueWithStack.add(5);
  queueWithStack.add(6);
  queueWithStack.remove();
  queueWithStack.print();
  queueWithStack.remove();
  queueWithStack.print();
  queueWithStack.remove();
  queueWithStack.print();
}

if(require.main == module) {
  main();
}
