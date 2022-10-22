
// * BFS
var orangesRotting = function(grid) {
    let count = 0;
    const queue = [];
    const travel = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === 2) {
                queue.push([row, col]);
            }
        }
    }
    
    const isOutOfBound = (row, col) => {
        return row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length;
    }
    
    while (queue.length) {
        const qLen = queue.length;
        
        for (let i=0; i<qLen; i++) {
            const [currRow, currCol] = queue.shift();
            
            for (let [moveRow, moveCol] of travel) {
                moveRow += currRow;
                moveCol += currCol;
                
                if (!isOutOfBound(moveRow, moveCol)) {
                    if (grid[moveRow][moveCol] === 1) {
                        grid[moveRow][moveCol] = 2;
                        queue.push([moveRow, moveCol]);
                    }
                }
            }
        }
        if (queue.length) {
            count++;
        }
    }
    
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === 1) {
                return -1;
            }
        }
    }
    
    return count;
};

// * DFS


