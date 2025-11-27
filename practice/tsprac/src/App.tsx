// import Button, { type ButtonProps } from "./Button";
import Font from "./Font";

function App() {
  // const buttons: ButtonProps[] = [
  //   { text: "버튼1", backgroundColor: "#1AD4C5", color: "black" },
  //   { text: "버튼2", backgroundColor: "#BBBABA", color: "grey" },
  //   { text: "버튼3", backgroundColor: "#FF9093", color: "black" },
  // ];

  return (
    <>
      {/* {buttons.map((btn) => (
        <Button {...btn} />
      ))} */}
      <Font variant="heading" fontSize="60px" />
    </>
  );
}

export default App;
