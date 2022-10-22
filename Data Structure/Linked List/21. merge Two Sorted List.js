// * https://leetcode.com/problems/merge-two-sorted-lists/submissions/

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