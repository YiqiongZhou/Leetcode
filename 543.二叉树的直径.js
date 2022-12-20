/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
//转换为二叉树深度问题


    ans=0;

    const dfs=(node=>{
        if(node==null){
            return 0
        }
        let leftVal=dfs(node.left);
        let rightVal=dfs(node.right);
        ans=Math.max(ans,leftVal+rightVal+1)
        //该点为头最大的距离
        
        return Math.max(leftVal,rightVal)+1
        //经过该点最长的深度
    })

    dfs(root);

    return ans-1;

};
// @lc code=end

