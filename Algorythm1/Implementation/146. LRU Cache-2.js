class Node {
    constructor(key, value, prev, next) {
        this.key = key;
        this.value = value;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
    }
}

class LRUCache {
    constructor(capacity) {
        this.head = null;
        this.capacity = capacity;
        this.size = 0;
    }

    get(key) {
        const node = this.find(key);

        if (!node) return -1;

        const value = node.value;
        this.delete(node);
        this.put(key, value);
        return value;
    }

    put(key, value) {
        const node = this.find(key);

        if (node) {
            this.delete(node);
        }

        if (this.head === null) {
            this.head = new Node(key, value);
            this.head.next = this.head;
            this.head.prev = this.head;
        } else {
            const currNode = new Node(key, value, this.head.prev, this.head);
            this.head.prev.next = currNode;
            this.head.prev = currNode;
        }

        this.size++;

        if (this.size > this.capacity) {
            this.delete(this.head);
        }
    }

    delete(node) {
        if (this.size === 1) {
            this.head = null;
        } else if (node === this.head) {
            const tail = this.head.prev;
            tail.next = this.head.next;
            this.head.next.prev = tail;
            this.head = this.head.next;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.size--;
    }

    find(key) {
        let count = 0;
        let currNode = this.head;
        while (count <  this.size) {
            if (currNode.key === key) {
                return currNode;
            }
            currNode = currNode.next;
            count++;
        }

        return false;
    }
}