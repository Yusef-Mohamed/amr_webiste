import Link from "next/link";

const Page = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center">
          404
        </h1>
        <p className="text-lg md:text-xl mt-4 text-center">Page not found</p>
        <Link
          href={"/"}
          className="px-8 hover:bg-fadePrimary border-b-2 transition-all block py-3  border-b-primary w-fit mx-auto mt-6"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default Page;
