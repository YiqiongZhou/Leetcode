/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    //动态规划

    let dp=new Array(s.length+1).fill(false);
    dp[0]=true;

    for(let i=1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            let temp=s.slice(j,i);
            if(dp[j] && wordDict.indexOf(temp)>-1){
                dp[i]=true;
                break
            }

        }
    }
    // let ans=false;
    // const dfs=(s=>{
    //     if(s===""){
    //         ans=true
    //         return 
    //     }

    //     for(var str of wordDict){
    //         if(s.substring(0,str.length)===str){
    //             dfs(s.substring(str.length));
    //         }
    //     }
    //     return 
    // })
    // dfs(s);

    return dp[s.length];

};
// @lc code=end

