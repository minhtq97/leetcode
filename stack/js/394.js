/**
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
 * The test cases are generated so that the length of the output will never exceed 105.
 * 
 * Example 1:
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 * 
 * Example 2:
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 * 
 * Example 3:
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const numbStack = [];
    const ansStack = []
    let n = 0;
    let ans = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            // we multiply by 10 to handle numbers with multiple digits
            n = n * 10 + Number(s[i]);
        } else if (s[i] === '[') {
            numbStack.push(n);
            ansStack.push(ans);
            ans = '';
            n = 0;
        } else if (s[i] === ']') {
            let temp = ans;
            ans = ansStack.pop();
            const count = numbStack.pop();
            ans += temp.repeat(count);
        } else {
            ans += s[i];
        }
    }
    return ans;
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));