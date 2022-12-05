// * Easy
// https://leetcode.com/problems/two-sum/
// nums : 숫자 배열, target : 숫자
// 배열 속 요소 2개의 합이 target이 되는 인덱스를 return 하는 문제 

const twoSum = (nums, target) => {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (numsMap.has(target - num)) {
            return [numsMap.get(target - num), i];
        }

        numsMap.set(num, i);
    }
};
