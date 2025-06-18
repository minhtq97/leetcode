// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let min = 1;
    for(let i = 0; i < A.length; i++) {
        if(A[i] === min) {
            min++;
        }
    }
    return min;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([-1, -3]));