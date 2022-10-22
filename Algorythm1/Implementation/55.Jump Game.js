// * Medium:  https://leetcode.com/problems/jump-game/
// 처음에서 각 구간의 숫자만큼 최대로 점프할 수 있을떄 끝 배열까지 도달할 수 있으면 true, 아니면 false를 return 하는 문제 
// * discuss 안보고 풀었음

 var canJump = function(nums) {
    let currMax = nums[0]; // 현재 구간에서 최대 이동할 수 있는 인덱스
    let nextMax = 0; // 배열 전체에서 최대로 갈 수 있는 인덱스
    
    if (nums.length === 1) {
        return true;
    }
    
    for (let curr=0; curr<nums.length; curr++) {
        nextMax = Math.max(nextMax, curr + nums[curr]); 
        // 더 큰 인덱스로 이동할 수 있는지 확인 
        
        if(curr === currMax) {
            if(curr === nextMax) { // 배열 전체에서 최대로 이동할 수 있는 인덱스가 현재 인덱스면(배열 끝에 다다르지도 못하고 끝나면 false)
                return false;
            }
            currMax = nextMax; // 그렇지 않으면 다음 구간으로 넘어가서 탐색
        }
        
        if(nextMax >= nums.length - 1) { // 최대로 이동할 수 있는 인덱스가 배열 길이와 같거나 크면 true
            return true;
        }
    }
    
    return false;
};