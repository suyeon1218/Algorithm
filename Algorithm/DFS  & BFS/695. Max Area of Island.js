// * Medium
// https://leetcode.com/problems/max-area-of-island/submissions/

 var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    
    const isOutOfBound = (row, col) => {
        return row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1;
    }
    
    const find = (row, col, area) => {
        if (isOutOfBound(row, col)) return 0;
        if (grid[row][col] === 0) return 0;
        
        grid[row][col] = 0;
        
        return 1 + find(row-1, col) + find(row+1, col) + find(row, col-1) + find(row, col+1);
    }
    
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === 1) {
                maxArea = Math.max(find(row, col, 0), maxArea);
            }
        }
    }
    
    return maxArea;
};

maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]])