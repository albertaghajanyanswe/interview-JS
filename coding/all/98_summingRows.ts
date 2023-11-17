function generateRow(rowIndex: number) {
  if (rowIndex === 0) {
    return [1];
  }

  const prevRow = generateRow(rowIndex - 1);
  const currentRow = [1];

  for(let i = 1; i < rowIndex; ++i) {
    currentRow.push(prevRow[i - 1] + prevRow[i]);
  }

  currentRow.push(1);

  return currentRow;
}

const rowIndex = 3;

const res = generateRow(rowIndex);
console.log('Result = ', res)