const findMissingLetter = (array: string[]) => {
  if (array.length <= 1) {
    return null;
  }
  for (let i = 1; i < array.length; ++i) {
    const prev = array.join('').charCodeAt(i - 1);
    const curr = array.join('').charCodeAt(i);

    if (curr - prev !== 1) {
      return String.fromCharCode(prev+1);
    }
  }
  return null;
}

console.log(findMissingLetter(['a', 'b', 'c', 'e'])); // d
console.log(findMissingLetter(['l', 'n', 'o', 'p'])); // m
console.log(findMissingLetter(['s', 't', 'u', 'w', 'x'])); // v
console.log(findMissingLetter(['a', 'b', 'c'])); // null