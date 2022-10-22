// ! 빡세다... 

// * Medium
// https://leetcode.com/problems/01-matrix/discuss/1629356/BFS-Solution-with-explanation-and-visualization-JS

const initializeNewMat = (mat) => {
    const queue = [];
    let newMat = new Array(mat.length);

    for (let row=0; row<mat.length; row++) {
        newMat[row] = new Array(mat[row].length);

        for (let col=0; col<mat[row].length; col++) {
            if (mat[row][col] === 0) {
                newMat[row][col] = 0;
                queue.push([row, col]);
            } else {
                newMat[row][col] = Number.POSITIVE_INFINITY;
            }
        }
    }
    console.log(newMat);
    return [queue, newMat];
}

const isInvalidPos = (row, col, mat, newMat, currDistance) => {
    return row < 0 || col < 0 || row > mat.length - 1|| col > mat[0].length - 1 || currDistance > newMat[row][col];
}

var updateMatrix = function(mat) {
    const [queue, newMat] = initializeNewMat(mat);
    const travel = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let distance = 1;

    while (queue.length) {
        const qLen = queue.length;

        for (let i=0; i<qLen; i++) {
            const [currRow, currCol] = queue.shift();
            for (let [moveRow, moveCol] of travel) {
                moveRow += currRow;
                moveCol += currCol;

                if (! isInvalidPos(moveRow, moveCol, mat, newMat, distance)) {
                    newMat[moveRow][moveCol] = distance;
                    queue.push([moveRow, moveCol]);
                }
            }
        }
        distance++;
    }

    return newMat;
}

updateMatrix([[0,0,0],[1,1,0],[1,1,1]]);