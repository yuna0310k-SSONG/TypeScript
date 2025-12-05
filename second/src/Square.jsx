const Square = (props) => {
  const sizes = {
    small: "50px",
    medium: "100px",
    large: "150px",
  };

  const SquareStyle = {
    width: sizes[props.size],
    height: sizes[props.size],
    backgroundColor: props.bg,
  };
  return <div style={SquareStyle}></div>;
};

export default Square;
