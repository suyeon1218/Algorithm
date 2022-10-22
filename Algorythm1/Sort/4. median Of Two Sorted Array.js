const mergeSorted = (nums1, nums2) => {
    const nums3 = [];

    while(nums1.length && nums2.length) {
        if(nums1[0] <= nums2[0]) {
            nums3.push(nums1.shift());
        }

        else {
            nums3.push(nums2.shift());
        }
    }

    return [...nums3, ...nums1, ...nums2];
}

const findMedainSortedArrays = (nums1, nums2) => {
    const nums3 = mergeSorted(nums1, nums2);
    console.log(nums3);
    const listLen = nums3.length;

    if(listLen % 2 == 0) {
        return (nums3[listLen / 2] + nums3[(listLen/2) -1])/2;
    }

    else{
        return (nums3[Math.floor(listLen/2)]);
    }

}

console.log(findMedainSortedArrays([0,0], [0,0]));