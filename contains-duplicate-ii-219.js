/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (!obj.hasOwnProperty(nums[i])) {
            obj[nums[i]] = i
        } else {
            if (Math.abs(obj[nums[i]] - i) <= k) return true;
            obj[nums[i]] = i
        }
    }
    return false
};

let promise = new Promise((resolve, reject) => {
    resolve('Success!');
});