/**
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

Example 1:

Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
Output: 1       

Example 2:

Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
Output: 2

Example 3:
 */

var nearestExit = function (maze, entrance) {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = {
        'up': [-1, 0],
        'down': [1, 0],
        'left': [0, -1],
        'right': [0, 1]
    };
    const queue = [[entrance[0], entrance[1], 0]];
    const visited = new Set();
    visited.add(`${entrance[0]},${entrance[1]}`);

    while (queue.length > 0) {
        const [row, col, steps] = queue.shift();
        if ((row === 0 || row === rows - 1 || col === 0 || col === cols - 1) && !(row === entrance[0] && col === entrance[1])) {
            return steps;
        }
        for (const [dx, dy] of Object.values(directions)) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && maze[newRow][newCol] === '.' && !visited.has(`${newRow},${newCol}`)) {
                visited.add(`${newRow},${newCol}`);
                queue.push([newRow, newCol, steps + 1]);
            }
        }
    }
    return -1;
}

console.log(nearestExit([["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], [1, 2]));
console.log(nearestExit([["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], [1, 0]));
console.log(nearestExit([["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], [1, 0]));
