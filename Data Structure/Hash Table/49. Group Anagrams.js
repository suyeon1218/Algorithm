// * Medium
// https://leetcode.com/problems/group-anagrams/
// 문자열 배열 strs가 주어질 때, 같은 문자만 사용한 그룹끼리 출력하는 문제 


// * Mine
// * Obejct.values() + Object 사용했으면 더 쉽게 풀 수 있었을 문제
var groupAnagrams = function(strs) {
    const res = [];
    // const sortedStrs = [];
    // const strMap = new Map();
    const strMap = {};

    for(let str of strs) {
        // for (let i=0; i<strs.length; i++) 대신 for of
        let newStr = [...str].sort().join("");
        // * sortedStrs 는 왜 있는 거야 도대체.......
        // sortedStrs.push(newStr); 

        if(!strMap[newStr]) {
            // has 쓸 필요 x
            // strMap.set(newStr, []);
            strMap[newStr] = [];
        }

        // * 다시 꺼내와서 배열 추가하고 다시 넣을 필요 X
        // let property = strMap.get(newStr);
        // property.push(strs[i]); 
        // strMap.set(newStr, property);
        strMap[newStr].push(str);
    }
    
    // for(let key of strMap.keys()) {
    //     res.push(strMap.get(key));
    // }

    // return res;
    return Object.values(strMap);
};

groupAnagrams(strs);


var groupAnagrams = (strs) => {
    const strMap = {};

    for (let str of strs) {
        const key = [...str].sort().join("");

        if (! strMap[key]) {
            strMap[key] = [];
        }

        strMap[key].push(str);
    }
    // ! Object.values() 메소드
    return Object.values(strMap)
}