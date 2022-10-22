// * https://leetcode.com/problems/longest-consecutive-sequence/discuss/139940/Simple-JavaScript-O(n)-solution
// * Map 이 아닌 Set 자료형 사용

function longestConsecutive(nums) {
    if (nums == null || nums.length === 0) return 0;
    
    const set = new Set(nums);
    let max = 0;
  
    for (let num of set) {
      if (set.has(num - 1)) continue;  // make sure starting from the beginning of sequence
  
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