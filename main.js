class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const appendNode = new Node(value);
    let currNode = this.head;

    if (!currNode) {
      // If empty node
      currNode = appendNode;
    } else {
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = appendNode;
    }
    this.length += 1;
  }

  prepend(value) {
    const prependNode = new Node(value);
    prependNode.nextNode = this.head;
    this.head = prependNode;
    this.length += 1;
  }

  // Returns the total number of nodes in the list:
  size() {
    let count = 1; // Accounts for this.head
    let current = this.head;

    if (!current) {
      return 0;
    }

    while (current.next) {
      count += 1;
      current = current.next;
    }
    return `Number of Nodes: ${count}`;
  }

  // Returns the first node in the list:
  head() {
    const currNode = this.head;

    return currNode ? currNode.value : 0;
  }

  // Returns the last node in the list:
  tail() {
    let currNode = this.head;

    if (!currNode) {
      return null;
    }
    // Traverse to the end of the list:
    while (currNode.next) {
      currNode = currNode.next;
    }
    return `Last node value: ${currNode.value}`;
  }

  // Returns the node at the given index:
  at(index) {
    let currNode = this.head;
    let count = 0;

    while (count < index) {
      currNode = currNode.next;
      count += 1;
    }
    return currNode.value;
  }

  // Removes the last element from the list:
  pop() {
    let prevNode = this.head;
    let currNode = this.head.next;

    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
    this.length -= 1;
  }

  // Returns true if the passed in value is in the list and otherwise returns false:
  contains(value) {
    let currNode = this.head;

    if (!currNode) {
      return false;
    }

    while (currNode) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }

  // Returns the index of the node containing value, or null if not found:
  find(value) {
    let currNode = this.head;
    let count = 0;

    if (!currNode) {
      return null;
    }

    while (currNode) {
      if (currNode.value === value) {
        return count;
      }
      count += 1;
      currNode = currNode.next;
    }
    return null;
  }

  // Print out linked list objects as strings for console viewing:
  toString() {
    let currNode = this.head;
    let string = "";

    while (currNode) {
      string += `${currNode.value} => `;
      currNode = currNode.next;
    }
    return `${string}null`;
  }

  // Insert a new node with the provided value at the given index:
  insertAt(value, index) {
    let currNode = this.head;
    let prevNode;
    let count = 0;

    const newNode = new Node(value);

    while (count < index) {
      prevNode = currNode;
      count += 1;
      currNode = currNode.next;
    }
    newNode.next = currNode;
    prevNode.next = newNode;
    this.length += 1;
  }

  // Removes the node at the given index;
  removeAt(index) {
    let currNode = this.head;
    let prevNode;
    let count = 0;

    while (count !== index) {
      prevNode = currNode;
      currNode = currNode.next;
      count += 1;
    }
    prevNode.next = currNode.next;
    this.length -= 1;
  }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
