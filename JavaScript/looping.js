/*
Jenis looping di JavaScript
1. for loop
2. while loop
3. for in
4. for of
5. forEach
6. map <= akan sering digunakan di FE
*/

function forLoop(number) {
  console.time("FOR LOOP");
  for (let i = 0; i < number; i++) {
    console.log("I", i);
    for (let j = 0; j < number; j++) {
      console.log("J", j);
    }
  }
  console.timeEnd("FOR LOOP");
}

function whileLoop(number) {
  let i = 0;
  while (i < number) {
    console.log("I", i);
    let j = 0;
    while (j < number) {
      console.log("J", j);
      j++;
    }
    i++;
  }
}

function whileLoop2(number) {
  let i = 0;
  do {
    console.log("I", i);
    let j = 0;
    do {
      console.log("J", j);
      j++;
    } while (j < number);
    i++;
  } while (i < 5);
}

whileLoop(5);

function continueBreak(number) {
  for (let i = 0; i < number; i++) {
    if (i == 1) {
      continue; // Dia bakal menginstruksikan sebuah program agar dia bisa melanjutkan iterasi berikutnya tanpa perlu memproses perintah/code selanjutnya.
    }
    if (i > 3) {
      break; // Dia bakal menginstuksikan sebuah program agar menghentikan proses perulangan, mirip seperti return.
    }
    console.log(i);
  }
  console.log("Halo");
}

const arrItem = ["apel", "jeruk", "mangga", "Belimbing", "pir"];

function forLoopArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

/*
for in digunakan untuk melakukan perulangan pada object dan juga array. For in tidak perlu menentukan kondisi dan juga post agar looping bisa berhenti, for in secara otomatis bakal berhenti ketika dia sampai di penghujung item dari sebuah object/array.
*/
function forInLoop(array) {
  for (const key in array) {
    console.log(array[key]);
  }
}

/*
for of digunakan untuk melakukan perulangan pada array. For of tidak perlu menentukan kondisi dan juga post agar looping bisa berhenti, for of secara otomatis bakal berhenti ketika dia sampai di penghujung item dari sebuah array.
*/
function forOfLoop(array) {
  for (const item of array) {
    console.log(item);
  }
}

/*
forEach adalah sebuah method yang bisa dipakai untuk tipe data array. forEach loop hampir sama seperti for in dan for of, hanya saja forEach biasa digunakan untuk memanipulasi sebuah item dari sebuah array.
*/
function forEachLoop(array) {
  array.forEach((item, index) => {
    console.log(index, item);
  });
}

/*
map adalah sebuah method yang bisa dipakai untuk tipe data array. map loop basically sama seperti forEach, hanya saja map biasa digunakan untuk render suatu item didalam array tanpa perlu menuliskan satu persatu item tersebut.
*/
function mapLoop(array) {
  array.map((item, index) => {
    console.log(index, item);
  });
}
