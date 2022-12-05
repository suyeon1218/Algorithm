// https://leetcode.com/problems/longest-palindromic-substring/discuss/428331/Javascript-DP
// 대칭되는 문자열 중 가장 긴 subString을 출력하는 문제

const longestPalindrome = (s) => {
    if (s.length <= 1) {  
        return s;
    }

    const dpList = [...new Array(s.length + 1)].map(_=> new Array(s.length + 1).fill(false));
    // new Array(number) => 숫자를 넣으면 그만큼의 배열을 return
    // JS에서는 New Array 보다는 []로 배열을 초기화하는 것을 권장하고 있음.

    let longPS = '';

    // 1. 하나의 문자열은 각각 다 palindrome 이므로 true로 바꾸기
    for(let i = 0; i < s.length; i++) {
        dpList[i][i] = true;
        longPS = s[i];
    }

    // 2. 연속된 두개의 같은 문자열일 경우 palindrome이므로 true로 바꾸기
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i+1]) {
            dpList[i][i+1] = true;
        }
        //그 다음 문자열이 true면 longPS 바꾸기
        if(dpList[i][i+1]) {
            longPS = s.substring(i, i+2);
            // subString이 아니라 substring!
        }
    }

    // 3. 문자열을 넓혀가면서 palindrome인지 검사하기

    // i와 j는 각각 s 문자열의 범위를 뜻함 i ~ j 를 검사 
    // i 는 문자열 끝부터
    // j 는 i에서 두번 째 떨어진 문자 (하나 떨어진 문자열은 검사했으니까)
    for(let i = s.length-1; i >= 0; i--) {
        for(let j = i+2; j < s.length; j++) {
            // dpList[i+1][j-1] => i와 j사이의 문자열이 palindrome인지 검사 
            // s[i] === s[j] 면 palindrome i~j까지 palindrome
            s[i][j] = dpList[i+1][j-1] && s[i] === s[j];

            if(dpList[i][j]) {
                // 현재 lps의 길이가 기존의 lps길이보다 길면
                longPS = longPS.length < (j-i+1) ? s.substring(i, j+1) : longPS;
            }
        }
    }
    
    return longPS;
}

longestPalindrome("saefss");