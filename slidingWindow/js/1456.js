/**
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
 * 
 * Example 1:
 * Input: s = "abciiidef", k = 3
 * Output: 3
 * Explanation: The substring "iii" contains 3 vowel letters.
 * 
 * Example 2:
 * Input: s = "aeiou", k = 2
 * Output: 2
 * Explanation: Any substring of length 2 contains 2 vowels.
 * 
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let vowelsLetters = ['a', 'e', 'i', 'o', 'u']
    let maxVowels = 0;
    let currentVowels = 0;
    for(let i = 0; i < s.length; i++) {
        if(vowelsLetters.includes(s[i])) {
            currentVowels++;
        }
        if(i >= k) {
            if(vowelsLetters.includes(s[i - k])) {
                currentVowels--;
            }
        }
        maxVowels = Math.max(maxVowels, currentVowels);
    }
    return maxVowels;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
console.log(maxVowels("rhythm", 3));
