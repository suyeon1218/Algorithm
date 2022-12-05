/*
  같은 알파벳들이 모인 문자열 만으로 그룹을 만들어주는 문제
  https://leetcode.com/problems/group-anagrams/submissions/
*/

// * 1
var groupAnagrams = function(strs) {
  const map = {};

  for (let str of strs) {
    createMap(map, str);
  }

  return Object.keys(map);
};

const createMap = (map, str) => {
  const alphabet = new Array(26).fill(0);

  for (let idx = 0; idx < str.length; idx++) {
    const position = str.charCodeAt(idx) - "a".charCodeAt(0);
    alphabet[position]++;
  }

  if (map[alphabet.join("#")] === undefined) {
    map[alphabet.join("#")] = [];
  }

  map[alphabet.join("#")].push(str);
}

// ! 2
var groupAnagrams = function(strs) {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  }

  return Object.values(map);
};