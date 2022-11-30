let a, b, add, sub, mul, div, mod;

a = 10;
b = 20;

add = a + b;
// console.log("hasil penjumlahan a + b", add); // 30
sub = a - b;
// console.log("hasil pengurangan a - b", sub); // -10
mul = a * b;
// console.log("hasil perkalian a * b", mul); // 200
div = a / b;
// console.log("hasil pembagian a / b", div); // 0.5
mod = a % b;
// console.log("hasil modulo a % b", mod); // 10

let increase = 5;
let decrease = 5;

// console.log(++increase); // 6 -> increase + 1
// console.log(--decrease); // 4 -> decrease - 1

const testVar1 = 4 > 1; // true
const testVar2 = 4 < 1; // false

// console.log(testVar1);

const temp = 5;
const condition1 = temp == "5";
const condition2 = temp === "5";
const condition3 = temp != "5";
const condition4 = temp !== "5";
// console.log(condition1); // true
// console.log(condition2); // false
// console.log(condition3); // false
// console.log(condition4); // true

// = -> reassignment
// == -> yang dibandingkan yaitu value nya saja
// === -> yang dibandingkan selain value, juga tipe datanya

// console.log(condition1 && condition2); // false
// console.log(condition2 && condition3); // false
// console.log(condition1 && condition4); // true

// console.log(condition1 || condition2); // true
// console.log(condition2 || condition3); // false
// console.log(condition1 || condition4); // true
/*
&&
false + false = false
false + true = false
true + false = false
true + true = true

||
false + false = false
false + true = true
true + false = true
true + true = true
*/

let angka = 5;
// angka += 2; // angka = angka + 2 ~~~> 7
// angka -= 2; // angka = angka - 2 ~~~> 3
// angka *= 2; // angka = angka * 2 ~~~> 10
// angka /= 2; // angka = angka / 2 ~~~> 2.5
// angka %= 2; // angka = angka % 2 ~~~> 1
console.log(angka);
