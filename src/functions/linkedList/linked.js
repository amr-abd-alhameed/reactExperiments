/* eslint-disable no-unused-vars */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(100);
let second = new Node(200);
let third = new Node(300);
let fourth = new Node(400);
let fifth = new Node(500);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

console.log(head.next);
 
// trying to traverse linked list 
let current = head;
while( current != null) {
  console.log(current.data);
  current = current.next;
}