/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.lru=new Map();
    this.capacity=capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.lru.has(key)){
        temp=this.lru.get(key);
        this.lru.delete(key);
        this.lru.set(key,temp);
        return temp
    }else{
        return -1;
    }

};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    this.lru.delete(key);
    this.lru.set(key,value);
    if(this.lru.size>this.capacity ){
        this.lru.delete(this.lru.keys().next().value);
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

