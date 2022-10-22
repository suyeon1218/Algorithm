// * Easy : https://leetcode.com/problems/power-of-two/?envType=study-plan&id=algorithm-i
// 2의 제곱값인지 확인하는 문제

 var isPowerOfTwo = function(n) {
    return n > 0 & ((n & n-1) === 0);
};