/*
 * Escribe un algoritmo que realice la suma de dos listas que representan
 * dos enteros positivos. Las listas están en posición invertida.
 *
 * Ejemplo:
 *  Input: 1->2->4, 5->2->8
 *  Output: 6->4->2->1
 *  6421 + 825 = 7246
 */

import { LinkedList } from "./linked-list";
import { Node } from "./node";

function sumTwoLists(listA: Node | null, listB: Node | null): Node | null {
	let aux = new Node(-1);
	let currentAux = aux;
	let carry = 0;
	while(listA != null && listB != null) {
		let sum = 0;

		sum = listA.value + listB.value;

		if(carry == 1) {
				sum += 1
		}

		if(sum >= 10) {
				sum = Number(sum.toString().split('')[1]);
				carry = 1;
		} else {
				carry = 0;
		}

		aux.next = new Node(sum);
		listA = listA.next;
		listB = listB.next;
		aux = aux.next;
	}
	
	if(listA == null && listB != null) {
			aux.next = new Node(listB?.value + carry);
			aux = aux.next;
			listB = listB.next;
			aux.next = listB;
	}

	if(listB == null && listA != null) {
			aux.next = new Node(listA?.value + carry);
			aux = aux.next;
			listA = listA.next;
			aux.next = listA;
	}
	return currentAux.next;
}

function main() {
    const linkedListA = new LinkedList();
	const linkedListB = new LinkedList();
	
	linkedListA.addNewNode(7);
	linkedListA.addNewNode(8);
	linkedListA.addNewNode(8);
	linkedListA.addNewNode(6);
    linkedListA.addNewNode(1);
    
	
	linkedListB.addNewNode(9);
	linkedListB.addNewNode(8);
	linkedListB.addNewNode(8);

	let res = sumTwoLists(linkedListA.head, linkedListB.head);
	
	let result = '';
	while(res != null && res.next != null) {
		result = result + res.value + '->'
		res = res.next
	}
	result = result + res?.value + '->END'
	console.log(result);
}

if(require.main == module) {
    main();
}