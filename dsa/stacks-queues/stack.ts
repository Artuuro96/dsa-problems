import { Node } from "../linked-lists/node";

export class Stack {
  public top: Node | null = null;
  private size: number = 0;

  public push(value: number) {
    const newTop = new Node(value);
    newTop.next = this.top;
    this.top = newTop;
    /* to get the size of the stack */
    this.size++;
  }

  public pop(): number {
    if(this.top === null) {
      throw new Error('Empty Stack');
    }
    let topValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return topValue;
  }

  public print() {
    while (this.top !== null){
      console.log(this.top.value);
      this.top = this.top.next;
    }
  }

  public peek(): number {
    if(this.top === null) {
      throw new Error('Empty Stack');
    }
    return this.top.value;
  }

  public isEmpty(): boolean {
    return this.top == null;
  }

  public getSize(): number {
    return this.size;
  }
}

function main() {
  const stack = new Stack();
  console.log(stack.isEmpty());
  stack.push(3);
  stack.push(2);
  stack.push(1);
  stack.push(0);

  stack.pop();
  console.log(stack.isEmpty());
  stack.print();
}

if (require.main === module) {
  main(); 
}