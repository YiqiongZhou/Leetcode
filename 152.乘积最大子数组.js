/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = nums[0];
    let tempMax=1;
    let tempMin=1;

    let swap=(a,b)=>{
        temp=a;
        a=b;
        b=temp;
        
    }

    //连续问题的动态规划：以j结尾的乘积最大子数组

    for(let i=0;i<nums.length;i++){

        if(nums[i]<0){
            temp=tempMax;
            tempMax=tempMin;
            tempMin=temp;
        }


        tempMax=Math.max(nums[i],tempMax*nums[i]);
        tempMin=Math.min(nums[i],tempMin*nums[i]);


        res=Math.max(tempMax,res);
    }

//  -2 -2
//  -6 3

//  3 -6
//  -12 


    return res;

};
// @lc code=end

