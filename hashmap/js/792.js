/**
 * given a string s and array of string words, return the numbers of words[i] that is a subsequences of s
 * 
 * Example:
 * Input: s = "abcde", words = ["a", "bb", "acd", "ace"]
 * Output: 3
 * Explanation: There are three strings in words that are subsequences of s: "a", "acd", "ace".
 *  
 * Example 2:
 * Input: s = "dsahjpjauf", words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]
 * Output: 2
 * 
 * 
 */


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function (s, words) {
    const map = new Map();
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    let ans = 0;
    for (const word of map.keys()) {
        let i = 0;
        let j = 0;

        while (i < s.length && j < word.length) {
            if (s[i] === word[j]) {
                j++;
            }
            i++;
        }

        if (j === word.length) {
            ans += map.get(word);
        }
    }

    return ans;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]))
// console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]))





