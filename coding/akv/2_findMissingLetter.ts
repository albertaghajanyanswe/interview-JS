const findMissingLetter = (array: string[]) => {
  if (arr.length <= 1) {
    return null;
  }
  for (let i = 1; i < array.length; ++i) {
    const curr = array.join('').charCodeAt(i);
    const prev = array.join('').charCodeAt(i - 1);

    if (curr - prev !== 1) {
      return String.fromCharCode(curr);
    }
  }
  return null;
}

console.log(findMissingLetter(['a', 'b', 'c', 'e'])); // d
console.log(findMissingLetter(['l', 'n', 'o', 'p'])); // m
console.log(findMissingLetter(['s', 't', 'u', 'w', 'x'])); // v
console.log(findMissingLetter(['a', 'b', 'c'])); // null