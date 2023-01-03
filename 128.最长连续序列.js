/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let ans=0;

    let numsMap= new Map();
    nums.forEach((num)=>{
        numsMap.set(num,0);
    })

    let i=0;
    while (i<nums.length){
        if(!numsMap.has(nums[i]-1)){
            currentMin=nums[i];
            currentMax=nums[i];
            let j=currentMin+1;
            while(numsMap.has(j)){
                j+=1;
                currentMax=j; 
            }
            ans=Math.max(ans,j-nums[i]); 
        }
        i+=1;
    }

    return ans;

};
// @lc code=end

