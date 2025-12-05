const Cookie = () => {
  const name = "Yuna";
  const test = { color: "pink", fontSize: "5px" };
  return (
    <>
      <div style={test}>맛있는</div>
      <div>쿠키</div>
      <div>Made by {name}</div>
    </>
  );
};

export default Cookie;
