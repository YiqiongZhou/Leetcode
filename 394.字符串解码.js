/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let ans="";

    const func=((myStr)=>{

        if(myStr[0]!=='['){
            return myStr.substring(1,myStr.length);
        }
       
        for(let i=0;i<myStr.length-1;i++){
            if(myStr[i+1]==='['){
                temp=func(myStr[i+1,myStr.length-1])
                for(let j=0;j<myStr[i];j++){
                    ans+=temp;
                }
            }

        }


    })



};
// @lc code=end

