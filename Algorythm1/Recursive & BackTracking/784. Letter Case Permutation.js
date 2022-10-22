// * Medium :  https://leetcode.com/problems/letter-case-permutation/

// * 초기
var letterCasePermutation = function(s) {
    const res = [];
    
    const go = (letter, start) => {
        if (letter.length === s.length) {
            res.push(letter);
            return;
        }
        
        // 이 경우 쓸 데 없이 2 ~ s.length 각 문자까지도 첫번째 문자열로 넣어서 검사하게 됨
        for (let i=start; i<s.length; i++) {
            if (Number.isNaN(Number(s[i]))) {
                go(letter + s[i].toUpperCase(), i + 1);
                go(letter + s[i].toLowerCase(), i + 1);
            } else {
                go (letter + s[i], i + 1);
            }
        }
    }
    
    go("", 0);
    
    return res;
};


// * 수정 이후
 var letterCasePermutation = function(s) {
    const res = [];
    
    const go = (letter, start) => {
        if (letter.length === s.length) {
            res.push(letter);
            return;
        }
        
        if (Number.isNaN(Number(s[start]))) {
            go(letter + s[start].toUpperCase(), start + 1);
            go(letter + s[start].toLowerCase(), start + 1);
        } else {
            go (letter + s[start], start + 1);
        }
    }
    
    go("", 0);
    
    return res;
};


// * 참고 discuss
var letterCasePermutation = function(S) {
    let result = [];
    dfs("", 0);
    
    function dfs(current, i){
        if(current.length == S.length) {
            result.push(current);
            return;
        }
        if(S.charAt(i) >= '0' && S.charAt(i) <= '9') {
            dfs(current + S.charAt(i), i + 1);
        } else {
            dfs(current + S.charAt(i).toLowerCase(), i + 1);
            dfs(current + S.charAt(i).toUpperCase(), i + 1);
        }
    }
    
    return result;
};