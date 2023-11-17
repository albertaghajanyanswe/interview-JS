const sumOfDigits = (number: number): number | null => {
  let result: number = 0;

  if (typeof number !== 'number' || number < 0) {
    return null;
  }

  const arr = number.toString().split("");

  arr.forEach((digit, index) => {
    result += +digit;
  })

  if (result >= 10) {
    return sumOfDigits(result);
  }

  return result;
}

const res5 = sumOfDigits(132189);
const res55 = sumOfDigits(493193);


console.log('132189 = ', res5, '\n493193 = ', res55)