/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {

    let root=new TreeNode();

    const dfs=(node1,node2,node)=>{
        if(node1===null && node2===null){
            node=null;
            // return null
        }else if(node1===null ) {
            node=node2;
            // return node2.val
            
        }else if(node2===null){
            node=node1;
            // return node1.val
        }else{
            node.val=node2.val+node1.val;
            node.left=dfs(node1.left,node2.left,new TreeNode());
            node.right=dfs(node1.right,node2.right,new TreeNode());
            // return node2.val+node1.val;
        }
        return node;
        
    }

    root=dfs(root1,root2,root);
    // console.log(root1===null,root2===null)
    return root;

};
// @lc code=end

