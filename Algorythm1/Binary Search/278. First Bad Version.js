// https://leetcode.com/problems/first-bad-version/?envType=study-plan&id=algorithm-i

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1;
      let right = n;
      
      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          
          if (isBadVersion(mid)) {
              if (!isBadVersion(mid - 1)) return mid;
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      return false;
  };
};