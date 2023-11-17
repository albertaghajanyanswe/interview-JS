class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  if (!root) {
    return true;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node) {
  if (!node) {
    return 0;
  }

  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}


// Example usage:
const balancedRoot = new TreeNode(1);
balancedRoot.left = new TreeNode(2);
balancedRoot.right = new TreeNode(3);
balancedRoot.left.left = new TreeNode(4);
balancedRoot.left.right = new TreeNode(5);
balancedRoot.right.left = new TreeNode(6);
balancedRoot.right.right = new TreeNode(7);

console.log(isBalanced(balancedRoot)); // Returns true for a balanced tree

const unbalancedRoot = new TreeNode(1);
unbalancedRoot.left = new TreeNode(2);
unbalancedRoot.right = new TreeNode(3);
unbalancedRoot.left.left = new TreeNode(4);
unbalancedRoot.left.right = new TreeNode(5);
unbalancedRoot.right.right = new TreeNode(6);
unbalancedRoot.left.left.left = new TreeNode(7);

console.log(isBalanced(unbalancedRoot));


/*

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middleIndex]);

  // Рекурсивно строим сбалансированные поддеревья
  root.left = sortedArrayToBST(nums.slice(0, middleIndex));
  root.right = sortedArrayToBST(nums.slice(middleIndex + 1));

  return root;
}

// Пример использования:
const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const balancedTree = sortedArrayToBST(sortedArray);
*/