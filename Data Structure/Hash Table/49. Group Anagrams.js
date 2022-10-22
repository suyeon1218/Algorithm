var groupAnagrams = function(strs) {
    const res = [];
    const sortedStrs = [];
    const strMap = new Map();

    for(let i=0; i<strs.length; i++) {
        let newStr = [...strs[i]].sort().join("");
        sortedStrs.push(newStr);

        if(!strMap.has(newStr)) {
            strMap.set(newStr, []);
        }

        let property = strMap.get(newStr);
        property.push(strs[i]);
        strMap.set(newStr, property);
    }
    
    for(let key of strMap.keys()) {
        res.push(strMap.get(key));
    }

    return res;
};

const strs = ["eat","tea","tan","ate","nat","bat"];

groupAnagrams(strs);
