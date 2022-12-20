/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let ans=[]

    let i=0,j=1;

    for(let i=0;i<temperatures.length;i++){
        for(j=i;j<temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
                ans[i]=j-i;
                break
            }

            if(j==temperatures.length-1){
                ans[i]=0;
            }
        }
    }
    return ans




};
// @lc code=end

