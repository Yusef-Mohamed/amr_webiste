import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t  border-t-shadow">
      <div className="container py-4 flex justify-between items-center">
        <Image alt="logo" src="/logo.svg" width={40} height={60} />
        <ul className="flex gap-6">
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
      <p className="text-center py-2 border-t border-t-shadow">
        Codded by{" "}
        <a
          href="https://wa.me/201207503648"
          target="_blank"
          className="font-semibold text-mainText hover:text-primary transition-all"
        >
          Yousef
        </a>
      </p>
    </footer>
  );
};

export default Footer;
