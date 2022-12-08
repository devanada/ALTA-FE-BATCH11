let count: number = 0;
let mem: number[] = [];

const fibBottomUp = (n: number): number => {
  console.time("DP Bottom Up");
  for (let i = 0; i <= n; i++) {
    count++;
    if (i <= 1) {
      mem[i] = i;
    } else {
      mem[i] = mem[i - 1] + mem[i - 2];
    }
  }
  console.timeEnd("DP Bottom Up");
  return mem[n];
};

console.log("Result:", fibBottomUp(50)); // 12586269025
console.log("Count:", count); // 51
// DP Bottom Up: 0.077ms

/*
Top Down vs Bottom Up
- Tidak bisa ditentukan mending mana, karena ada kelebih dan juga kekurangan di kedua pendekatan tersebut
- Bottom Up = Punya kecenderungan menyelesaikan lebih dari seharusnya, misal fibonacci, maka punya kecenderungan kita telah menghitung nilai-nilai sebelumnya yang lebih kecil, namun di beberapa kasus, ada kondisi dimana sebenarnya kita tidak perlu menghitung seluruh data jika memang tidak dibutuhkan
- Top Down = Lebih rekursif, jadi ada tendensi untuk melakukan perhitungan yang lebih berat
*/
