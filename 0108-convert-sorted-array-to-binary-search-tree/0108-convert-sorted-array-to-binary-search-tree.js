/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    function helper(left, right){
        // Base case: no elements to process
        if(left > right){
            return null;
        }
        
        // Find the middle element to use as root and create the root node
        let mid = Math.floor((left + right)/2);
        let root = new TreeNode(nums[mid]);
        
        // Recursively construct left and right subtrees
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);
        return root;
    }

    return helper(0, nums.length - 1);
};