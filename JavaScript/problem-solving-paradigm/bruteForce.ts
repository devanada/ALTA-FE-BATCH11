function findMaxMin(array: number[]) {
  let maxValue = 0;
  let minValue = Infinity;

  for (let i = 0; i <= array.length - 1; i++) {
    if (maxValue < array[i]) maxValue = array[i];
    if (minValue > array[i]) minValue = array[i];
  }

  return `${maxValue} ${minValue}`;
}

console.log(findMaxMin([10, 7, 3, 5, 8, 2, 9]));
