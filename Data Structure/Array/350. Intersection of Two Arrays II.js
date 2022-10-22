// * Easy

// * Mine : two pointer
 var intersect = function(nums1, nums2) {
    let res = [];
    let p1 = 0, p2 = 0;
    nums1 = nums1.sort(function(a, b) {return a - b});
    nums2 = nums2.sort(function(a, b) {return a - b});
    
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            res.push(nums1[p1]);
            p1++;
            p2++;
        } else if (nums1[p1] > nums2[p2]) {
            p2++;
        } else {
            p1++;
        }
    }
    
    return res;
};


// ! 더 좋은 방법
// * discuss : Hash Map
var intersect = function(nums1, nums2) {
    const map = new Map();
    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    const result = [];
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    return result;
};