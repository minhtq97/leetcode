/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let graph = new Array(n).fill(0).map(() => []);
    for (let [a, b] of connections) {
        graph[a].push([b, 1]); // 1 means original direction a->b
        graph[b].push([a, 0]); // 0 means reverse direction b->a
    }
    let visited = new Array(n).fill(false);
    let count = 0;
    function dfs(node) {
        visited[node] = true;
        for (let [neighbor, needsReverse] of graph[node]) {
            if (!visited[neighbor]) {
                count += needsReverse;
                dfs(neighbor);
            }
        }
    }
    dfs(0);
    return count;
}
/**
 * [[0,1],[1,3],[2,3],[4,0],[4,5]]
 * [0,1]
 * [1,3]
 * [2,3]
 * [4,0]
 * [4,5]
 * expected output: 3
 */
console.log(minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]]));
