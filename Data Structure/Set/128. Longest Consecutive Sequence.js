// * Medium
// https://leetcode.com/problems/longest-consecutive-sequence/
// 숫자 배열이 주어질 때, 최대 연속으로 이어지는 숫자가 몇개 있는지 return 하는 알고리즘

// * Discuss
// Set을 이용하여 num + 1이 존재하면 count를 +1 시켜가며 연속되는 숫자를 셈
function longestConsecutive(nums) {
    if (nums == null || nums.length === 0) return 0;
    
    const set = new Set(nums);
    let max = 0;
  
    for (let num of set) {
      if (set.has(num - 1)) continue;
  
      let currNum = num;
      let currMax = 1;
  
      while (set.has(currNum + 1)) {
        currNum++;
        currMax++;
      }

      max = Math.max(max, currMax);
    }
  
    return max;
  }