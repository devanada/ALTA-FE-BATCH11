function sumTwoNumberA() {
  const a = 5;
  const b = 6;
  const sum = a + b;
  console.log(sum);
}

/*
Penulisan parameter didalam sebuah function itu harus berurutan,
misalnya function namaFunction(a, b, c) {}, maka dari itu pemanggilannya harus menyertakan parameter dengan urutan yang sesuai.
brarti pemanggilannya harus namaFunction(1, 2, 3) {}, tidak boleh namaFunction(1, 2) {}
*/

function sumTwoNumberB(a, b) {
  const sum = a + b;
  console.log(sum);
}

// Bentuk penulisan 1
function sumTwoNumberC(a, b) {
  const sum = a + b;
  return sum;
}

// Bentuk penulisan 2 -> arrow/lambda function
const sumTwoNumberD = (a, b) => {
  const sum = a + b;
  return sum;
};

// sumTwoNumberA();
sumTwoNumberB(5, 4);
// console.log(sumTwoNumberC(5, 4));

// console.log(sumTwoNumberB(5, 4));
// sumTwoNumberC(5, 4);

console.log(sumTwoNumberD(4, 5));
