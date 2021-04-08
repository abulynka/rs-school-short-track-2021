const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.node = new ListNode();
    this.firstNode = this.node;
    this.nodeSize = 0;
  }

  get size() {
    return this.nodeSize;
  }

  enqueue(element) {
    this.node.value = element;
    this.node.next = new ListNode();
    this.node = this.node.next;
    ++this.nodeSize;
  }

  dequeue() {
    const { value } = this.firstNode;
    this.firstNode = this.firstNode.next;
    --this.nodeSize;
    return value;
  }
}

module.exports = Queue;
