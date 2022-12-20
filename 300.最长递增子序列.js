/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    //dp 的定义有所不一样，不一定是答案，答案可以在dp里搜到（保证唯一性）
    //dp为以i结尾的最长子序列的个数
    let ans=1;

    let dp=new Array(nums.length+1).fill(1);
    
    for(let i=1;i<nums.length;i++){
        for(let j=i-1;j>=0;j--){
            if(nums[j]<nums[i]){
                dp[i]=Math.max(dp[j]+1,dp[i]);
            }
            
        }
        if(dp[i]>ans){
            ans=dp[i];
        }
    }

    return ans

};
// @lc code=end

