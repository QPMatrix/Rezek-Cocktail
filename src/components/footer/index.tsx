import { FaCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="flex justify-center items-center py-4"
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row space-x-4">
        <FaCopyright className="text-lg ml-2" />
        <p>جميع الحقوق محفوظة</p>
        <a
          href="https://www.QPMatrix.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-purple-800"
        >
          QPMatrix
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
