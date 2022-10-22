// * 0,1,2 3개의 숫자를 in place로 정렬하는 문제
// * 문제부터 감이 안 잡혀서 바로 discuss 봄... 
// ! https://leetcode.com/problems/sort-colors/discuss/139809/Clean-JavaScript-one-pass-solution

// * 해결방법
// * 0과 2를 각각 처음과 끝으로 옮겨주면 1은 알아서 정렬되는 방법  - two points 사용

 var sortColors = function(nums) {
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    let index = 0;
    let left = 0;
    let right = nums.length - 1;
    
    while (index <= right) {
        const num = nums[index];
        
        if (num === 0) {
            swap(index, left);
            index++;
            left++;
        }
        
        else if (num === 2) {
            swap(index, right);
            right--;
        }
        else {index++;}
    }
};