const rotate = (matrix) => {
    const n = matrix.length;
    const res = [];

    for (let i=0; i<n; i++) {
        const row = [];

        for(let j=n-1; j>=0; j--) {
            console.log(matrix[j][i]);
            row.push(matrix[j][i]);
        }
        res.push(row);
    }

    return res;
}

const answer = rotate([[1,2,3],[4,5,6],[7,8,9]]);
console.log(answer);