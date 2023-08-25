const queue = require("./queue");

// Main function to run the program
async function main() {
    const q = new queue();

    await q.enqueue("A");
    await q.enqueue("B");
    await q.enqueue("C");
    await q.enqueue("D");
    await q.enqueue("E");
    await q.enqueue("F");
    await q.enqueue("G");
    await q.enqueue("H");
    await q.enqueue("I");
    await q.enqueue("J");

    await q.run();
}

// Run main function and catch any unhandled promise rejections 
(async () => {
    try {
        await main();
    } catch (error) {
        console.error(error);
    }
})();