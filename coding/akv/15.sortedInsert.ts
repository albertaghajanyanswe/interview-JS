class MyNode {
  data: number = null;
  next: MyNode = null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}


function sortedInsert(head: MyNode, data: number) {
  const newNode = new MyNode(data);

  if (head === null || data <= head.data) {
    newNode.next = head;
    return newNode;
  }

  let prev: MyNode | null = null;
  let current: MyNode = head;

  while (current && data > current.data) {
    prev = current;
    current = current.next;
  }

  prev.next = newNode;
  newNode.next = current;

  return head;
}

function printList(head: MyNode) {
  let temp = head;
  while(temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}


let head = new MyNode(1);
head = sortedInsert(head, 2);
head = sortedInsert(head, 5);
head = sortedInsert(head, 3);
printList(head);