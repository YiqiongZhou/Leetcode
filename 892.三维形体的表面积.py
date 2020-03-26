#
# @lc app=leetcode.cn id=892 lang=python
#
# [892] 三维形体的表面积
#

# @lc code=start
class Solution(object):
    def surfaceArea(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        '''
        v是值
        i，j是矩阵的序号
        '''

        x=len(grid)
        s=0
        m=0
        v=0


        for i in range(x):
            for j in range(len(grid[i])):
                m=m+max(0,grid[i][j]-1)
                v=grid[i][j]
                s=s+6*v
        for i in range(x):
            for j in range(len(grid[i])-1):
                m=m+min(grid[i][j],grid[i][j+1])
                
        for i in range(x-1):
            for j in range(len(grid[i])):
                m=m+min(grid[i][j],grid[i+1][j])
                
        return s-2*m
        
# @lc code=end

