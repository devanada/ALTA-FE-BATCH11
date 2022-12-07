function coinChange(amount: number) {
  const coins = [25, 10, 5, 1];
  let result: number[] = [];
  let moneyLeftover = amount;

  for (const coin of coins) {
    while (moneyLeftover >= coin) {
      result.push(coin);
      moneyLeftover = moneyLeftover - coin;
      //   moneyLeftover -= coin
    }
  }

  return result;
}

// console.log(coinChange(42)); // [25, 10, 5, 1, 1]

let test = 6.65 - 5;
// console.log(test); // 1.6500000000000004
// console.log(Math.round(test)); // 2
// console.log(Math.floor(test)); // 1
// console.log(+test.toFixed(2)); // 1.65
// console.log(+test.toPrecision(3)); // 1.65
// console.log(parseFloat(test.toFixed(2))); // 1.65
// console.log(parseFloat(test.toPrecision(3))); // 1.65

const test2 = ["10", "8", "6", "4", "2"];

const test3 = test2.map((item) => +item);

console.log(test2);
console.log(test3);
