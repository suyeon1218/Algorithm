// * Easy: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan&id=data-structure-i
// nums1은 nums2의 길이만큼 마지막부터 비어있는 상태일 떄, nums1, nums2를 병합하는 알고리즘 작성

var merge = function(nums1, m, nums2, n) {
    let totalLength = m + n - 1;
    m--;
    n--;
    
    while (totalLength >= 0) {
        if (n < 0 || nums1[m] >= nums2[n]) {
            nums1[totalLength] = nums1[m--];
        } else {
            nums1[totalLength] = nums2[n--];
        }
        totalLength--;
    }
    
    return nums1;
};