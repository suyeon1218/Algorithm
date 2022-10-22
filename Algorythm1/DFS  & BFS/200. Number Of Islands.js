// * 2022.10.04
// * Graph, DFS, BFS
// leetcode 75 study plan - Day 9
// https://leetcode.com/problems/number-of-islands/?envType=study-plan&id=level-1


// * DFS
// https://leetcode.com/problems/number-of-islands/discuss/429842/JavaScript-DFS-Commented-Thought-Process-Beats-100-Time-and-Space
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  let count = 0;
  for (let i=0; i<grid.length; i++) {
      for (let j=0; j<grid[0].length; j++) {
          if (grid[i][j] === '1') {
              count++;
              find(grid, i, j);                
          }
      }
  }
  return count;
};

const find = (grid, row, col) => {
  if (row < 0 || col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === '0') return;
  
  grid[row][col] = '0';
  // 탐색한 부분을 0으로 만들어주면 탐색조건에 해당하지 않게 됨
  
  find(grid, row - 1, col);
  find(grid, row + 1, col);
  find(grid, row, col - 1);
  find(grid, row, col + 1);
}