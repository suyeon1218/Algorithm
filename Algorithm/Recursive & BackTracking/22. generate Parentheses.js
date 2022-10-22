// * 숫자가 들어오면 해당 숫자 쌍만큼의 괄호를 모두 출력하는 문제 

// ! s += "("는 아래에 한 번 더 나오는 if문까지 영향을 주게 됨

 var generateParenthesis = function(n) {
    const res = [];
    
    const go = (l, r, s) => {
        if (s.length === n * 2) {
            res.push(s);
            return;
        }
        
        if(l < n) {
            go(l+1, r, s + "(");
        }
        
        if(r < l) {
            
            go(l, r+1, s + ")");
        }
    }
    
    go(0, 0, "");
    
    return res;
};