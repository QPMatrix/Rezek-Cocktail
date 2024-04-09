import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center bg-black text-white py-4"
      dir="rtl"
    >
      <div className="flex flex-row space-x-4">
        <FaCopyright className="size-5 md:size-3  ml-2" />
        <p>جميع الحقوق محفوظة</p>
        <Link
          to="https://www.QPMatrix.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          QPMatrix
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
