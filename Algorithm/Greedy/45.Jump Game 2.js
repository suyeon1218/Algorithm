//* greedy
var jump = function(N) {
    let count = 0;
    let currMax = 0;
    let nextMax = 0;

    for(let i=0; i<N.length; i++) {
        nextMax = Math.max(N[i] + i, nextMax);

        if(i === currMax) {
            count++;
            currMax = nextMax;
        }
    }

    return count;
};