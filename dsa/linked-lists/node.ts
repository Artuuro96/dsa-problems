export class Node {
  public value: number;
  public next: Node | null = null;
  constructor(value: number) {
    this.value = value;
  }
}