"use client";
import { IProduct } from "@/types/types";
import Image from "next/image";
interface IProductBtnProps {
  product: IProduct;
  indx: number;
}
const ProductBtn: React.FC<IProductBtnProps> = ({ product, indx }) => {
  const onClick = () => {
    const el = document.getElementById(product.id);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <button
      data-aos="fade-up"
      data-aos-duration={`${500 + indx * 200}`}
      onClick={onClick}
      className="flex-col w-40 h-40 p-4 bg-shadow rounded-full flex items-center justify-center "
    >
      <Image src={product.logo} alt={product.title} width={50} height={50} />
      <h3 className="mt-4 font-semibold">{product.title}</h3>
    </button>
  );
};

export default ProductBtn;
