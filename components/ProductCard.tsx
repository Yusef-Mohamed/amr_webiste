import { IProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface IProductCardProps {
  product: IProduct;
  isOdd: boolean;
}
const ProductCard: React.FC<IProductCardProps> = ({ product, isOdd }) => {
  const { description, id, image, title } = product;
  return (
    <section id={id} className={`py-16 ${!isOdd ? "" : "bg-shadow"}`}>
      <div
        className={`${
          isOdd ? "" : " lg:flex-row-reverse"
        }  flex flex-col-reverse lg:flex-row container mx-auto items-center justify-center`}
      >
        <div className="lg:w-[50%] mx-4 productBg ">
          <h2
            data-aos="fade-up"
            data-aos-duration="750"
            className="text-3xl font-semibold my-8 text-gold text-center lg:text-start"
          >
            {title}
            <span className="text-4xl ml-3 ">:</span>
          </h2>
          <p
            data-aos-duration="1000"
            data-aos="fade-up"
            className="text-xl py-6 "
          >
            {description}
          </p>
        </div>
        <div className="lg:w-[50%] ">
          <div
            data-aos="fade-up"
            data-aos-duration="1250"
            className=" max-w-[400px] aspect-[1.4/1] rounded-xl overflow-hidden mx-auto relative"
          >
            <Image className="" alt={title} src={image} fill />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductCard;
