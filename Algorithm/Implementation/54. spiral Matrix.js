// * 9.2
// * discuss : https://leetcode.com/problems/spiral-matrix/discuss/651503/Javascript-simple-and-clean
 var spiralOrder = function(matrix) {
    const res = [];
    
    while(matrix.length) {
        const first = matrix.shift(); // return remove element
        res.push(...first);
        
        for(let m of matrix) {
            let val = m.pop();
            if (val) {
                res.push(val);
                m.reverse(); // except the first, all m is reversed
            }
        }
        matrix.reverse();
    }
    
    return res;
};

// * discuss 2

var spiralOrder = function(matrix) {
    var spiralArray = [];
    if (matrix.length === 0) {
        return spiralArray;
    }
    var rowBegin = 0;
    var rowEnd = matrix.length - 1;
    var colBegin = 0;
    var colEnd = matrix[0].length - 1;
    
    while (colBegin <= colEnd && rowBegin <= rowEnd) {
        for (var i = colBegin; i <= colEnd; i++) {
            spiralArray.push(matrix[rowBegin][i]);
        }
        rowBegin++;
        for (var i = rowBegin; i <= rowEnd; i++) {
            spiralArray.push(matrix[i][colEnd]);
        }
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (var i = colEnd; i >= colBegin; i --) {
                spiralArray.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;
        if (colBegin <= colEnd) {
            for (var i = rowEnd; i >= rowBegin; i--) {
                spiralArray.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
    }
    return spiralArray;
};