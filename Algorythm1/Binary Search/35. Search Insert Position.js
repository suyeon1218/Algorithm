// 
https://leetcode.com/problems/search-insert-position/?envType=study-plan&id=algorithm-i
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(array, target, start, end) {
  if (start > end) return start;
  
  const mid = Math.floor((start + end) / 2);
  
  if (array[mid] === target) return mid;
  
  if (target > array[mid]) return binarySearch(array, target, mid+1, end);
  if (target < array[mid]) return binarySearch(array, target, start, mid-1);
}