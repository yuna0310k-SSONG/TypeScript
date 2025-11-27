// annotation.ts

const age: number = 10;
const name1: string = "여진소프트";
const idMan: boolean = true;
const coffee: { name: string; price: number; shots: number } = {
  name: "진스커피",
  price: 3000,
  shots: 2,
};

//pizza [name,price,hasPeperoni]
// const pizza: { name: string; price: number; hasPeperoni: boolean } = {
//   name: "고구마피자",
//   price: 9000,
//   hasPeperoni: false,
// };

const nums: number[] = [1, 2, 3, 4, 5];

// LunchBoxes
const x = [
  { main: "계란후라이", sub: ["김"] },
  { main: "오리고기", sub: ["계란말이", "파프리카", "오이"] },
];
const lunchBox: { main: string; sub: string[] }[] = [
  { main: "계란후라이", sub: ["김"] },
  { main: "오리고기", sub: ["계란말이", "파프리카", "오이"] },
];
