function isValidParentheses(str: string) {

  const openedParentheses = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = [];

  for(let i = 0; i < str.length; ++i) {
    const curr = str[i];
    if (openedParentheses[curr]) {
      stack.push(curr);
    } else {
      const lastOpened = stack.pop();
      const firstClosed = openedParentheses[lastOpened];
      if(curr !== firstClosed) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const res = isValidParentheses("(())((([])())())");
console.log('res = ', res)
