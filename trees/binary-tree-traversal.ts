import { Node } from "./node";

/*
*        4
*     2     7
*   1   3  6  9
*/

export class BinaryTreeTraversal {
  static inOrderTraversal(node: Node | null) {
    if(node != null) {
      this.inOrderTraversal(node.left);
      console.log(node.value, ' ');
      this.inOrderTraversal(node.right);
    }
  }

  static preOrderTraversal(node: Node | null) {
    if(node != null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  static postOrderTraversal(node: Node | null) {
    if(node != null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value + ' ');
    }
  }
}

const node = new Node(4);
node.left = new Node(2);
node.left.right = new Node(3);
node.left.left = new Node(1);
node.right = new Node(7);
node.right.right = new Node(9);
node.right.left = new Node(6);

BinaryTreeTraversal.inOrderTraversal(node);
BinaryTreeTraversal.postOrderTraversal(node);
BinaryTreeTraversal.preOrderTraversal(node);



