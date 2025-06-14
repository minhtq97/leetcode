/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let memo = {};
    let i = 0
    let ans = nums.push(nums.reduce((prev, cur, index) => {
        i++;
        if (index === i - 1) return prev;
        if (memo[`${prev * cur}`]) {
            return memo[`${prev * cur}`]
        } else {
            return prev * cur
        }
    }, []))
    return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));