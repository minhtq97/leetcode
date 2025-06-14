/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <=3) return n;

    let d = [];
    d[1] = 1;
    d[2] = 2;
    for (let i = 3; i <= n; i++) {
        d[i] = d[i - 1] + d[i - 2]
    }

    return d[n];
};
