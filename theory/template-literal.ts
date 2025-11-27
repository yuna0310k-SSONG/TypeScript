type Size = "small" | "medium" | "large";
type Concept = "potato" | "Sweet-Potato" | "Cream" | "Hot-Chicken";
type Pizza = `${Size}-${Concept}pizza`;

const makePizza = (pizza: Pizza) => {
  if (pizza == "large-Hot-Chickenpizza") {
    console.log("핫치킨 라지 피자");
  }
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type EndPoint = "Posts" | "Comments" | "Users";

type API = `api/${EndPoint}`;
const test: API = "api/Comments";

type Students = `Javascript-${string}`;
const name10: Students = "Javascript-여진이";
