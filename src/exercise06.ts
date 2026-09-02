export class Stack<T> {
  private items: T[] = []; // internal array to implement stack. to hold items of generic type T

  // add item to end of array
  public push(item: T): void {
    this.items.push(item);
  }

  // return item from end of array
  public pop(): T | undefined {
    return this.items.pop();
  }

  // return last item in array without removing(popping) it
  public peek(): T | undefined {
    const lastIndex = this.items.length - 1; // get last index of array
    return this.items[lastIndex];
  }

  // return the size of the array
  public size(): number {
    return this.items.length;
  }
}
