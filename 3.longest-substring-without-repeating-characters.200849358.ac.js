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
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  let longestSubstring = 0;
  let seenChars = new Set();
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (seenChars.has(ch)) {
      if (seenChars.size > longestSubstring) {
        longestSubstring = seenChars.size;
      }
      // remove items up to repeated char
      for (let item of seenChars.values()) {
        seenChars.delete(item);
        if (item === ch) break;
      }
    }
    seenChars.add(ch);
  }
  return seenChars.size > longestSubstring ? seenChars.size : longestSubstring;
};

// Sliding Window solution

const lengthOfLongestSubstringSlidingWindow = s => {
  let longestSubstring = 0;
  let seenChars = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    while (seenChars.includes(ch)) {
      seenChars.shift();
    }
    seenChars.push(ch);
    longestSubstring = Math.max(seenChars.length, longestSubstring);
  }
  return longestSubstring;
};
