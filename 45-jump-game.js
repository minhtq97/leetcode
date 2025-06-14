/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.lengh === 1) return 0;
    let result = 0;
    let max = 0;
    let end = 0;
    for(let i = 0;i < nums.length - 1;i++) {
        max = Math.max(max, i + nums[i]);
        if(i === end) {
            end = max;
            result++;
        }
    }
    return result;
};

console.log(jump([2,3,1,1,4]));