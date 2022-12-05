
/* 
*/
const MAX_IP_LENGTH = 4;
const MAX_BLOCK_DIGIT = 3;

var restoreIpAddresses = function (s) {
  const Ip = [];

  if (s.length > 12) {
    return Ip;
  }

  const sliceIp = (digits, currIp, position) => {
    if (position === MAX_IP_LENGTH) {
      Ip.push(currIp.join("."));
    }

    if (digits === "") {
      return;
    }
    // ! 6. 공백상태의 문자열이 남아있어서 반복문을 수행하게 됨 
    
    for (let count = 1; count <= 3; count++) {
      const digit = digits.slice(0, count); // ! 3. 마지막 남은 자리수들이 중복으로 들어감
      
      if (digits.length - count > (MAX_IP_LENGTH - position) * MAX_BLOCK_DIGIT) { // ! 1. s.length -> digits.length
        continue;
      }
      if (isValidDigit(digit)) {
        sliceIp(digits.slice(count), [...currIp, digit], position + 1); // ! 2. position++ -> position + 1
      }
      if (position === MAX_IP_LENGTH) {
        break;
      }
    }

    return;
  };

  sliceIp(s, [], 1);

  return Ip;
};

const isValidDigit = (digit) => {
  if (digit < 0 || digit > 255) {
    return false;
  }

  if (digit.length !== 1 && digit[0] === 0) {
    // ! 4. digit.length !== 1 -> digit.length > 1
    // ! 5. digit[0] === 0 -> digit[0] == "0"
    return false;
  }

  return true;
};

restoreIpAddresses("25525511135");