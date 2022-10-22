var searchMatrix = function (matrix, target) {
    let low = 0;
    let high = matrix.length - 1;
    let colNum = matrix[0].length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (matrix[mid][0] <= target && target <= matrix[mid][colNum]) {
            return binarySearch(matrix[mid], 0, colNum, target);
        } else if (matrix[mid][0] > target) {
            high = mid - 1;
        } else if (matrix[mid][colNum] < target) {
            low = mid + 1;
        }
    }

    return false;
};

const binarySearch = (nums, left, right, target) => {
    if (left > right) return false;

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
    else if (nums[mid] > target)
        return binarySearch(nums, left, mid - 1, target);
    else if (nums[mid] < target)
        return binarySearch(nums, mid + 1, right, target);
};

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3);

// * Discuss

var searchMatrix = function (matrix, target) {
    let lo = 0;
    let hi = matrix.length - 1;
    let mid =  Math.floor((hi + lo) / 2);
    let n = matrix[0].length;

    // find row that could potentially hold target
    while (matrix[mid][0] > target || matrix[mid][n - 1] < target) {
        mid = Math.floor((hi + lo) / 2);

        if (matrix[mid][0] > target) {
            hi = mid - 1;
        } else if (matrix[mid][n - 1] < target) {
            lo = mid + 1;
        }

        // if such a row cannot be found return false
        if (lo > hi) return false;
    }
    // run binary search on the row
    return binarySearch2(matrix[mid], 0, matrix[mid].length, target);
};

const binarySearch2 = (row, lo, hi, target) => {
    if (lo > hi) return false;

    const mid = Math.floor((hi + lo) / 2);
    if (row[mid] > target) {
        return binarySearch(row, lo, mid - 1, target);
    } else if (row[mid] < target) {
        return binarySearch(row, mid + 1, hi, target);
    } else return true;
};