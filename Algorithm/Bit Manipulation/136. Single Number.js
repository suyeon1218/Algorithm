// * Easy : https://leetcode.com/problems/single-number/
// 모든 숫자가 두번나오는 배열 중 한 번 쓰인 숫자를 출력하는 문제

// disscuss : https://leetcode.com/problems/single-number/discuss/43193/JavaScript-solution
 var singleNumber = function(nums) {
    // * 같은 숫자에 대해 XOR 연산을 취하면 0이 됨
   return nums.reduce((prev, curr) => prev ^ curr);
};