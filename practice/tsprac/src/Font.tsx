export type FontProps =
  | { variant: "heading"; fontSize: "60px" | "48px" | "40px" }
  | { variant: "subtitle"; fontSize: "28px" | "18px" };

const Font = ({ variant, fontSize }: FontProps) => {
  const finalStyle = { fontSize };

  return variant === "heading" ? (
    <h1 style={finalStyle}>{fontSize} 헤딩</h1>
  ) : (
    <h2 style={finalStyle}>{fontSize} 서브</h2>
  );
};

export default Font;
