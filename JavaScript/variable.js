// DECLARATION VAR, LET, & CONST
var variable1 = "Hello";
let variable2 = "World";
const variable3 = "Good Morning";

// ---===REDECLARE===---
/*
var foo = "foo";
var foo = "bar";
console.log(foo);

output -> bar
*/

/*
let bar = "bar";
let bar = "foo";
console.log(bar);

SyntaxError: Identifier 'bar' has already been declared
*/

/*
const baz = "baz";
const baz = "foo";
console.log(baz);

SyntaxError: Identifier 'baz' has already been declared
*/

// ---===HOISTING===---
/*
foo = "foo";
var foo;
console.log(foo);

output -> foo
*/

/*
bar = "bar";
let bar;
console.log(bar);

ReferenceError: Cannot access 'bar' before initialization
*/

/*
baz = "baz";
const baz // 'const' declarations must be initialized
console.log(baz)

SyntaxError: Missing initializer in const declaration
*/

// ---===BLOCK SCOPE & GLOBAL PROPS===---
/*
var a = 2;
if (true) {
  var a = 3;
}
console.log(a); // 3
*/

/*
let b = 2;
if (true) {
  let b = 3;
  console.log(b); // 3
}
console.log(b); // 2
*/

/*
const c = 2;
if (true) {
  const c = 3;
  console.log(c); // 3
}
console.log(c); // 3
*/

// ---===LET VS CONST===---
/*
Let dan const punya karakteristik yang sama satu sama lain, akan tetapi yang membedakan kedua bentuk variabel ini kalau let nilainya bisa dirubah, tapi kalo const nilainya tidak bisa berubah.

Kalau misalkan temen-temen membutuhkan sebuah variabel yang bisa dirubah nilainya, pakai let. Kalau temen-temen membutuhkan sebuah variabel yang tidak dirubah nilainya, bisa pakai const.
*/
/*
let x = 3;
x = 4;
console.log(x); // 4
*/

/*
const y = 3;
y = 4;
console.log(y); // TypeError: Assignment to constant variable.
*/
