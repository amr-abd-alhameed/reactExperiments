// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// const mergeTwoLinkedList =(listOne,listTwo) => {
//   const dummy = {next:null};
//   let tail = dummy;
//   while(listOne && listTwo) {
//     if (listOne.val <= listTwo.val){
//       tail.next = listOne;
//       listOne = listOne.next;
//     }else {
//       tail.next = listTwo;
//       listTwo= listTwo.next;
//     }
//     tail = tail.next;
//   }
//   tail.next = listOne | listTwo;
//   return dummy.next; 
// }


const mergeTowLinkedList = (list1, list2) => {
  let dummyHead = { next: null };
  let tail = dummyHead;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;

      list1 = list1.next;
  
    } else {
      tail.next = list2;
      list2 = list2.next;
     
    }
    tail = tail.next;
  }
  tail.next = list1 || list2;
  return dummyHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const result = mergeTowLinkedList(list1, list2);
let current = result;
while (current != null) {
  console.log(current.val);
  current = current.next;
}

// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(list1, list2) {
//     // Create a dummy node: dummyHead = { next: null }
//     let dummyHead = { next: null };
//     // tail points to the dummy node: tail = { next: null }
//     let tail = dummyHead;

//     // Loop while both lists have nodes
//     while (list1 && list2) {
//         // Compare the values of the current nodes in list1 and list2
//         if (list1.val <= list2.val) {  //  1 <= 1  (TRUE)
//             // Append list1's node to the tail: tail.next = list1  (tail.next = 1)
//             tail.next = list1;
//             // Move list1 to the next node: list1 = list1.next  (list1 = 2)
//             list1 = list1.next;
//         } else {
//             // (This block is skipped in the first iteration)
//             tail.next = list2;
//             list2 = list2.next;
//         }
//         // Move tail to the newly appended node: tail = tail.next (tail = 1)
//         tail = tail.next;
//     }

//     // Append any remaining nodes from list1 or list2
//     tail.next = list1 || list2;

//     // Return the merged list (excluding the dummy node)
//     return dummyHead.next;
// };

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// // Example lists: 1->2->4, 1->3->4
// let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// let mergedList = mergeTwoLists(list1, list2);

// // Print the merged list (for demonstration)
// let current = mergedList;
// while (current) {
//   console.log(current.val);
//   current = current.next;
// }
