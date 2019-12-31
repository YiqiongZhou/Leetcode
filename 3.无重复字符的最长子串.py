#
# @lc app=leetcode.cn id=3 lang=python
#
# [3] 无重复字符的最长子串
#
#左右两边滑动窗口

# @lc code=start
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if not s:
            return 0

        i=0
        j=1
        ans=1

        while i<len(s) and j<len(s):
            mstr=s[i:j]
            ans=max(j-i,ans)
            print(mstr)
            if mstr.find(s[j])!=-1:
                i+=1
            else:
                j+=1
            

        return max(j-i,ans)

# @lc code=end

