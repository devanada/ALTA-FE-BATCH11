// -----===== PRIMITIVE =====-----
let strVar = "Hello World"; // String
let intVar = 12345678; // Number / Int
// BigInt -> untuk jumlah number yang lebih besar daripada tipe data Number
let undefinedVar; // Undefined
let boolVar = false; // Boolean
// Symbol - > untuk pengenal yang unik
let nullVar = null; // Null

// 128111300000001 -> 128111300000000
// 128111300000002 -> 128111300000000
// 128111300000003 -> 128111300000000
// 128111300000004 -> 128111300000000

// -----===== COLLECTIONS =====-----
let objVar = {
  id: 1,
  name: "John Wick",
  isMarried: false,
  address: {
    city: "NYC",
    country: "USA",
    postal_code: "14045",
  },
  hobby: ["hobby1", "hobby2", "hobby3"],
}; // Object

let arrVar = []; // Array

const strArr = ["apel", "jeruk", "mangga"]; // Array of string
const intArr = [1, 2, 3, 4, 5]; // Array of integer
const objArr = [objVar, objVar, objVar]; // Array of object

const nama = "Adelaine";

console.log("Hallo " + nama + "! Aku seorang programmer");
console.log(`Hallo ${nama}! Aku seorang programmer`);
console.log(nama.length);
