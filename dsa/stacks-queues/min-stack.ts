import { Stack } from "./stack";

/*
 * ¿Cómo diseñarías un Stack que además de las operaciones de push y pop también
 * contase con una operación para obtener el mínimo?
 */

export class StackMin {
  private minStack: Stack = new Stack();
  private valueStack: Stack = new Stack();

  public push(value: number) {
    this.valueStack.push(value);
    if(this.minStack.isEmpty() || this.minStack.peek() >= value){
      this.minStack.push(value);
    }
  }

  public pop(): number {
    let value = this.valueStack.pop();
    if(value === this.minStack.peek()){
      this.minStack.pop();
    }
    return value;
  }

  public getMin(): number {
    return this.minStack.peek();
  }
}

function main() {
  const stackMin = new StackMin();
  stackMin.push(2);
  stackMin.push(5);
  stackMin.push(1);
  stackMin.push(0);
  stackMin.push(4);

  stackMin.pop();
  stackMin.pop();

  console.log(stackMin.getMin());
}

if(require.main == module) {
  main();
}