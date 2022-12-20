/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const ans=[];

    const dfs=(node=>{
        if(node===null){
            return
        }
        ans.push(node);
        dfs(node.left);
        dfs(node.right);

    })

    dfs(root);

    for(let i=0;i<ans.length-1;i++){
        // console.log(ans[i].val)
        ans[i].left=null;
        ans[i].right=ans[i+1];
    }

};
// @lc code=end

