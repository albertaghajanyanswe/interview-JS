function minRemovalsToMakeAnagram(word1: string, word2: string): number {
  let count = 0;
  let deletedWords = '';

  const charCount1 = {};
  const charCount2 = {};

  for (let i of word1) {
    charCount1[i] = (charCount1[i] || 0) + 1;
  }
  for (let i of word2) {
    charCount2[i] = (charCount2[i] || 0) + 1;
  }

  for(let i in charCount1) {
    if(!charCount2[i]) {
      count += charCount1[i];
      deletedWords += i;
    } else {
      if (charCount1[i] > charCount2[i]) {
        count += Math.abs(charCount1[i] - charCount2[i]);
        deletedWords += `${i}`.repeat(Math.abs(charCount1[i] - charCount2[i]));
      }
    }
  }

  for(let i in charCount2) {
    if(!charCount1[i]) {
      count += charCount2[i];
      deletedWords += i;
    } else {
      if (charCount2[i] > charCount1[i]) {
        count += Math.abs(charCount2[i] - charCount1[i]);
        deletedWords += `${i}`.repeat(Math.abs(charCount1[i] - charCount2[i]));
      }
    }
  }
  console.log('del = ', deletedWords)
  return count;
}


const res = minRemovalsToMakeAnagram('codewars', 'hackerrank');

console.log('res = ', res)