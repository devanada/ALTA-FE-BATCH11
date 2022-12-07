/*
Promise - sebuah object yang merepresentasikan sebuah kejadian/event yang bisa terpenuhi (fulfill) atau gagal (reject) yang berdasarkan pada operasi asynchronous dan bisa menghasilkan sebuah output.
*/

interface promiseType {
  data: string | null;
  message: string;
}

let bentengTakeshi = new Promise<promiseType>((resolve, reject) => {
  console.log("--- BENTENG TAKESHI MULAI ---");
  console.log("Doakan aku ya!!");
  let rate = Math.random() * 100;
  console.log("Ayo manis");
  setTimeout(() => {
    console.log(rate);
    if (rate > 70) {
      if (rate > 80) {
        resolve({ data: "UR", message: "HOKI DEWA ENTE" });
      } else {
        resolve({
          data: "SSR",
          message: "Selamat anda berhasil menakhlukan benteng takeshi!",
        });
      }
    } else {
      reject({
        data: null,
        message: "Sayang sekali, anda gagal menakhlukan benteng takeshi",
      });
    }
  }, 3000);
});

const playFunctionAsync = async () => {
  let strVariable = "";
  await bentengTakeshi
    .then((result) => {
      strVariable = result.message;
      console.log(result.data);
    })
    .catch((error) => {
      strVariable = error.message;
      console.log(error.data);
    });
  console.log(strVariable);
};

const playFunction = () => {
  let strVariable = "";
  bentengTakeshi
    .then((result) => {
      strVariable = result.message;
      console.log(result.data);
    })
    .catch((error) => {
      strVariable = error.message;
      console.log(error.data);
    });
  console.log(strVariable);
};

const playFunction2 = async () => {
  let strVariable = "";
  try {
    let result = await bentengTakeshi;
    strVariable = result.message;
    console.log(result.data);
  } catch (error) {
    strVariable = error.message;
    console.log(error.data);
  }
  console.log(strVariable);
};

playFunction2();
