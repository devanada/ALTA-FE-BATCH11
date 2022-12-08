/*
Pemanfaatan DP dengan lebih optimal jika dibanding dengan pendekatan Top Down ataupun Bottom Up, karena kita tidak perlu membuat sebuah variabel map untuk menampung data/hasil yang telah kita hitung. Kita hanya memanfaatkan variabel biasa untuk menyimpan data/hasil perhitungan dua angka sebelumnya.
*/

let count: number = 0;

const fiboDPCooler = (n: number): number => {
  console.time("DP Cooler");
  if (n <= 1) {
    console.timeEnd("DP Cooler");
    return n;
  }

  let fiboIMinSatu: number = 1;
  let fiboIMinDua: number = 0;
  let fiboI: number = -1;

  for (let i = 2; i <= n; i++) {
    count++;
    fiboI = fiboIMinSatu + fiboIMinDua;
    fiboIMinDua = fiboIMinSatu;
    fiboIMinSatu = fiboI;
  }

  console.timeEnd("DP Cooler");
  return fiboI;
};

console.log("Result:", fiboDPCooler(50)); // 12586269025
console.log("Count:", count); // 49
// DP Cooler: 0.059ms
