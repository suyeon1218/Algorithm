/*
  숫자 num이 주어질때, 로마 문자로 바꾸는 문제
  https://leetcode.com/problems/integer-to-roman/  
*/

// 풀이
var intToRoman = function (num) {
  const standardNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let changeRomanNum = "";

  for (let idx = 0; idx < standardNums.length; idx++) {
    const share = parseInt(num / standardNums[idx]);

    if (share !== 0) {
      for (let count = 0; count < share; count++) {
        changeRomanNum += romanNums[idx];
      }
      num -= share * standardNums[idx];
    }
  }

  return changeRomanNum;
};

// * 훨씬 더 간단하게 풀었네 
// Discuss
const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

var intToRoman = function (N) {
  let ans = "";
  for (let i = 0; N; i++)
    while (N >= val[i]) {
      ans += rom[i];
      N -= val[i];
    }
  return ans;
};
