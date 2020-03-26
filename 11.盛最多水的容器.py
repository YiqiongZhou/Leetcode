#
# @lc app=leetcode.cn id=11 lang=python3
#
# [11] 盛最多水的容器
#
#贪婪算法超时
#排除掉贪婪算法中一些不必要的
#移动短指针
#指针从头尾两个方向开始
# @lc code=start
class Solution:
    def maxArea(self, height: List[int]) -> int:
        i=0
        j=len(height)-1
        ans=0

        
        while i<j:
            vol=(j-i)*min(height[i],height[j])
            if height[i]<height[j]:
                i+=1
            else:
                j-=1
            
            if vol>ans:
                ans=vol
        return ans
        
# @lc code=end

