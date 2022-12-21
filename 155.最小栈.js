/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {

    this.minStack=[];
    this.x_stack=[Infinity];
    //加一个辅助栈
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    if(val<this.x_stack[this.x_stack.length-1]){
        this.x_stack.push(val);
    }else{
        this.x_stack.push(this.x_stack[this.x_stack.length-1]);
    }

    this.minStack.push(val);

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.x_stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.minStack[this.minStack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.x_stack[this.x_stack.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

