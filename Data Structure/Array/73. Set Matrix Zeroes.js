// * discuss 안보고 품 -> discuss 다른 해결법도 확인

// ! 1번 해결
 var setZeroes = function(matrix) {
    const row = {};
    const col = {};
    
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (row[i] === undefined) { // * 중복 안 만들기 위해서...
                    row[i] = i;
                }
                
                if (col[j] === undefined) {
                    col[j] = j;
                }
            }
        }
    }

    for (let key in row) {
        for(let i=0; i<matrix[key].length; i++) {
            matrix[key][i] = 0;
        }
    }

    for (let key in col) {
        for (let i=0; i<matrix.length; i++) {
            matrix[i][key] = 0;
        }
    }
};

// ! 2번 해결

var setZeroes = function(matrix) {

    var track = [] // * 배열 사용
    
    // find zeros
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] === 0) track.push([i, j])                
      }
    }

    for(var i = 0; i < track.length; i++){
      var [x, y] = track[i] // * 0이 있었던 위치 각각 x,y에 집어넣음
      
      // update row
      for(var j = 0; j < matrix[0].length; j++){ // * 그럼 같은 행에 대해서도 똑같은 작업을 다시 반복하는 거 아냐? 비슷하려나...
        matrix[x][j] = 0
      }
      
      // udpate column
      for(var j = 0; j < matrix.length; j++){
        matrix[j][y] = 0
      }

    }
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]]);