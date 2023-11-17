const duplicateEncoder = (str: string) => {
  let result = '';

  const strCopy = str.toLowerCase();

  for(let i = 0; i < strCopy.length; ++i) {
    if (strCopy.lastIndexOf(strCopy[i]) === strCopy.indexOf(strCopy[i])) {
      result += '(';
    } else {
      result += ')';
    }
  }
  return result;
}

console.log(duplicateEncoder('Hello'))