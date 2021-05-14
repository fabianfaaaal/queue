import { QueueDynamic, QueueArray, QueueClosureArray } from "./main";

test("QueueDynamic", () => {
    let queue = new QueueDynamic();
    asserts(queue);
});
test("QueueArray", () => {
    let queue = new QueueArray();
    asserts(queue);
});
test("QueueClosureArray", () => {
    let queue = QueueClosureArray();
    asserts(queue);
});

function asserts(queue) {
    expect(queue).not.toBe(null);

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);

    queue.enqueue("X");
    expect(queue.size()).toBe(1);

    queue.enqueue("Y");
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe("X");
    expect(queue.size()).toBe(1);

    expect(queue.dequeue()).toBe("Y");
    expect(queue.size()).toBe(0);

    queue.enqueue("X");
    queue.enqueue("Y");
    queue.enqueue("Z");
    expect(queue.dequeue()).toBe("X");
    expect(queue.dequeue()).toBe("Y");
    expect(queue.dequeue()).toBe("Z");
}