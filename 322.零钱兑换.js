/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let a=new Array(amount+1).fill(-1);
    a[0]=0;

    for(let i=1;i<=amount;i++){
        for(let j=0;j<coins.length;j++){
            // console.log(i,coins[j])
            
            if(i-coins[j]>=0 && a[i-coins[j]]!=-1){
                if(a[i]===-1){
                    a[i]=a[i-coins[j]]+1;
                }else{
                    a[i]=Math.min(a[i-coins[j]]+1,a[i]);
                }
               
            }
        }
 
    }

    return a[amount];
};
// @lc code=end

