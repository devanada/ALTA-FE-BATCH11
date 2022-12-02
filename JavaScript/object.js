const objVar = {
  name: "Thomas Shelby", // name is the key, Thomas Shelby is the value
  age: 36,
  job: "Businessman",
  isMarried: true,
  address: {
    city: "Birmingham",
    country: "England",
  },
  hobbies: ["Ride a horse", "Playing bowling"],
  func1: () => {
    const num = Math.random();
    return num;
  },
  func2: function () {
    const num = Math.random();
    return num;
  },
  home: null,
};

// ---------- DEKLARASI ----------
// 2 cara dalam pembuatan object
let objLiteral = {}; // literal syntax
let objConstructor = new Object(); // constructor syntax

// ---------- AKSES NILAI DARI SEBUAH PROPERTY ----------
// Mengakses nilai dari sebuah property dengan menggunakan dot notation
// console.log(objVar.name);
// Mengakses nilai dari sebuah property dengan menggunakan bracket notation
// console.log(objVar["name"]);

// ---------- MELAKUKAN PERULANGAN DI SEBUAH OBJECT ----------
// for (const key in objVar) {
//   console.log(key); // Memunculkan daftar nama key dari sebuah property
//   console.log(objVar[key]); // Memunculkan daftar value dari sebuah property
// }

// ---------- MERUBAH NILAI DARI SEBUAH PROPERTY ----------
// Merubah nilai dari sebuah property
// objVar.age = 40;
// objVar["job"] = "Politician";
// objVar.address.city = "Liverpool";

// ---------- MENGHAPUS PROPERTY DARI SEBUAH OBJECT ----------
// Menghapus sebuah property didalam object
// delete objVar.func; // dot notation
// delete objVar["func"]; // bracket notation
// delete objVar.address.country; // nested dot notation
// delete objVar["address"]["country"]; // nested bracket notation
// delete objVar.address["country"]; // nested dot bracket notation
// delete objVar["address"].country; // nested bracket dot notation

// ---------- MENGECEK TIPE DATA SEBUAH PROPERTY/VARIABEL ----------
// console.log(typeof objVar)

// ---------- MEMBUAT ARRAY OF KEYS/VALUES DARI SEBUAH OBJECT ----------
// Membuat array of keys dari sebuah object
let keysInObject = Object.keys(objVar);
// Membuat array of values dari sebuah object
let valuesInObject = Object.values(objVar);

// ---------- MENAMBAHKAN ITEM BARU DIDALM SEBUAH NESTED OBJECT ----------
// Menambahkan propert baru didalam sebuah object
// objVar.address.street = "Street Paddock"; // MENAMBAHKAN PROPERTY BARU DIDALAM OBJECT -> OBJECT
// objVar.hobbies.push("Skating"); // MENAMBAHKAN ELEMENT BARU DIDALAM OBJECT -> ARRAY

// ---------- MENDUPLIKASI SEBUAH OBJECT ----------
let dupe1 = Object.assign({}, objVar); // Menggunakan object assign
let dupe2 = { ...objVar }; // Menggunakan spread operator
let dupe3 = JSON.parse(JSON.stringify(objVar)); // Menggunakan JSON method (Efektif untuk melakukan deep copy)

// delete dupe2.address.country;
// console.log(objVar);
// console.log(dupe3);

let formInput = {
  full_name: "John McAlister",
  nick_name: "John",
  address: "Ireland",
  message: "blablabla",
};

const check = Object.values(formInput).every((value) => {
  return value !== "";
});

console.log(check);
