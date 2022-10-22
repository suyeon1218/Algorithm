// * https://leetcode.com/problems/reverse-linked-list/?envType=study-plan&id=level-1

// * next와 prev로 node를 만들어 놓고 이동
// * discuss: https://leetcode.com/problems/reverse-linked-list/discuss/869957/Javascript-Iterative-and-Recursive-solution
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  let next = null;
  
  while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
}