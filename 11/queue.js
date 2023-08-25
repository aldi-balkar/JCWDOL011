// Description: Implement a queue class with enqueue and dequeue methods. The queue can be initialized with an array.
class Queue {
  constructor() {
    this.queue = [];
  }
  // enqueue method adds an item to the end of the queue
  async enqueue(item) {
    this.queue.push(item);
  }
  // dequeue method removes an item from the front of the queue
  async dequeue() {
    return this.queue.shift();
  }
  // run method prints all items in the queue and removes them one by one
  async run() {
    console.log(`[LOG] Print all data in queue`);
    while (this.queue.length > 0) {
      const item = await this.dequeue();
      const delay = Math.floor(Math.random() * 10) + 1;
      setTimeout(() => {
        console.log(`[LOG] Queue: ${item} done in ${delay} seconds`);
      }, delay * 1000);
    }
  }

  get size() {
    return this.queue.length;
  }
}

module.exports = Queue;