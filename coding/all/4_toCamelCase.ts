const toCamelCase = (str: string) => {
  let result = '';

  for(let i = 0; i < str.length; ++i) {
    if (str[i] !== '-' && str[i] !== '_') {
      result += str[i];
    } else {
      if (i < str.length-1) {
        result += str[++i].toUpperCase();
      }
    }
  }

  return result;
}

const res = toCamelCase("the-stealth-warrior-");
console.log(res)