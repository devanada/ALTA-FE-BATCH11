/*
Callback -> sebuah function yang dipanggil "setelah" melakukan sebuah proses, dalam kata lain dipanggil setelah sebuah proses sudah berjalan.
*/

const buyer = (message: string, harga: number) => {
  console.log("Pesan martabak dong? " + message + ": " + harga);
};

const buyer2 = (message: string, harga: number) => {
  console.log("Pesan martabak dong!!!! " + message + ": " + harga);
};

const seller = (callback: (message: string, harga: number) => void) => {
  console.log("Pesan martabak dong? ... (wait sedang di masak)");
  console.log(callback);
  setTimeout(() => {
    callback("Ok, martabak sudah selesai kakak", 10000);
  }, 5000);
};

seller(buyer);
seller(buyer2);
