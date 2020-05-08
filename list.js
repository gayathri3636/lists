//Adding new data to linked list

const head = Symbol('head');

class LinkedList {
  constructor() {
    this[head] = null;
  }

  add(data) {
    const newNode = new LinkedListNode(data);
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

//Retrieving data from list

class LinkedList {
  get(index) {
    if (index > -1) {
      let current = this[head];
      let i = 0;
      while (current !== null && i < index) {
        current = current.next;
        i++;
      }
      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }
}
