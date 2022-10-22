// * discuss 안 봄!
// * DP
// ! 정사각형 그리드가 아닐 때 행과 열의 범위를 잘 지정해야 함.

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (i === 0) {
                if (j !== 0) {
                    grid[i][j] += grid[i][j - 1];
                }
            }
            
            else {
                if (j === 0) {
                   grid[i][j] += grid[i-1][j]; 
                }
                
                else if (j <= grid[i].length) {
                    const minNum = Math.min(grid[i-1][j], grid[i][j-1]);
                    grid[i][j] += minNum;
                }
            }
        }
    }
    
    return grid[grid.length - 1].at(-1);
};