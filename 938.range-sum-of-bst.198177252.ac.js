/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 *
 * https://leetcode.com/problems/range-sum-of-bst/description/
 *
 * algorithms
 * Medium (80.88%)
 * Total Accepted:    15.3K
 * Total Submissions: 19K
 * Testcase Example:  '[10,5,15,3,7,null,18]\n7\n15'
 *
 * Given the root node of a binary search tree, return the sum of values of all
 * nodes with value between L and R (inclusive).
 * 
 * The binary search tree is guaranteed to have unique values.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
 * Output: 32
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * Output: 23
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of nodes in the tree is at most 10000.
 * The final answer is guaranteed to be less than 2^31.
 * 
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root, L, R) {
    let sum = 0;
    if (!root) return sum;
    if (root.val >= L && root.val <= R) {
        sum += root.val;
    }
    if (root.left) {
        sum += rangeSumBST(root.left, L, R);
    }
    if (root.right) {
        sum += rangeSumBST(root.right, L, R);
    }
    return sum;
};
