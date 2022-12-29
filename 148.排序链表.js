/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {


    //分治把链表不断二分
    let splitHalf = ((start,end) => {
        slowNode = start;
        fastNode = start;
        while (fastNode != end) {
            slowNode = slowNode.next;
           
            fastNode = fastNode.next;
            if(fastNode!=end){
                fastNode = fastNode.next;
            }
            
        }
        return slowNode;
    }
    )

    let merge=((l1,l2)=>{
        if(l1===null){
            return l2;
        }
        if(l2===null){
            return l1;
        }
        if(l1.val<l2.val){
            l1.next=merge(l1.next,l2);
            return l1;
        }else{
            l2.next=merge(l1,l2.next);
            return l2;
        }
    });
    start=head;
    end=null;

    let mySort=(start,end)=>{
        if(start===null){
            return null
        }

        if(start.next==end){
            start.next=null;
            return start;
        }
        // if(start.next==end){
        //     start.next=null;
        //     end.next=null;
        //     console.log(start.val,end.val)
        //     return merge(start,end);
        // }
        let middle=splitHalf(start,end)
        let l1=mySort(start,middle);
        let l2=mySort(middle,end);
        return merge(l1,l2);
    }
    // mySort(head,null);

    return mySort(head,null);
};
// @lc code=end

// root=new ListNode(0,head);
// prev=root;
// node=prev.next;

// //node 和after交换
// const swap=((prev,tempPrev,node,after)=>{
//     temp=node.next;
//     console.log(prev.val,node.val,after.val)
//     prev.next=after;
//     node.next=after.next;
//     after.next=node.next;
//     tempPrev.next=node;
// })

// while(node.next!=null){
//     after=node.next;
//     while(after!=null){
//         tempPrev=prev;
//         temp=after.next;
//         if(tempPrev.next.val>after.val){
//             swap(prev,tempPrev,tempPrev.next,after);
//         }
//         after=temp;
//         tempPrev=tempPrev.next;
//         console.log(root)
//     }
//     prev=prev.next;
//     node=prev.next.next;
// }

//分治再合并链表