/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    //暴力法
    // let ans=0;

    // for(let i=0;i<prices.length;i++){
    //     for(let j=i;j<prices.length;j++){
    //         if(prices[j]-prices[i]>ans){
    //             ans=prices[j]-prices[i];
    //         }
    //     }
    // }
    // return ans

    let ans=0;
    let minPrice=prices[0];


    //不断记录当前最小的金额
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice=prices[i]
        }else if(prices[i]-minPrice>ans){
            ans=prices[i]-minPrice;
        }

    }
    return ans
};
// @lc code=end

