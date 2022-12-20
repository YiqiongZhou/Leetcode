/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    //位运算符都是针对二进制。
    //异或概念 两个相同的数在一起运算就是0 不同就是1
    //异或就是^，转换为二进制后从高位到地位依次进行异或运算:
    //.左移运算符（left shift）：符号为<< 左移运算符 箭头往左，
    //比如10变100，将一个数的二进制值向左移动指定的位数，尾部补0，即乘以2的指定次方
    //右移运算符 箭头往右 >> 比如100变10
    //将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补0；
    //如果是负数，头部全部补1。右移运算符基本上相当于除以2的指定次方（最高位即符号位参与移动）
    //头部补零的右移运算符（zero filled right shift）：符号为>>>

    let s=x^y;
    let ans=0;
    //二进制与运算符（and）：符号为&
    //右移
    while(s!=0){
        let label=s&1;
        //两个二进制位之中只要有一个位为0，就返回0，否则返回1。
        ans+=label;
        s=s>>1;
    }
    return ans
};
// @lc code=end

