import ProductBtn from "@/components/ProductBtn";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/data";

const ProductPage = () => {
  return (
    <>
      <section className="container">
        <div className="flex flex-wrap gap-4 py-16 justify-center">
          {products.map((product, indx) => (
            <ProductBtn product={product} key={indx} indx={indx} />
          ))}
        </div>
      </section>{" "}
      {products?.map((product, index) => (
        <ProductCard
          isOdd={index % 2 === 0}
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
};

export default ProductPage;
