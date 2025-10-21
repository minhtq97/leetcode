/**
 * 1657. Determine if Two Strings Are Close
 *
 * Two strings are considered close if you can attain one from the other using the following operations:
 *
 * Operation 1: Swap any two existing characters.
 * For example, abcde -> aecdb
 * Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
 * For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 * You can use the operations on either string as many times as necessary.
 *
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 * Example 1:
 *
 * Input: word1 = "abc", word2 = "bca"
 * Output: true
 * Explanation: You can attain word2 from word1 in 2 operations.
 * Apply Operation 1: "abc" -> "acb"
 * Apply Operation 1: "acb" -> "bca"
 *
 * Example 2:
 *
 * Input: word1 = "a", word2 = "aa"
 * Output: false
 * Explanation: It is impossible to attain word2 from word1 using any number of operations.
 *
 * Example 3:
 *
 * Input: word1 = "cabbba", word2 = "abbccc"
 * Output: true
 * Explanation: You can attain word2 from word1 in 3 operations.
 * Apply Operation 1: "cabbba" -> "caabbb"
 * Apply Operation 2: "caabbb" -> "baaccc"
 * Apply Operation 2: "baaccc" -> "abbccc"
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < word1.length; i++) {
        map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
        map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
    }
    const values1 = [...map1.values()];
    const values2 = [...map2.values()];
    values1.sort((a, b) => a - b);
    values2.sort((a, b) => a - b);
    return values1.every((value, index) => value === values2[index]) && [...map1.keys()].every((key) => map2.has(key));
};

// Alternative solution using charCodeAt    
// Explanation:
// 1. Create two arrays to count the frequency of each character in both words
// 2. Check if both words have the same characters
// 3. Sort the frequency arrays and compare them
var closeStrings = function (word1, word2) {
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for (let ch of word1) {
        // Convert character to index in frequency array
        // 'a' has charCode 97, so 'a'.charCodeAt(0) - 'a'.charCodeAt(0) = 0
        // 'b' has charCode 98, so 'b'.charCodeAt(0) - 'a'.charCodeAt(0) = 1
        // 'c' has charCode 99, so 'c'.charCodeAt(0) - 'a'.charCodeAt(0) = 2
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let ch of word2) {
        // Convert character to index in frequency array
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        // Check if both words have the same characters
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        // Check if both words have the same characters
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    return true;
}

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));

