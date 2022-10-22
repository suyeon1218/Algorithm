// * 중첩되는 범위를 합치는 문제
// * discuss:  https://leetcode.com/problems/merge-intervals/discuss/716744/JavaScript-Clean-Code

var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]); // ! sort가 중요
[]
    const result = [intervals[0]];
    console.log(result);


    for (let [start,end] of intervals) {
        const endprev = result.at(-1)[1];
        if (start <= endprev) {
            result.at(-1)[1] = Math.max(end, endprev);
        } else {
            result.push([start, end]);
        }
    }

    return result;
}

const intervals = [[3,4],[1,6],[2,4],[3,18]];
merge(intervals);