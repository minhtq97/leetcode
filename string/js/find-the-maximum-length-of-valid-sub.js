var maximumLength = function(nums) {
    if (nums.length <= 2) return nums.length;
    
    let maxLen = 2;
    
    // Helper function to check if a subsequence is valid
    const isValidSubsequence = (arr) => {
        if (arr.length < 2) return false;
        const targetMod = (arr[0] + arr[1]) % 2;
        for (let i = 1; i < arr.length - 1; i++) {
            if ((arr[i] + arr[i + 1]) % 2 !== targetMod) {
                return false;
            }
        }
        return true;
    };
    
    for (let i = 0; i < nums.length; i++) {
        for (let len = nums.length - i; len >= maxLen; len--) {
            const subsequence = nums.slice(i, i + len);
            if (isValidSubsequence(subsequence)) {
                maxLen = Math.max(maxLen, len);
                break; 
            }
        }
    }
    
    return maxLen;
};

// Test cases
console.log(maximumLength([1, 2, 1, 1, 2, 1, 2])); // Should return 6
console.log(maximumLength([1, 5, 9, 4, 2])); // Should return 3