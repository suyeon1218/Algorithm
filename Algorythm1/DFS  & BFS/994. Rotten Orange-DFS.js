var orangesRotting = function (grid) {
    let count = 0;
    const stack = [];

    const isOutOfBound = (row, col) => {
        return (
            row < 0 ||
            col < 0 ||
            row > grid.length - 1 ||
            col > grid[0].length - 1
        );
    };

    const find = (row, col, search) => {
        if (isOutOfBound(row, col)) return 0;
        if (grid[row][col] !== 1) return 0;
        grid[row][col] = 0;
        search += Math.max(find(row - 1, col, 0), find(row + 1, col, 0), find(row, col - 1, 0), find(row, col + 1, 0))
        return search + 1;
    };

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 2) {
                find(row, col)
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                return -1;
            }
        }
    }
    return count;
};

orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);