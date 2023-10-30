import { Node } from "../linked-lists/node";

class Queue {
  private first: Node | null = null;
  private last: Node | null = null;

  /**
   * @name add
   * @param value - the value which the new node node will have
   * @algorithm
   * 1.- create new node to add it in the queue
   * 2.- check if the last is not pointing to null
   *  2.1- we need to link last.next to the new node we want to add
   * 3.- since the new node must be always the last element in the queue, last = new node (newLast)
   * 4.- if first is null, means the queue was empty.
   *  4.1- so first = last
  */
  public add(value: number) {
    const newLast = new Node(value);
    if(this.last !== null) {
      this.last.next = newLast;
    }
    this.last = newLast

    if(this.first === null) {
      this.first = this.last;
    }
  }

  /**
   * @name remove
   * @param value - the value which the new node node will have
   * @algorithm
   * 1.- check if the queue is empty
   *  1.1.- Return empty list
   * 2.- move first pointer to the next one
   * 3.- if the next one to the new first is the last one, move last the new first
  */
  public remove() {
    if(this.first === null) {
      console.log("Empty Queue");
      return;
    }
    this.first = this.first.next;
    if(this.first?.next === null) {
      this.last = this.first;
    }
  }

  /**
   * @name peek
   * @algorithm
   * 1.- check if the queue is empty
   *  1.1.- Return empty list
   * 2.- return the first value
   */
  public peek() {
    if(this.first === null) {
      throw new Error('Empty Queue');
    }
    return this.first.value
  }

  public isEmpty(){
    return this.first === null;
  }

  public print() {
    let queueString = '[last]';
    while (this.first !== null){
      queueString = queueString.replace('[last]', `[last]->[${this.first.value}]`)
      this.first = this.first.next;
    }
  }
}

function main() {
  const queue = new Queue();
  queue.add(1);
  queue.add(2);
  queue.add(3);
  queue.add(4);
  queue.remove();
  queue.print();
}

if (require.main === module) {
  main(); 
}