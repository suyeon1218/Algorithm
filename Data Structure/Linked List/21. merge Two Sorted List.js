// * Easy
// https://leetcode.com/problems/merge-two-sorted-lists/
// 서로 다른 두 리스트를 오름차순으로 sort & merge 하는 문제 

 var mergeTwoLists = function(list1, list2) {
  let list3 = head = new ListNode();
  
  while(list1 && list2) {
      if (list1.val <= list2.val) {
          head.next = list1;
          list1 = list1.next;
      } else {
          head.next = list2;
          list2 = list2.next;
      }
      head = head.next;
  }
  
  while(list1) {
      head.next = list1;
      head = head.next;
      list1 = list1.next;
  }
  
  while(list2) {
      head.next = list2;
      head = head.next;
      list2 = list2.next;
  }
  
  return list3.next;
};