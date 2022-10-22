// * Easy : https://leetcode.com/problems/isomorphic-strings/
// 두 문자열 s, t가 주어질 때 두 문자열은 서로 치환될 수 있는 형태인가 

// * 내가 문 푼제
 var myisIsomorphic = function(s, t) {
    s = s.split(""); 
    t = t.split(""); 
    
    const sMap = new Map();
    const tMap = new Map();
    
    for (let i=0; i<s.length; i++) {
        if (!sMap.has(s[i])) {
            sMap.set(s[i], i);
        }
        s[i] = sMap.get(s[i]);
    }

    
    for (let i=0; i<t.length; i++) {
        if (!tMap.has(t[i])) {
            tMap.set(t[i], i);
        }
        t[i] = tMap.get(t[i]);
    }
    console.log(JSON.stringify(s));
    console.log(JSON.stringify(t));
    if (JSON.stringify(s) === JSON.stringify(t)) return true;

    
    return false;
};

// * discuss : https://leetcode.com/problems/isomorphic-strings/discuss/58020/Javascript-6-lines-solution
//  * s와 t의 문자 하나하나는 서로 치환되어야 한다. 
var isIsomorphic = function(s, t) {
    var obj = {};
    for(var i = 0; i < s.length; i++){
        if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
        if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
        if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
        console.log(obj);
    }
    return true;
};

// * discuss : https://leetcode.com/problems/isomorphic-strings/discuss/263858/JavaScript-91.97
// * 2번과 방법은 동일 -> object를 2개로 만들어서 사용
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    if (s === t) {
        return true;
    }
    const Sobj = {};
    const Tobj = {};
    for(let i = 0; i < s.length; i++) {
        const sletter = s[i];
        const tLetter = t[i];

        if (!Tobj[tLetter]) {
            Tobj[tLetter] = sletter;
        }
        if (!Sobj[sletter]) {
            Sobj[sletter] = tLetter;
        }
        if (Sobj[sletter] !== tLetter || Tobj[tLetter] !== sletter) {
            return false;
        }
    }
    return true;
};


isIsomorphic("abb","cdb");