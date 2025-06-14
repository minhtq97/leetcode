/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var isPalindrome = function (n) {
        let left = 0; right = n.length - 1;
        while (left < right) {
            if (n[left] !== n[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let longestPalindrome = [s[0]];

    for (let x = 0; x < s.length; x++) {
        let arr = [s[x]];
        for (let y = x + 1; y < s.length; y++) {
            arr.push(s[y]);
            if (isPalindrome(arr) && arr.length >= longestPalindrome.length) {
                longestPalindrome = [...arr];
            }
        }
    }

    return longestPalindrome.join('');
};


longestPalindrome("bb")

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    let ans = [];

    var isPrime = function (n) {
        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    }

    var findClosestGapPair = function(arr) {
        let gap = Number.MAX_SAFE_INTEGER;
        let pair = [arr[0], arr[1]];
        for(let i = 0; i< arr.length -1 ; i++) {
            if(arr[i + 1] - arr[i] <= gap ) {
                gap = arr[i + 1] - arr[i];
                pair = [arr[i],arr[i+1]]
            }
        }

        return pair
    }

    while (left < right) {
        let min = isPrime(left) ? left : undefined;
        let max = isPrime(right) ? right : undefined;
        left++;
        right--;
        if(min) ans.push(min);

        if (max) ans.push(max);
    }
    console.log(ans)
    return ans?.length > 1 ? findClosestGapPair(ans.sort((a,b)=> a - b)) : [-1,-1];
};

console.log(closestPrimes(19,31))
