/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    if(list1===null){
        return list2;
    }
    if(list2===null){
        return list1;
    }
    if(list1.val<list2.val){
        list1.next=mergeTwoLists(list1.next,list2);
        return list1;
    }else{
        list2.next=mergeTwoLists(list1,list2.next);
        return list2;
    }

    //迭代做法
    // let node1=list1;
    // let node2=list2;
    // let resHead=new ListNode(0);
    // let resNode=resHead;

    // while (node1!=null  && node2!=null){
    //     console.log(node1.val,node2.val)
    //     // resNode=node1.val<node2.val?node1:node2;
    //     if(node1.val<node2.val){
    //         resNode.next=node1;
    //         node1=node1.next;
    //     }else{
    //         resNode.next=node2;
    //         node2=node2.next;
    //     }
    //     resNode=resNode.next;
    // }
    // resNode.next=node1===null?node2:node1;
    // return resHead.next;

};
// @lc code=end

