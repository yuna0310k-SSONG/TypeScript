//sfc
const Circle = (props) => {
  const redCircle = {
    width: props.x,
    height: props.x,
    backgroundColor: props.icecream,
    borderRadius: "999px",
  };

  return (
    <>
      <div style={redCircle}></div>
    </>
  );
};

export default Circle;
