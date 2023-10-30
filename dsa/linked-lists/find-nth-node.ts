/*
 * Dada una lista enlazada simple y un valor N, devuelve el nodo N empezando por el final
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 1
 *  Output: 4
 */

import { LinkedList } from "./linked-list";
import { Node } from "./node";

export function findNthNode(list: Node | null, nth: number): Node | null {
	let current = list;
	let nodeToFind = 0;
	let auxCount = 0;
	let length = 0;
  while(current != null && current.next != null) {
		length++;
		current = current.next;
	} 
	nodeToFind = length - nth;
	current = list;
	while(auxCount != nodeToFind && current != null && current.next != null) {
		current = current.next;
		auxCount++;
	}
	return current;
}

export function findNthNodeOpt(list: Node | null, nth: number): Node | null {
	let current = list;
	let aux = current;
	let auxCounter = 0;
	while(current != null && current.next != null && aux!= null){
		if(auxCounter >= nth){
			aux = aux.next;
		}
		current = current.next;
		auxCounter++;
	}
	return aux;
}

function main() {
  const linkedList = new LinkedList();

  linkedList.addNewNode(1);
  linkedList.addNewNode(2);
  linkedList.addNewNode(3);
  linkedList.addNewNode(4);
  linkedList.addNewNode(5);
  linkedList.addNewNode(6);
  linkedList.addNewNode(7);
  linkedList.addNewNode(8);
  
  const node = findNthNode(linkedList.head, 1);
	const node2 = findNthNodeOpt(linkedList.head, 1)
	console.log('Node found ===>', node);
	console.log('Node found Optimized ===>', node2);
}

if (require.main === module) {
  main(); 
}
