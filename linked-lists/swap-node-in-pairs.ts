import { LinkedList } from "./linked-list";
import { Node } from "./node";

/* 
  1->2->4->6->8->null    
  aux = current.next
  current.next = aux.next
  aux.next = current
  current = current.next
  aux = current.next.next

*/

function swapNodeInPairs (list: Node | null): Node | null {
  let current = list;
  let item = 0;
  let tmp;
  let start = new Node(-1)

  while(current != null && current.next != null){
    tmp = current.next.next;
    current.next.next = current;
    current = current.next;
    if(current.next?.next)
      current.next.next = tmp;
    if(item === 0) {
      start.next = current
    }
    current = tmp;
    item++;
  }

  return start.next
}

function main() {
  const linkedList = new LinkedList();
	
	linkedList.addNewNode(1);
	linkedList.addNewNode(2);
	linkedList.addNewNode(4);
	linkedList.addNewNode(6);
  linkedList.addNewNode(8);


	let res = swapNodeInPairs(linkedList.head);
	
  print(res)
}

function print(res: Node | null) {
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
