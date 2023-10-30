/*
 * Escribe un algoritmo para combinar dos listas enlazadas simples ordenadas.
 * El resultado debe ser una única lista enlazada ordenada. Devuelve su head.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2->3->5
 *  Output: 1->2->2->3->4->5->6
 */


import { LinkedList } from "./linked-list";
import { Node } from "./node";

export function mergeLinkedList(listA: LinkedList, listB: LinkedList): LinkedList {
	const mergedList = new LinkedList();
	let currentA = listA.head;
	let currentB = listB.head;
	let currentMerged = mergedList.head;

	while(currentA != null && currentB != null) {
		if(currentA.value <= currentB.value) {
			mergedList.addNewNode(currentA.value);
			currentA = currentA.next;
		} else {
			mergedList.addNewNode(currentB.value);
			currentB = currentB.next;
		}

		if(currentMerged == null) {
			currentMerged = mergedList.head;
		} else {
			currentMerged = currentMerged.next;
		}
	}

	if(currentB == null && currentMerged != null) {
		currentMerged.next = currentA;
	}

	if(currentA == null && currentMerged != null) {
		currentMerged.next = currentB;
	}

	return mergedList;
}

export function mergeLinkedListOpt(listA: Node | null, listB: Node | null): Node | null {
	let aux = new Node(-1);
	let current = aux;
	while(listA != null && listB != null) {
		if(listA.value <= listB.value) {
			current.next = listA;
			listA = listA.next;
		} else {
			current.next = listB;
			listB = listB.next;
		}

		current = current.next;
		if(listA == null){
			current.next = listB;
		}
		if(listB == null){
			current.next = listA;
		}
	}

	return aux.next;
}

function main() {
	const linkedListA = new LinkedList();
	const linkedListB = new LinkedList();
	
	linkedListA.addNewNode(1);
	linkedListA.addNewNode(2);
	linkedListA.addNewNode(4);
	linkedListA.addNewNode(6);
	linkedListA.addNewNode(7);
	
	linkedListB.addNewNode(2);
	linkedListB.addNewNode(3);
	linkedListB.addNewNode(5);
	linkedListB.addNewNode(8);
	
	linkedListA.print();
	linkedListB.print();
	
	const mergedList = mergeLinkedList(linkedListA, linkedListB);
	const mergedListNodes = mergeLinkedListOpt(linkedListA.head, linkedListB.head);

	mergedList.print();
	console.log(JSON.stringify(mergedListNodes))
}

if (require.main === module) {
  main(); 
}
