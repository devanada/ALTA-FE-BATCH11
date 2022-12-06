type addressType = {
  city?: string; // ? artinya opsional
  country: string;
};

interface objType {
  name: string;
  age: number;
  job: string;
  isMarried: boolean;
  address: addressType;
  hobbies: string[];
}

const objVar: objType = {
  name: "Thomas Shelby",
  age: 36,
  job: "Businessman",
  isMarried: true,
  address: {
    country: "England",
  },
  hobbies: ["Ride a horse", "Playing bowling"],
};

// penggunaan extends bisa dipakai untuk memperluas/ekspansi tipe data
interface peoplesType extends addressType {
  nama: string;
}

let peoples: peoplesType[] = [
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

peoples.forEach((people: peoplesType, index: number) => {
  people.city = "seoul";
});

console.log(peoples);
