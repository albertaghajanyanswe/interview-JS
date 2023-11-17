function permutations(input: string): string[] {
  // Base case: If the input string has only one character, return it as an array
  if (input.length === 1) {
      return [input];
  }

  const result: string[] = [];

  // Iterate through each character of the input string
  for (let i = 0; i < input.length; i++) {
      // Extract the current character
      const char = input[i];

      // Generate the remaining string by excluding the current character
      const remaining = input.slice(0, i) + input.slice(i + 1);

      // Recursively generate permutations of the remaining string
      const perms = permutations(remaining);
      // Concatenate the current character with each permutation
      for (const perm of perms) {
          result.push(char + perm);
      }
  }

  // Remove duplicates by converting the result array to a Set and back to an array
  return Array.from(new Set(result));
}

const input = "abc";
const result = permutations(input);
console.log(result);