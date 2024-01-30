"use client";
interface ScrollBtnProps {
  value: string;
  id: string;
}
const ScrollBtn: React.FC<ScrollBtnProps> = ({ value, id }) => {
  const onClick = () => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <button
      onClick={onClick}
      className="btn lg:mx-0 mx-auto block w-fit relative z-10"
    >
      {value}
    </button>
  );
};
export default ScrollBtn;
