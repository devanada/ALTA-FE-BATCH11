/*
Teknis Merge Sort adalah dimulai ddengan membagi array menjadi dua bagian (kiri dan kanan), lalu membandingkan nilai tiap index pada pecahan array, manakah yang lebih kecil sehingga terjadilah perpindahan nilai diantara kedua bagian tersebut. Setelah dibandingkan, pecahan array ini akan digabung kembali menjadi sebuah array yang utuh.
*/

function sortMerge(array) {
  console.time("sortMerge");
  const result = divide(array);
  console.timeEnd("sortMerge");
  return result;
}

function divide(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2); // mencari nilai tengah
  let one = array.slice(0, mid); // menduplikasi array dari index 0 sampai tengah
  let two = array.slice(mid); // menduplikasi array dari tengah ke akhir
  return sort(divide(one), divide(two));
}

function sort(one, two) {
  const sorted = []; // deklarasi variabel penampung
  // lakukan perulangan ketika panjang variabel one dan two sama
  while (one.length && two.length) {
    // jika nilai one[0] lebih rendah sama dengan nilai two[0]
    if (one[0] <= two[0]) {
      // maka push variabel one yang sudah dihapus elemen pertamanya ke sorted
      sorted.push(one.shift());
    } else {
      // maka push variabel two yang sudah dihapus elemen pertamanya ke sorted
      sorted.push(two.shift());
    }
  }
  // merge atau gabung seluruh array dari sorted, one, dan two dengan menggunakan spread operator
  const output = [...sorted, ...one, ...two];
  return output;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];

console.log(sortMerge(array));
// 0.229ms
