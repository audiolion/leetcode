/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.96%)
 * Total Accepted:    694.7K
 * Total Submissions: 2.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let nextLink;
    let head = new ListNode(0);
    let carry = 0;
    while(l1 || l2 || carry > 0) {
        l1Val = l1 ? l1.val : 0;
        l2Val = l2 ? l2.val : 0;
        nextVal = Math.floor((l1Val + l2Val + carry) % 10);
        if (!nextLink) {
            nextLink = new ListNode(nextVal);
            head = nextLink;
        } else {
            nextLink.next = new ListNode(nextVal);
            nextLink = nextLink.next;
        }
        carry = Math.floor((l1Val + l2Val + carry) / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head;
};
