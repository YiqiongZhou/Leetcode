#
# @lc app=leetcode.cn id=107 lang=python
#
# [107] 二叉树的层次遍历 II
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """

        ans=[]
        def level(node,path):
            if node.left==null and node.right==null:
                ans.append(node)
            else:
                level(node.left,path)
                level(node.right,path)
        
# @lc code=end

