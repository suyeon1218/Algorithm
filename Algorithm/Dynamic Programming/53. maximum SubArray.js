//  * https://leetcode.com/problems/maximum-subarray/?envType=study-plan&id=data-structure-i
// ? Data Structure 분류인데 사람들 다 DP로 푸네... -> O(N)
// ? 분할정복 알고리즘으로도 풀어보라고 함... 그게 more subtle(정교?) 하대
  //https://leetcode.com/problems/maximum-subarray/discuss/364839/Divide-and-Conquer-Commented-Explanation-and-Big-O-(JS) 
  // 분할정복 leetcode.... 보다가 토할듯 

// * discuss : https://leetcode.com/problems/maximum-subarray/discuss/20471/JavaScript-solution
 var maxSubArray = function(nums) {
  let prev = 0;
  let maxNum = -Number.MAX_VALUE;
  
  for(let i=0; i<nums.length; i++) {
      prev = Math.max(nums[i] + prev, nums[i]);
      // 현재 값까지 합한 값이 더 크면 합 유지
      // 현재 값이 합한 값보다 더 크면 현재 값으로 재시작
      
      maxNum = Math.max(maxNum, prev);
      // 이전의 max값과 새로 바뀐 prev값을 비교해서 더 큰 합 선출
  }
  
  return maxNum;
};

// * discuss: https://leetcode.com/problems/maximum-subarray/discuss/139218/Javascript-very-clear-and-short-DP-solution
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++){
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  // * 이전값과 자신이 더해져 새로운 배열을 이루게 되면 자연스레 그 뒤 숫자들은 앞 숫자에 영향을 받게 된다.
  // * [-2,1,-3,4,-1,2,1,-5,4]
// * 4 3 5 6 => nums[3] / nums[3] + nums[4] / nums[3] + nums[4] + nums[5] ... 식으로 늘어난다. 
  return Math.max(...nums);
};