// https://leetcode.com/problems/squares-of-a-sorted-array/?envType=study-plan&id=algorithm-i
// * easy - O(N)


// * my solution
var sortedSquares = function (nums) {
  const res = [];
  // 더 쉬운 방법이 있을 거 같은데
  if (nums[0] >= 0) {
    for (let i = 0; i < nums.length; i++) {
      res.push(nums[i] ** 2);
    }
  }

  if (nums[0] < 0) {
    if (nums[nums.length - 1] <= 0) {
      for (let i = nums.length - 1; i >= 0; i--) {
        res.push(nums[i] ** 2);
      }
    } else {
      let right = 0;

      while (nums[right] < 0) {
        right++;
      }

      let left = right - 1;

      while (left >= 0 || right < nums.length) {
        if (left < 0) {
          res.push(nums[right] ** 2);
          right++;
          continue;
        }

        if (right > nums.length - 1) {
          res.push(nums[left] ** 2);
          left--;
          continue;
        }

        if (nums[left] ** 2 <= nums[right] ** 2) {
          res.push(nums[left] ** 2);
          left--;
        } else {
          res.push(nums[right] ** 2);
          right++;
        }
      }
    }
  }

  return res;
};

// * discuss
// https://leetcode.com/problems/squares-of-a-sorted-array/discuss/285251/Javascript-two-pointers-solution
// left, right 설정하고 큰 수부터 동적배열을 이용하여 초기화시키는 방법

 var sortedSquares = function(nums) {
  const res = [];
  let left = 0;
  let right = nums.length - 1;
  let pointer = right;
  
  while (left <= right) {
      if (nums[left] ** 2 >= nums[right] ** 2) {
          res[pointer] = nums[left] ** 2;
          // res[pointer--] = nums[left++] ** 2 로 줄여쓸 수 있음 
          pointer--;
          left++;
      } else {
          res[pointer] = nums[right] ** 2;
          pointer--;
          right--;
      }
  }
  return res;
};