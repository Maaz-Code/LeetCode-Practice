/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;      // Will point to the previous node (initially null)
    let curr = head;      // Start with the head of the original list
    let next;             // Temporary variable to store the next node

    while(curr != null){
        next = curr.next; // Save next node before breaking the link
        curr.next = prev; // Reverse the link: point current node to previous
        prev = curr;      // Move prev to current node (progress the "reversed" pointer)
        curr = next;      // Move curr to next node (continue traversal)
    }

    return prev;          // // prev will be the new head of the reversed list
};