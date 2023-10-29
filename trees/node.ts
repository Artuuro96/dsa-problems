export class Node {
  value: number;
  left: Node | null = null;
  right: Node | null = null;;

  constructor(value: number) {
    this.value = value;
  }
}