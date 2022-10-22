// * 2022.09.30
// leetcode 75 study plan - Day 4
// https://leetcode.com/problems/linked-list-cycle-ii/?envType=study-plan&id=level-1
// 서클이 시작되는 첫 노드를 return 하는 문제 
// * my solution
var detectCycle = function(head) {
  if (!head) return null;
  
  const nodeMap = new Map();
  // object 의 key는 string, symbol, interget 만 허용
  // ! new Map()을 사용해서 저장해주는 게 맞음 
  let currNode = head;
  
  while(currNode.next) {
      nodeMap.set(currNode, true);
      if (nodeMap.has(currNode.next)) break;
      currNode = currNode.next;
  }
  
  return currNode.next; // ? break 에다 return 쓰면 왜 안 먹지??
};

// * O(1) Space 
// https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes
var detectCycle = function(head){
  let slow = head;
  let fast = head;
  while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
          slow = head;
          while(slow !== fast){
              slow = slow.next;
              fast = fast.next;
          }
          return slow;
      }
  }
  return null;
}