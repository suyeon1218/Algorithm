// * 유효한 괄호인지 확인하는 문제 

// ! 1. while문 돌릴 시 python 처럼 while(s)로 돌리면 무한 루프 걸림! 주의
// ! 2. if 에서 queue.pop()으로 매번 뽑아 비교하려고 하면 메모리 참조 오류 일어남
 var isValid = function(s) {
    s = s.split("");
    const open = ['{', '(', '['];
    const queue = [];
    
    
    while (s.length > 0) {
        queue.push(s.pop());
        const len = queue.length;
        
        if (open.includes(queue[len - 1])) {
            const lastBraket = queue.pop();
            const compareBraket = queue.pop();
            
            if (lastBraket === '(') {
                if(compareBraket !== ')') {
                    return false;
                }
            } else if (lastBraket === '{') {
                if(compareBraket !== '}') {
                    return false;
                }
            } else if (lastBraket === '[') {
                if(compareBraket !== ']') {
                    return false;   
                }
            }
        }
    }
    
    if(queue.length !== 0) {
        return false;
    }
    
    return true;
};