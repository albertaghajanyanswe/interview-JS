const example1 = 'Parap';

const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

const isPalindrome = (str) => {
  if (str.length === 1) return true;


  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    let first = str[i];
    let last = str[j];

    if (!isLetter(first)) {
      i++;
      continue;
    }
    if (!isLetter(last)) {
      j--;
      continue;
    }
    if (first.toLowerCase() !== last.toLowerCase()) {
      return false;
    }
    ++i;
    --j;
  }
  return true;
}

console.log(isPalindrome(example1));