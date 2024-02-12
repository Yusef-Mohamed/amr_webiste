import Slider from "@/components/Sliders/Slider";
import { products } from "@/data/data";
import { getUrlFromPath } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";

interface IProductPageProps {
  params: {
    productId: string;
  };
}
export async function generateStaticParams() {
  const paths = products.map(({ id }) => id);
  return paths;
}
export async function generateMetadata({
  params,
}: IProductPageProps): Promise<Metadata> {
  const { productId } = params;
  const product = products.find((product) => product.id === productId);
  if (!product)
    return { title: "Project not found", description: "Project not found" };
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [
        {
          url: getUrlFromPath(product.image[0]),
          alt: product.title,
        },
      ],
    },
  };
}
const ProductPage = ({ params }: IProductPageProps) => {
  const { productId } = params;
  const product = products.find((product) => product.id === productId);
  return (
    <section className="min-h-[90vh] py-12 overflow-hidden">
      {product ? (
        <>
          <Slider
            slidesCount={product.image.length}
            withArrow={true}
            withDots={true}
          >
            {product.image.map((item, idx) => (
              <div key={idx} className="w-screen  shrink-0">
                <div className="container aspect-[1.4/1] relative rounded-xl overflow-hidden">
                  <Image
                    alt="productImage"
                    className="transition-all pointer-events-auto group-hover:scale-110 group-hover:rotate-3"
                    fill
                    src={item}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className="container">
            <h2 className="text-4xl mt-8 lg:text-5xl font-semibold">
              {product.title}
              <span className="text-primary text-2xl lg:text-3xl px-2">+</span>
            </h2>
            <p className="text-lg mt-10">{product.description}</p>
            {product.link && product.linkLabel && (
              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 mt-4 mx-auto font-semibold block w-fit border-b-primary border-b  hover:bg-fadePrimary transition-all"
              >
                {product.linkLabel}
              </a>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ProductPage;
