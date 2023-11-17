const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3
        }
      ]
    },
    {
      value: 4,
      children: [
        {
          value: 5
        },
        {
          value: 6
        }
      ]
    }
  ]
}

const getTreeValue = (tree) => {
  const stack = [tree];
  const result = [];
  while(stack.length > 0) {
    const node = stack.pop();
    if (node.value !== undefined) {
      result.push(node.value);
    }
    if (node.children?.length) {
      stack.push(...node.children);
    }
  }

  return result;
}

const result = getTreeValue(tree);

console.log('Result: ', result)