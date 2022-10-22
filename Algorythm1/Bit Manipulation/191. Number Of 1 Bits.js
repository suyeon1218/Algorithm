// * Easy : https://leetcode.com/problems/number-of-1-bits/?envType=study-plan&id=algorithm-i

var hammingWeight = function(n) {
    let sum = 0;
    
    while (n !== 0) {
        sum += n & 1;
        n = n >>> 1;
    }
    
    return sum;
};

// * 여기 딸려오는 비트 연산 문제 
// https://leetcode.com/problems/counting-bits/
// https://leetcode.com/problems/reverse-bits/
// https://leetcode.com/problems/binary-watch/
// https://leetcode.com/problems/hamming-distance/
// https://leetcode.com/problems/binary-number-with-alternating-bits/
// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/