// * https://leetcode.com/problems/contains-duplicate/?envType=study-plan&id=data-structure-i

 var containsDuplicate = function(nums) {
  const numMap = {};
  
  for (let i=0; i<nums.length; i++) {
      if (numMap[nums[i]]) return true;
      numMap[nums[i]] = true;
  }
  
  return false;
};

// * discuss : https://leetcode.com/problems/contains-duplicate/discuss/61054/Javascript-very-fast-solution

var containsDuplicate = function(nums) {
  var obj = {};
  
  for(var i = 0; i < nums.length; i++){
      obj[nums[i]] = obj[nums[i]] + 1 || 1;
      // * undefined || 1 일 시, 1이 들어감
      // * 1이상의 숫자 || 1 일 시, 앞의 숫자가 들어감
      
      if(obj[nums[i]] > 1) return true;
  }
  
  return false;
};