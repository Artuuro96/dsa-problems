
/*
 * Escribe un algoritmo para eliminar los elementos duplicados en una Lista enlazada
 *
 * Ejemplo:
 *  Input: 1->2->2->3->4->1
 *  Output: 1->2->3->4
 *
 * Follow-up: ¿Cuál sería tu solución si no pudieras utilizar memoria adicional?
 */

import { Node } from './node';

export class LinkedList {
  public head: Node | null = null;
  constructor() {}

  private isEmpty(head: Node | null): boolean {
    return head === null ? true : false;
  }

  public removeDuplicated(): void {
    let current: Node | null = this.head;
    if(current == null) return;
    const valuesMap = new Set<number>();
    valuesMap.add(current.value);
    while(current !== null && current.next !== null){
      if(!valuesMap.has(current.next.value)) {
        valuesMap.add(current.next.value)
        current = current.next;
      } else {
        current.next = current.next.next;
      }
    }
  }

  public addNewNode(value: number): void {
    if(this.isEmpty(this.head)) {
      this.head = new Node(value);
      return;
    } 

    let current: Node | null = this.head;
    while(current !== null && current.next !== null) {
      current = current.next;
    }
    if(current !== null){
      current.next = new Node(value); 
    }
  }

  public print() {
    let current: Node | null = this.head;
    let list: string = '';
    while(current !== null && current.next != null){
      list += current.value.toString() + " -> "; 
      current = current.next;
    }
    console.log(list + current?.value + "-> END");
  }
}

function main() {
  const linkedList = new LinkedList();

  linkedList.addNewNode(1);
  linkedList.addNewNode(2);
  linkedList.addNewNode(2);
  linkedList.addNewNode(3);
  linkedList.addNewNode(4);
  linkedList.addNewNode(4);
  linkedList.addNewNode(5);
  linkedList.addNewNode(6);
  linkedList.addNewNode(1);
  linkedList.addNewNode(1);
  linkedList.addNewNode(1);
  linkedList.addNewNode(1);
  
  linkedList.print();
  
  linkedList.removeDuplicated();
  
  linkedList.print();
}

if (require.main === module) {
  main(); 
}

