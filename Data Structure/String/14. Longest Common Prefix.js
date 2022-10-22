// * Easy : https://leetcode.com/problems/longest-common-prefix/submissions/
// 문자열의 처음부터 빅하여 가장 긴 문자열을 return 하는 문제

// * My Solution
var longestCommonPrefix = function (strs) {
    let res = [...strs[0].split("")];

    for (let i = 1; i < strs.length; i++) {
        const curr = strs[i].split("");
        const next = [];

        for (let char = 0; char < Math.min(res.length, curr.length); char++) {
            if (res[char] === curr[char]) {
                next.push(res[char]);
            } else {
                break;
            }
        }

        res = next;
    }

    return res.join("");
};

longestCommonPrefix(["flower", "flow", "flight"]);

// * Discuss using every method
var longestCommonPrefix = function (strs) {
    let prefix = "";
    let maxPrefixLength = Math.min(...strs.map((str) => str.length));
    // 가장 길이가 짧은 문자열을 기준으로 검사 
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if (strs.every((str) => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }
    return prefix;
};
