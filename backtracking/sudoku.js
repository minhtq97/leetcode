function solveSudoku(board) {
    function isValid(row, col, num) {
      const n = 9;
      const blockRow = Math.floor(row / 3) * 3;
      const blockCol = Math.floor(col / 3) * 3;
  
      for (let i = 0; i < n; i++) {
        if (board[row][i] == num) return false; // check row
        if (board[i][col] == num) return false; // check column
        if (
          board[blockRow + Math.floor(i / 3)][blockCol + (i % 3)] == num
        )
          return false; // check 3x3 block
      }
  
      return true;
    }
  
    function backtrack() {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === ".") {
            for (let num = 1; num <= 9; num++) {
              const char = num.toString();
              if (isValid(row, col, char)) {
                board[row][col] = char;
                if (backtrack()) return true;
                board[row][col] = "."; // backtrack
              }
            }
            return false; // no valid number found
          }
        }
      }
      return true; // solved
    }
  
    backtrack();
  }
  

  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  
  solveSudoku(board);
  console.log(board);