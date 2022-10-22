// * 두쌍의 노드끼리 순서를 바꿔주는 문제 

// ! 뒷 숫자부터 바꿈 + 건드린 숫자는 안 건드리므로 len 줄여주면서 앞으로
// ! 맨 앞 노드 두개는 뒤쪽 노드와 다르게 바꿔줘야 함
// ! 홀수의 경우엔 len을 하나 줄이고 시작 (아예 안 건드림) / count는 0이 아니라 1로 재설정 해줘야 함
 var swapPairs = function(head) {
    let len = 0;
    let list= head;
    
    while(list) {
        len += 1;
        list = list.next;
    }
    
    list = head;
    let listCount = 1;
    
    if(len % 2 !== 0) {
        len -= 1;
    }    
    
    while(len >= 2) {
        let prev = list;
        const center = prev.next;
        
        if(len === 2) {
            prev.next = center.next;
            center.next = prev;
            head = center;
            break;
        }

        
        if(listCount === len - 2) {
            prev.next = center.next;
            center.next = center.next.next;
            prev = prev.next;
            prev.next = center;
            len -= 2;
            listCount = 1;
            list = head;
            
            continue;
        }
        
        list = list.next;
        listCount += 1;
    }
    
    return head;
};



// ! disscusion

const go = (head) => {
    if(!head || !head.next) {
        return head;
    }
    
    const prev = head;
    const center = head.next;
    const next = center.next;

    center.next = prev;
    prev.next = go(next);
    return center;
}