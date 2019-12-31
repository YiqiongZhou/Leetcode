#
# @lc app=leetcode.cn id=8 lang=python
#
# [8] 字符串转换整数 (atoi)
#
#第一步，得到数字的字符串
#第二步根据ascii码，将字符串变为数字
# @lc code=start
import sys
class Solution(object):
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        def mmyAtoi(strans):
            numans=0
            for i in range(len(strans)):
                numans=(ord(strans[i])-48)*pow(10, len(strans)-i-1)+numans
            return numans
        
        if not str.strip() :
            return 0
        mynum=0
        str=str.strip()
        ans=[]
        i=0

        flag=1
        if  str[i]=='-':
            flag=-1
            i+=1
        elif str[i]=='+' :
            i+=1
        elif (ord(str[i])>=48 and ord(str[i])<=57):
            flag=1
        else:
            return 0
        
    

        while i<len(str):
            if (ord(str[i])>=48 and ord(str[i])<=57):
                ans.append(str[i])
                i+=1
            else:
                break

    
        myans=''.join(ans)

        mynum=flag*mmyAtoi(myans)

        return max(min(2**31-1,mynum),-1*(2**31))


# @lc code=end
print(Solution().myAtoi("-91283472332"))
