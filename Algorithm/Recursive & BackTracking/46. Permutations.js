 // * Medium : https://leetcode.com/problems/permutations/
 
 var permute = function(nums) {
    const res = [];
    
    const go = (permutation, numbers) => {
        if (permutation.length === nums.length) {
            res.push(permutation);
            return;
        }
        
        for (let i=0; i<numbers.length; i++) {
            const nextNumbers = numbers.slice();
            nextNumbers.splice(i, 1);
            go([...permutation, numbers[i]], nextNumbers.slice());
        }
    }
    
    go([], nums);
    
    return res;
};