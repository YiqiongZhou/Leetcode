#
# @lc app=leetcode.cn id=876 lang=python
#
# [876] 链表的中间结点
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        myleft=head
        myright=head
        while  myright.next and myright.next.next:
            myleft=myleft.next
            myright=myright.next.next

        if myright.next is None:
            return myleft
        else:
            return myleft.next
# @lc code=end

