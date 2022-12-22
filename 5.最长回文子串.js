/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //动态规划
    //转移方程 i，j 是

    sLen=s.length;
    const arr = new Array(sLen).fill(0).map(() => new Array(sLen).fill(false));
    // let arr =new Array(sLen).fill(new Array(sLen).fill(false));
    //是回文字串就是1


    for(let i=0;i<sLen;i++){
        arr[i][i]=true;
    }

    let temp=0;
    let ans=s[0];
    for(let j=1;j<sLen;j++){
        for(let i=0;i<j;i++){
            if(j>=i+2){
                if(s[i]===s[j] && arr[i+1][j-1]){
                    arr[i][j]=true;
                }
            }else{
                if(s[i]===s[j]){
                    arr[i][j]=true;
                }
            }
            if(j-i>temp && arr[i][j]){
                console.log(i,j)
                temp=j-i;
                ans=s.substring(i,j+1);
            }

        }
    }

    return ans;

};
// @lc code=end

