#
# @lc app=leetcode.cn id=17 lang=python
#
# [17] 电话号码的字母组合
#

# @lc code=start
class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        回溯
        """

        phone={'2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']}
        ans=[]
        def backtrack(combinations,next_digits):
            #终止条件
            if len(next_digits)==0:
                ans.append(combinations)
                return 
            for letter in phone[next_digits[0]]:
                backtrack(combinations+letter,next_digits[1:])
        if len(digits)==0:
            return ans
        else:
            backtrack("",digits)
            return ans
        return ans

# @lc code=end

