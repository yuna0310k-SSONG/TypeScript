export type ButtonProps = {
  text: string;
  backgroundColor: "#1AD4C5" | "#BBBABA" | "#FF9093";
  color: "black" | "grey";
};

const Button = (props: ButtonProps) => {
  return <button style={{ ...props }}>{props.text}</button>;
};

export default Button;
