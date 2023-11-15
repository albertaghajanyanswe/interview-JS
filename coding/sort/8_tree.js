function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function insert(root, value) {
  if (root === null) {
    return new Node(value);
  }

  if (value < root.value) {
    root.left = insert(root.left, value);
  } else if (value > root.value) {
    root.right = insert(root.right, value);
  }

  return root;
}

function preOrderTraversal(node, resultArray) {
  if (node !== null) {
    resultArray.push(node.value);
    preOrderTraversal(node.left, resultArray);
    preOrderTraversal(node.right, resultArray);
  }
}

function postOrderTraversal(node, resultArray) {
  if (node !== null) {
    postOrderTraversal(node.left, resultArray);
    postOrderTraversal(node.right, resultArray);
    resultArray.push(node.value);
  }
}

// binary tree find by sorting
function inOrderTraversal(node, resultArray) {
  if (node !== null) {
    inOrderTraversal(node.left, resultArray);
    resultArray.push(node.value);
    inOrderTraversal(node.right, resultArray);
  }
}

// Pre-order (clone tree)
function cloneTree(node) {
  if (node === null) {
    return null;
  }

  let newNode = new Node(node.value);
  newNode.left = cloneTree(node.left);
  newNode.right = cloneTree(node.right);

  return newNode;
}

// Post-Order (delete tree)
function deleteTree(node) {
  if (node !== null) {
    deleteTree(node.left);
    deleteTree(node.right);
    node.left = null;
    node.right = null;
    node = null;
  }
}

function findTreeHeight(node) {
  if (node === null) {
    return 0;
  }
  let leftHeight = findTreeHeight(node.left);
  let rightHeight = findTreeHeight(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

let root = null;
root = insert(root, 5);
root = insert(root, 3);
root = insert(root, 7);
root = insert(root, 1);
root = insert(root, 4);

let sortedArray = [];
inOrderTraversal(root, sortedArray);
console.log("Sorted array:", sortedArray);

let height = findTreeHeight(root);
console.log("Tree height:", height);

let copy = cloneTree(root);
console.log("copy:", copy);
deleteTree(copy);
console.log("copy:", copy);


/*

1
/ \
2   3
/ \
4   5

preOrderTraversal // Вывод: 1, 2, 4, 5, 3

inOrderTraversal; // Вывод: 4, 2, 5, 1, 3

postOrderTraversal // Вывод: 4, 5, 2, 3, 1

*/