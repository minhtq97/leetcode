/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let count = 0;
    let n = isConnected.length;
    let visited = new Array(n).fill(false);
    function helper(city) {
        visited[city] = true;
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                helper(neighbor);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            helper(i);
            count++;
        }
    }

    return count;
};

// console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
// console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
// console.log(findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]));
console.log(findCircleNum([[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]]));