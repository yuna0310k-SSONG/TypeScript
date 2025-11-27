type ABC = string | string[];
const a6: ABC = "아롬베이크";

//-----------------Student---------------------------//
type Grade = 1 | 2 | 3 | 4 | 5;
type Major = "경영" | "경제" | "컴퓨터" | "심리" | "사회복지";

type Student = {
  name: string;
  grade: Grade;
  major: Major;
};

const kim: Student = {
  name: "김영철",
  grade: 3,
  major: "심리",
};
//-----------------Human---------------------------//
type Human = { name: string; age: number };
type Work = { position: string; wage: number };
type Study = { subject: string; proficiency: number };

const leeyoungcheol: Human & Work & Study = {
  name: "이영철",
  age: 25,
  position: "알바",
  wage: 10030,
  subject: "프로그래밍",
  proficiency: 3,
};
