// * Medium : https://leetcode.com/problems/triangle/?envType=study-plan&id=algorithm-i
// 삼각형 DP 문제

 var minimumTotal = function(triangle) {
    for (let i=1; i<triangle.length; i++) {
        for (let j=0; j<triangle[i].length; j++) {
            if (j === 0) {
                triangle[i][j] += triangle[i-1][0];
            }
            
            else if (j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i-1][j-1];
            }
            
            else {
                triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j]);
            }
        }
        console.log(triangle[i]);
    }
    
    console.log(Math.min(triangle[triangle-1]));
};

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);