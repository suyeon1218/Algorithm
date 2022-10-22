// * backtracking
var combinationSumFun = function (candidates, target) {
  const res = [];

  const go = (index, target, nums) => {
    nums.push(candidates[index]);
    target = target - candidates[index];

    if (target <= 0) {
      if (target === 0) {
        res.push(nums);
      }
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      go(i, target, nums.slice());
      // * 백트래킹으로 푸는 문제...  nums를 그대로 넘겨주면 nums는 이미 nums.push(num)의 상태이므로
      // * 백트래킹으로 돌아와도 nums의 값은 num의 값이 추가되어 기존의 값이 변동된다
      // ! 이때 slice()는 복사한 값을 넘겨줌으로써 백트래킹을 가능하게 만든다.
    }
  };

  for (let i = 0; i < candidates.length; i++) {
    go(i, target, []);
  }
  return res;
};

combinationSumFun([2,4,6], 6);

// ! Tlqkf.... 안돼서 그냥 포기할련다 왜 이따구로 나오는지 모르겠다 ㅅㅂ...

const combinationSum = (candidates, target) => {
  const buffer = [];
  const result = [];
  search(0, target);
  return result;

  function search(startIdx, target) {
    if (target === 0) {
      return result.push(buffer.slice());
    }

    if (target < 0) return;

    if (startIdx === candidatess.length) return;

    buffer.push(candidates[startIdx]);
    search(startIdx, target-candidates[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
};

