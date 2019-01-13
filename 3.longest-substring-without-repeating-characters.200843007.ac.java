/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (25.69%)
 * Total Accepted:    701.8K
 * Total Submissions: 2.7M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> m = new HashMap<Character, Integer>();
        int leftPos = 0;
        int longest = 0;
        int rightPos;
        Integer test;
        for (rightPos = 0; rightPos < s.length(); rightPos++) {
            test = m.get(s.charAt(rightPos));
            if (test != null && test >= leftPos) {
                leftPos = test + 1;
            }
            // if ((rightPos - leftPos) + 1 > longest) {
            // longest = (rightPos - leftPos) + 1;
            // }
            longest = Math.max(longest, (rightPos - leftPos) + 1);
            m.put(s.charAt(rightPos), rightPos);
        }
        return longest;
    }
}
