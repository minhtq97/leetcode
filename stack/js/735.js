/*
    We are given an array asteroids of integers representing asteroids in a row.

    For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

    Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
    
*/

/**
* @param {number[]} asteroids
* @return {number[]}
*/
var asteroidCollision = function (asteroids) {
    const res = []

    for (let i = 0; i < asteroids.length; i++) {
        const last = res[res.length - 1]
        const cur = asteroids[i]

        if (!res.length || last < 0 || cur > 0) {
            res.push(cur)
        } else if (-cur == last) {
            res.pop()
        } else if (-cur > last) {
            res.pop()
            i--
        }
    }

    return res
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]

