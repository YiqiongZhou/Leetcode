/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var numLength=nums.length
    ans=[]

    for(var i=1;i<numLength+1;i++){
        if(nums.indexOf(i)===-1){
            ans.push(i)
        }
    }
    return ans

};
// @lc code=end

