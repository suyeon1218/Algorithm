//  * Easy
//  https://leetcode.com/problems/middle-of-the-linked-list/
// linked list의 절반만을 return 하는 문제 

// * my solution
 var middleNode = function(head) {
  const nodeMap = new Map();
  let count = 0;
  let currNode = head;
  
  while (currNode) {
      nodeMap.set(count, currNode);
      count++; // currNode가 null 이 되는 경우에도 +1이 추가로 더해짐 
      currNode = currNode.next;
  }
  
  return nodeMap.get(Math.floor((0 + count) / 2));
};

// * discuss
// https://leetcode.com/problems/middle-of-the-linked-list/discuss/426521/Javascript-two-pointers-(fast-and-slow)
// linked List를 two point로도 풀 수 있구나...
var middleNode = function(head) {
  let fast = slow = head;
  while (fast && fast.next) {
      fast = fast.next.next; //  fast는 slow의 두배만큼 이동
      slow = slow.next; //  fast가 끝에 와 있다면 slow는 해당 리스트의 중간에 와 있을 것임
  }
  return slow;
};
// reply 참고 수정
var middleNode = function(head) {
  let fast = head.next;
  while (fast) {
      head = head.next;
      fast = fast.next?.next; // ! 이런 표기법도 있음...
  }
  return head;
};
