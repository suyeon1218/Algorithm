// * 최대한 많은 양의 물을 출력하는 문제 

// ! left right를 양 끝에 두고 하나씩 줄여오는 해결방법

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let water = 0;

    while(left < right) {
        const currentWater = (right - left) * Math.min(height[right], height[left]);

        height[right] > height[left] ? left++ : right--;

        if(water < currentWater) {
            water = currentWater;
        }
    }

    return water;
}



