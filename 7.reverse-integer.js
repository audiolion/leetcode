/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.82%)
 * Total Accepted:    1.3M
 * Total Submissions: 5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Note:
 * Assume we are dealing with an environment that could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 *
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 * Example 2:
 * Input: x = -123
 * Output: -321
 * Example 3:
 * Input: x = 120
 * Output: 21
 * Example 4:
 * Input: x = 0
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rem = 0;
  let val = Math.abs(x);
  while (val) {
    rem = rem * 10 + (val % 10);
    val = Math.floor(val / 10);
  }
  if (rem > 2 ** 31 - 1 || rem < -1 * 2 ** 31) return 0;
  return rem * Math.sign(x);
};
