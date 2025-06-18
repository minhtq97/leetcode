/**
 * There are n cities numbered from 0 to n - 1. Given the array connections where connections[i] = [ai, bi] represents a bidirectional road between cities ai and bi.
 * 
 * Example 1:
 * Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
 * Output: 3
 * Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
 * 
 * Example 2:
 * Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
 * Output: 2
 * 
 * 
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
