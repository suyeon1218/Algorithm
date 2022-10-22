// * Easy : https://leetcode.com/problems/happy-number/submissions/

const happyNumber = (number) => {
    let sum = 0;

    while (number !== 0) {
        sum += number & 1;
        number = number >>> 1;
    }

    return sum;
}