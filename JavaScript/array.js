/*
- Array adalah sebuah tipe data yang mana dia digunakan untuk menyimpan kumpulan informasi/data yang disimpan secara berurutan didalam satu variabel.
- Setiap item/element yang ada didalam array memiliki index (zero-based) yang dimulai dari index 0 untuk element pertama, index 1 untuk element kedua, dan seterusnya.
*/

// ---------- DEKLARASI ----------
let arrLiteral = [];
let arrConstructor = new Array();

let fruits = ["Apple", "Orange", "Plum"];
let scores = [98, 85, 91, 78, 82];
let temp = ["Apple", 1, null, true, {}, []];

// ---------- MENGAKSES ELEMENT DI ARRAY ----------
// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Orange
// console.log(fruits[2]); // Plum

// ---------- MENGGANTI NILAI DARI SEBUAH ELEMENT ----------
fruits[2] = "Pear";
// console.log(fruits);

// ---------- MENAMBAHKAN ELEMENT DI SEBUAH ARRAY ----------
// fruits[3] = "Lemon";
// fruits[fruits.length] = "Lemon";
fruits.push("Lemon"); // Menambahkan element di akhir array
fruits.unshift("Melon"); // Menambahkan element di awal array

// ---------- MENGHAPUS ELEMENT DI SEBUAH ARRAY ----------
fruits.pop(); // Menghapus element terakhir dari sebuah array
fruits.shift(); // Menghapus element pertama dari sebuah array

let fruits2 = ["Apple", "Pear", "Lemon", "Banana", "Avocado"];
// fruits2.splice(2, 2); // Menghapus element dimulai dari index 2 dengan delete count sebanyak 2
fruits2.splice(2, 2, "SOLD OUT", "SOLD OUT"); // Menghapus element dimulai dari index 2 dengan delete count sebanyak 2, setelah itu menambahkan element baru

// ---------- MENDUPLIKASI SEBUAH ARRAY ----------
let sample = ["A", "B", "C", "D"];
let dupeSample = sample.slice(); // Menduplikasi keseluruhan element di sebuah array
let halfDupe = sample.slice(0, sample.length / 2);
let endDupe = sample.slice(sample.length / 2, sample.length);
// let spreadDupe = [sample, "E"]; // [ [ 'A', 'B', 'C', 'D' ], 'E' ]
let spreadDupe = [...sample, "E"]; // [ 'A', 'B', 'C', 'D', 'E' ]

spreadDupe.push("F");
// console.log(sample); // [ 'A', 'B', 'C', 'D' ]
// console.log(dupeSample); // [ 'A', 'B', 'C', 'D' ]
// console.log(halfDupe); // [ 'A', 'B' ]
// console.log(endDupe); // [ 'C', 'D' ]
// console.log(spreadDupe); // [ 'A', 'B', 'C', 'D', 'E' ]

// ---------- MENGGABUNGKAN ARRAY DENGAN ARRAY ----------
let mergeDupe = [...sample, ...fruits2];
let concatDupe = sample.concat(fruits2);
// console.log(mergeDupe);
// console.log(concatDupe);

// ---------- MELAKUKAN PERULANGAN ARRAY ----------
for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
}

for (const fruit of fruits) {
  //   console.log(fruit);
}

for (const key in fruits) {
  //   console.log(fruits[key]);
}

// ---------- REAL SCENARIO ----------
let peoples = [
  {
    nama: "Tzuyu",
    country: "South Korea",
  },
  {
    nama: "Jihyo",
    country: "South Korea",
  },
  {
    nama: "Jeongyeon",
    country: "South Korea",
  },
  {
    nama: "Nayeon",
    country: "South Korea",
  },
];

// peoples.forEach((people, index) => {
//   people.id = index + 1;
// });

peoples.map((people, index) => {
  people.id = index + 1;
  people.country = `${people.country} - ${index + 1}`;
});

// console.log(peoples[0].nama);
