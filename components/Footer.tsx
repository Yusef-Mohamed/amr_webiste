import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t  border-t-shadow">
      <div className="container py-4 flex justify-between">
        <p>
          Codded by <a href="">Yousef</a>
        </p>
        <ul className=" w-fit flex mx-auto gap-6">
          <li>
            <a
              href="#"
              target="_blank"
              className="flex w-12 h-12 bg-fade items-center justify-center hover:bg-shadow hover:text-mainText transition-all rounded-full text-mainBg text-2xl"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="flex w-12 h-12 bg-fade items-center justify-center hover:bg-shadow hover:text-mainText transition-all rounded-full text-mainBg text-2xl"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="flex w-12 h-12 bg-fade items-center justify-center hover:bg-shadow hover:text-mainText transition-all rounded-full text-mainBg text-2xl"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
