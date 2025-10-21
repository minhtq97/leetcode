/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alt = 0;
    let ans = 0;
    for(let i=0;i < gain.length;i++) {
        alt += gain[i];
        ans = Math.max(ans, alt);
    }

    return ans;
};