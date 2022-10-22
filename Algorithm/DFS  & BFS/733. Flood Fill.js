// * 2022.10.04
// * Graph, DFS, BFS
// leetcode 75 study plan - Day 9
// https://leetcode.com/problems/flood-fill/?envType=study-plan&id=level-1


// * DFS
const fullfill = (image, sr, sc, color) => {
  const num = image[sr][sc];
  const isOutOfBound = (row, col) => {
    return row < 0 || col < 0 || row > image.length - 1 || col > image[0].length - 1;
  }
  const solution = (row, col) => {
    if (isOutOfBound(row, col)) return;
    if (image[row][col] === color || image[row][col] !== num) return;
    image[row][col] = color;
    solution(row-1, col);
    solution(row+1, col);
    solution(row, col-1);
    solution(row, col+1);
  }
  solution(sr, sc, image[sr][sc]);
  return image;
}

fullfill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);

// * BFS
// https://leetcode.com/problems/flood-fill/discuss/626540/JavaScript-2-Intuitive-Solutions-Using-DFS-and-BFS
var floodFill = function(image, sr, sc, newColor) {
  const currColor = image[sr][sc];
  if(currColor === newColor) return image;
  const queue = [[sr, sc]];
  
  while(queue.length) {
      const [row, col] = queue.shift();
      if(image[row][col] === currColor) {
          image[row][col] = newColor
    if(row-1 >= 0) queue.push([row-1, col]);  //up
          if(row+1 < image.length) queue.push([row+1, col]);  //down
          if(col+1 < image[0].length) queue.push([row, col+1]);  //right
          if(col-1 >= 0) queue.push([row, col-1]);  //left
      }
  }
  return image;
};