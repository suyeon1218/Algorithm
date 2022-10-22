// * Medium : https://leetcode.com/problems/where-will-the-ball-fall/
// 대각선 top-left -> bottom-right : 1
// 대각선 top-right -> bottom-left : -1
// 로 표할 수  있을 때  각 공이 빠져나오는 col을 return, 빠져나올 수 없으면 -1 return

 var findBall = function(grid) {
    const res = [];
    let row = 0;
    let col = 0;
    let ball = 0;
    
    while (ball < grid[0].length) {        
        if (ball === grid[0].length - 1 && grid[0][col] === 1) {
            res.push(-1);
            break;
        }
        
        while (row < grid.length) {
            if (grid[row][col] === 1) {
                if (grid[row][col + 1] === 1) {
                    row++;
                    col++;
                } else {
                    break;
                }
            }
            
            else if (grid[row][col] === -1) {
                if (grid[row][col - 1] === -1) {
                    row++;
                    col--;
                } else {
                    break;
                }
            }
        }
        
        if (row < grid.length) {
            res.push(-1);
        } else {
            res.push(col);
        }
        
        ball++;
        row = 0;
        col = ball;
    }
    
    return res;
};