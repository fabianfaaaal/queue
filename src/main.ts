class Node {
    next: Node;
    value: any;
}

export class QueueDynamic {
    first: Node = null;
    last: Node = null;
    count: number = 0;

    enqueue(v) {
        this.count++;

        let newNode = new Node();
        newNode.value = v;

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }
    dequeue() {
        if (!this.first) {
            return undefined;
        }
        this.count--;
        let response = this.first.value;
        this.first = this.first.next;
        return response;
    }

    size() {
        if (!this.first) {
            return 0;
        }
        return this.count;
    }
}

export class QueueArray {
    mem = [];
    enqueue(v) {
        this.mem.push(v);
    }
    dequeue() {
        return this.mem.shift();
    }
    size() {
        return this.mem.length;
    }
}

export function QueueClosureArray() {
    this.mem = [];
    return {
        enqueue: (v) => {
            this.mem.push(v);
        },
        dequeue: () => {
            return this.mem.shift();
        },
        size: () => {
            return this.mem.length;
        }
    };
}