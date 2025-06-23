/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null) return null;

    let dummy1 = new ListNode(0);
    let dummy2 = new ListNode(0);
    let n1 = dummy1;
    let n2 = dummy2;
    let curr = head;

    while(curr){
        if(curr.val < x){
            n1.next = curr;
            n1 = curr;
        } else {
            n2.next = curr;
            n2 = curr;
        }
        curr = curr.next;
    }

    n2.next = null;
    n1.next = dummy2.next;
    this.head = dummy1.next;
    return dummy1.next;
};