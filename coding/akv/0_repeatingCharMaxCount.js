function maxRepeatingChars(str) {
  let maxCount = 0;
  let maxChar = "";

  const charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }

  return { maxChar, maxCount };
}

// Example usage
const str = "aabbbcccddeee";
const { maxChar, maxCount } = maxRepeatingChars(str);
console.log(`Maximum repeating character: ${maxChar}, Count: ${maxCount}`);
