/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    //找到小数与大数
    //本质是小数与大数的交换
    //要保证这个较小数尽可能靠右，较大数尽可能小

    let minIndex=-1

    const swap=((a,b)=>{
        temp=nums[a];
        nums[a]=nums[b];
        nums[b]=temp;
    })



    //先从后往前，找到开始升序的两个数，i，i+1
    for(let i=nums.length-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            minIndex=i-1;
            break
        }
    }

    //从后往前找到，比升序的i-1大的第一个数
    for(let i=nums.length-1;i>minIndex;i--){
        if(nums[i]>nums[minIndex]){
            swap(i,minIndex);
            // temp=nums[i];
            // nums[i]=nums[minIndex];
            // nums[minIndex]=temp;
            break
        }
    }

    //i-1后面的数字要升序
    for(let i=minIndex+1;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                swap(i,j)
            }
        }
    }


};
// @lc code=end

