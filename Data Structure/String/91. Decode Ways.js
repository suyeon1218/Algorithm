/*
  A - Z를 1 - 26 으로 대체한 암호문이 주어질때 암호문을 해독할 수 있는 경우의 수를 출력하는 문제
  https://leetcode.com/problems/decode-ways/
*/

/*
  * Discuss
  DP
*/
function numDecodings(s) {
  if (s[0] === '0') return 0;

  const dp = new Array(s.length + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  // dp의 각 숫자는 해당 자리까지 가능한 조합의 수를 의미

  for (let i = 2; i <= s.length; i++) {
    const oneDigit = Number(s.slice(i - 1, i));  // last one digit
    if (oneDigit >= 1 && oneDigit <= 9) { // 한자릿수로 분해 가능하면
      dp[i] += dp[i - 1]; // 현재 자리까지 분해서에 이전자리까지 분해수를 더해주기
    }

    const twoDigit = Number(s.slice(i - 2, i));  // last two digits
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2]; // 두자리수 전의 분해수를 더해주기
    }
  }

  return dp[s.length];
}

/*
  * mine
  excees time limit
*/
var numDecodings = function(s) {
  let way = 0;
  
  const findWay = (string) => {
      if (string[0] === "0") {
          return;
      }
      
      if (string === "") {
          way++;
          return;
      }
      
      const slice1 = string.slice(0, 1);
      const slice2 = string.slice(0, 2);
      
      findWay(string.slice(1));
      if (slice2 <= 26 && slice1 !== slice2) {
          findWay(string.slice(2));
      }
  }
  findWay(s);
  
  return way;
};