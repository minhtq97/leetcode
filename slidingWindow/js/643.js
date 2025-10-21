/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * explain
 * 1. we need to find the maximum average of a subarray of length k
 * 2. we can use a sliding window to find the maximum sum of a subarray of length k
 * (sliding window is a technique that allows us to find the maximum or minimum sum of a subarray of a given length)
 * 3. we can then divide the sum by k to get the average
 * 4. we can then return the maximum average
 */
var findMaxAverage = function(nums, k) {
    // explain line by line
    let maxSum = -Infinity;
    let currentSum = 0;
    for(let i = 0; i < nums.length; i++) {
        // add the current element to the current sum
        currentSum += nums[i];
        // if the current sum is greater than the max sum, update the max sum
        if(i >= k) {
            // remove the first element from the current sum
            currentSum -= nums[i - k];  
        }
        // if the current sum is greater than the max sum, update the max sum
        if(i >= k - 1) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    // return the maximum average
    return maxSum / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1));
