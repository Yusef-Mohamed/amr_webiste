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
      data-aos="fade-up"
      data-aos-duration="1000"
      className="btn lg:mx-0 mx-auto block w-fit relative z-10"
    >
      {value}
    </button>
  );
};
export default ScrollBtn;
