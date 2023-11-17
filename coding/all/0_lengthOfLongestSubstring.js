let lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    console.log('\n\ncharIndexMap = ', charIndexMap)
    if (charIndexMap[s[end]] !== undefined) {
      start = Math.max(charIndexMap[s[end]] + 1, start);
    }
    charIndexMap[s[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
    console.log('end = ', end)
    console.log('start = ', start)
    console.log('maxLength = ', maxLength)

  }
  return maxLength;
};

const inputString = "abccxqwe";
const result = lengthOfLongestSubstring(inputString);
console.log(result);