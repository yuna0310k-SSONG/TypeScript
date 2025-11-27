const a2: string | number = "1";
const a3: number | boolean = !!1;

// const lunchBox: { main: string; sub: string[]; dessert: null | string }[] = [
//   { main: "오리고기", sub: ["1", "2"], dessert: "아롬베잌," },
// ];

// & intersection type
// const a4: string & number;
const a5: { name: string } & { age: number } & { idMale: boolean } = {
  name: "신여진",
  age: 20 - 1,
  idMale: false,
};
