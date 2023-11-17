const buildTower = (floor: number) => {
  const result = [];

  for (let i = floor - 1; i > 0; --i) {
    const spaces = floor - i;
    const stars = i;
    result.push(`${" ".repeat(spaces) + '*'.repeat(stars) + " ".repeat(spaces)}`)
  }
  return result.reverse();
}

const res = buildTower(3);
console.log('res = ', res);