/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var ans=[0];
    if(n===0){
        return ans
    }

    for(var i=1;i<=n;i++){
        if(i%2===0){
            ans.push(ans[Math.floor(i/2)])
        }
        else{
            ans.push(ans[i-1]+1)
        }
        
    }
    return ans

};

// @lc code=end

