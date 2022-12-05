// * Medium
// https://leetcode.com/problems/copy-list-with-random-pointer/
// 랜덤포인터라는 요소까지 완벽하게 복제한 linked list를 만드는 문제 


// * Discuss : O(N) - Map 의 key와 value로 original과 clone을 넣어줌 
// https://leetcode.com/problems/copy-list-with-random-pointer/discuss/341495/Javascript-O(n)-Space-solution
// ? Question
//  왜 || null 로 null 검사를 해줘야 하나?
// ! Answer
// node = node.next 로 객체 값이 넘어갈 때 null 값을 지정해주지 않으면 undefined가 되게 됨 => error 
var copyRandomList = function(head) {
    if(!head) {
      return null;
    }

    const clones = new Map();
    let n = head;

    while(n) {
      clones.set(n, new Node(n.val));
      // key: original Node
      // value: copy Node
      n = n.next;
    }

    n = head;
    
    while(n) {
      clones.get(n).next = clones.get(n.next) || null;
      //  key값을 통해 copy 노드의 next 를 지정
      //  n.next라는 key값을 가진 node를 가져옴 (copy Node)
      clones.get(n).random = clones.get(n.random) || null;
      // 마찬가지로 original key값으로 copy노드를 불러와서 저장
      n = n.next;
    }
    return clones.get(head);
};