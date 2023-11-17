/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let r1 = [] ;
  let r2 = [] ;
  let tmp = l1;
  while(tmp.next !== null) {
      r1.unshift(tmp.val);
      tmp = tmp.next;
  };
  r1.unshift(tmp.val);

  tmp = l2;
  while(tmp.next !== null) {
      r2.unshift(tmp.val)
      tmp = tmp.next;
  }
  r2.unshift(tmp.val);
  // console.log(r1)
  // console.log(r2)
  const rStr = BigInt(r1.join('')) + BigInt(r2.join(''));
  const res = rStr.toString().split('');

  let returnedListNode = null;

  for (let i = 0; i < res.length; i++) {
      console.log('\nreturnedListNode = ', returnedListNode)
      returnedListNode = {
          val: res[i],
          next: returnedListNode,
      };
      console.log('returnedListNode = ', returnedListNode)
  }
  console.log('returnedListNode = ', returnedListNode)

  return returnedListNode;
};

const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

const result = addTwoNumbers(l1, l2);

console.log(result);