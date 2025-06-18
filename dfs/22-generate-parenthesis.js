/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 * 
 * 
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const generate = (left, right, str) => {
        console.log('left', left, 'right', right, 'str', str);

        if (left === n && right === n) {
            console.log('result', result);
            result.push(str);
            return;
        }
        if (left < n) {
            generate(left + 1, right, str + '(');
        }
        if (right < left) {
            generate(left, right + 1, str + ')');

        }
    }
    generate(0, 0, '');
    return result;
};


console.log(generateParenthesis(3));