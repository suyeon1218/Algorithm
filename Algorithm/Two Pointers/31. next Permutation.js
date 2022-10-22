// * 사전 숫서상 다음 숫자를 찾는 문제 

// ! end에서 부터 처음으로 감소하는 값을 찾음 (이전 값은 계속해서 증가해온 값)
// ! 그 다음으로 큰 수를 찾아서 바꾸고 우측 정렬을 해줌
// ! in plcae라서 들어온 nums만 가지고 바꾸는 문제 


var nextPermutation = (nums) => {
    for(let i=nums.length-1; i>=0; i--) {
        if(nums[i] < nums[i+1]) { // 뒤에서 최초로 감소하는 수
            const large = nextLarge(i); // 최초로 감소하는 수의 오른쪽에서부터 i보다 큰 값
            swap(i, large);
            reverse(i+1);
            return;
        }
    }

    nums.reverse();

    const nextLarge = (idx) => {
        for(let i=nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) {
                return i; // 최초로 감소하는 수니까... 그 전까진 계속 커지기만 했을 거임!
            }
        }
    }

    const swap = (i, j) => {
        return [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    const reverse = (start) => {
        const end = nums.length - 1; 

        while(start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
}

