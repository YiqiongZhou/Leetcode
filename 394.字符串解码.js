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
    let res="";
    let mulit=[];
    let digit=0;
    let ans=[];


    for(char of s){
        if(char==='['){
            mulit.push(digit);
            ans.push(res);
            digit=0;
            res="";

        }else if( char>='0' && char<='9'){
            temp=Number(char);
            digit=10*digit+temp;
            
        }else if(char===']'){
            multiTemp=mulit.pop();
            str=ans.pop();
            res=str+res.repeat(multiTemp);
        }else{
            res+=char;
        }
    }

    return res;
   



};
// @lc code=end

