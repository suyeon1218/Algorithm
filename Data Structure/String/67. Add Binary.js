/*
  문자열로 적힌 이진수를 받아와 더한 값을 이진수로 출력하는 문제
  https://leetcode.com/problems/add-binary/
*/

/* 
  * Discuss
  2진수 사용, BigInt Obejct 사용
  - Number로 변환해도 값이 나오지면 큰 숫자 케이스를 통과하지 못함
*/
var addBinary = function(a, b) {
  const binaryA = `0b${a}`;
  const binaryB = `0b${b}`;
  const binarySum = BigInt(binaryA) + BinInt(binaryB);
  
  return binarySum.toString(2);
};