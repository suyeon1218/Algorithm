//! 최종의최종의 최종최종!!!

// * 두 가지 경우 =>
// * 1.  nums[left] > nums[mid]
// * 2.  nums[left] < nums[mid]
// * 이 경우, target의 범위를 비교하여 left 와 right의 범위를 옮겨주면 끝

const search3 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] < nums[mid]) {
            // ! 왼쪽에 있는 수가 mid 값보다 작은 경우
            if (nums[left] <= target && target < nums[mid]) {
                // * left & mid 사이 target이 있으면
                right = mid - 1; // * right 범위를 옮김
            } else {
                // * left 범위를 옮김
                left = mid + 1;
            }
        } else {
            // ! 왼쪽이 mid 값보다 큰 경우
            if (nums[left] <= target || target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
};

const search = (nums, target) => {
    let pivot = 0;
    let left = 1;
    let right = nums.length - 1;
    const larger = [];
    const smaller = [];

    if (nums[pivot] === target) {
        return pivot;
    }

    while (left <= right) {
        if (nums[left] > nums[pivot]) {
            larger.push(nums[left]);
            left++;
        }

        if (nums[right] < nums[pivot]) {
            smaller.unshift(nums[right]);
            right--;
        }
    }

    if (target > nums[pivot]) {
        if (larger[0] > target || larger[larger.length - 1] < target) {
            pivot = -1;
            return pivot;
        } else {
            pivot = search(larger, target);
            pivot === -1 ? (pivot = -1) : pivot + 1;
            return pivot;
        }
    }

    if (target < nums[pivot]) {
        if (smaller[0] > target || smaller[smaller.length - 1] < target) {
            pivot = -1;
            return pivot;
        } else {
            pivot = search(smaller, target);
            pivot === -1 ? (pivot = -1) : pivot + larger.length;
            return pivot;
        }
    }
};

// ! 이전에 한 거
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
    let pivot = 0;
    const larger = [];
    const smaller = [];

    if (nums[pivot] === target) {
        return pivot;
    }

    let left = 1;
    let right = nums.length - 1;

    if (nums[left] > nums[pivot] && nums[right] > nums[pivot]) {
        // * pivot 우측의 수는 모두 pivot보다 큰 수
        if (target < nums[pivot] || nums[right] < target) {
            // * target이 pivot보다 작거나 / target이 가장 큰 수보다 크면 return - 1
            return -1;
        }
        pivot = search(nums.slice(1, nums.length), target) + 1;
        return pivot;
    } else if (nums[left] < pivot && nums[right] < pivot) {
        // * pivot 우측의 수는 모두 pivot보다 작은 수
        if (target > nums[pivot] || nums[left] < target) {
            // * target이 pivot 보다 크거나 / target이 가장 작은 수보다 작으면 return -1
            return -1;
        }

        pivot = search(nums.slice(1, nums.length), target) + 1;
        return pivot;
    } else if (nums[left] > nums[pivot] && nums[right] < nums[pivot]) {
        // * pivot 우측의 수는 pivot 보다 작을 수도, 클 수도 있음
        while (left < right) {
            if (nums[left] > nums[pivot]) {
                larger.push(nums[left]);
                left++;
            }

            if (nums[right] < nums[pivot]) {
                smaller.unshift(nums[right]);
                right--;
            }
        }

        if (target < nums[pivot]) {
            pivot = search(smaller, target) + left.length;
            return pivot;
        } else {
            pivot = search(larger, target) + 1;
            return pivot;
        }
    }
};
