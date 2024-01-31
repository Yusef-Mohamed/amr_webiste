import { MdEmail } from "react-icons/md";

const LetsWorkTogether = () => {
  return (
    <section className="border-y border-y-shadow">
      <div className="container py-12 text-center">
        <h4 className=" mb-4 text-primary  font-semibold">WHATS NEXT</h4>
        <h2 className="text-4xl font-semibold ">Lets work together!</h2>
        <p className=" my-4 text-center">
          If you&apos;d like to talk about a project you want help with or need
          an advice about product design, just drop me a message at{" "}
          <a href="" className="text-mainText font-semibold">
            nathan@ojieame.design
          </a>
        </p>
        <p className=" my-4 text-center">
          I&apos;m currently Available for any design systems projects,
          dashboard designs or landing pages gigs.
        </p>
        <a
          href=""
          className="btn uppercase text-sm flex items-center gap-4 w-fit mx-auto"
        >
          Write me an email <MdEmail />
        </a>
      </div>
    </section>
  );
};

export default LetsWorkTogether;
