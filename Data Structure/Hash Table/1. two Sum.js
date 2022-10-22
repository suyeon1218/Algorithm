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
