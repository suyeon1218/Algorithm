// * Medium : https://leetcode.com/problems/lru-cache/
// LRU Cache 구현 문제


// * Using Map Object
class LRUCache1 {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return key;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, value);

        console.log(this.cache);

        if (this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys.next().value);
        }
    }
}
