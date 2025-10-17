/**
 * Equal Row and Column Pairs
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (i, j) such that i != j and grid[i][j] == grid[j][i].
 * 
 * Example 1:
 * Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
 * Output: 1
 * Explanation: There is 1 equal row and column pair:
 * - (Row 2, Column 1): [2,7,7]
 * 
 * Example 2:
 * Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
 * Output: 3
 * Explanation: There are 3 equal row and column pairs:         
 * - (Row 0, Column 0): [3,1,2,2]
 * - (Row 2, Column 2): [2,4,2,2]
 * - (Row 3, Column 2): [2,4,2,2]
 * 
 * Constraints:
 * n == grid.length == grid[i].length
 * 1 <= n <= 200
 * 1 <= grid[i][j] <= 10^5
 * 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    if (grid.length === 1) return 1;
    const n = grid.length;
    const rows = new Map();

    for(let row of grid) {
        const key = row.join(',');
        rows.set(key, (rows.get(key) || 0) + 1);
    }

    let count = 0;
    for(let r = 0; r < n; r++) {
        const col = [];
        for(let c = 0; c < n; c++) {
            col.push(grid[c][r]);
        }
        const key = col.join(',');
        if (rows.has(key)) {
            count += rows.get(key);
        }
    }

    return count;
};

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]))
// console.log(equalPairs([[11, 11], [11, 11]]))