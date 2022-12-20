/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var temp=new Map();
    temp.set(0,1);

    var prev=0,ans=0;


    for(const num of nums){
        
        prev+=num;
        sub=prev-k;
 
        if(temp.has(sub)){
            ans+=temp.get(sub);
        }
        if(!temp.has(prev)){
            temp.set(prev,1)
        }else{
            temp.set(prev,temp.get(prev)+1);
        }
        
    }

    // let i=0;
    // let j=0;
    // let arrLen=nums.length;
    // let ans=0;

    // while (i<arrLen && j<arrLen){
    //     // console.log(i,j)
    //     temp=0;
    //     for(p=i;p<=j;p++){
    //         temp+=nums[p]
    //     }
    //     if(temp===k){
    //         ans+=1
    //     }
    //     if(j<arrLen-1){
    //         j+=1
    //     }else{
    //         i+=1;
    //         j=i;
    //     }
    // }

    return ans

};
// @lc code=end

