class Stack {
  constructor() {
    this.items = [3, 4, 3, 5, 9];
  }

  find(item) {
    let pos;
    const result = this.items.find((element, index) => {
      pos = index;
      return element == item;
    });

    // Return current position if found. Otherwise, -1 is returned
    if (result === undefined) return -1;
    return pos;
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.items.length === 0) return 'Method cannot be used when the current array is empty';
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
