import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center bg-pink-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/landing.svg"
        alt="Milkshakes"
        className="w-80"
        loading="lazy"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="flex flex-row mt-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mr-2 text-purple-600">
          الرزق
        </h1>
        <h1 className="text-4xl font-bold text-center text-pink-600">كوكتيل</h1>
      </motion.div>

      <motion.div
        className="flex flex-row justify-center items-center mt-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <Button size="icon" variant="ghost" className="text-purple-600">
          <FaFacebook className="mx-2 w-8 h-8" />
        </Button>
        <Button size="icon" variant="ghost" className="text-purple-600">
          <FaTwitter className="mx-2 w-8 h-8" />
        </Button>
        <Button size="icon" variant="ghost" className="text-purple-600">
          <FaInstagram className="mx-2 w-8 h-8" />
        </Button>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Button className="mt-2 rounded-full w-48 bg-purple-500 hover:bg-purple-700 text-white">
          <Link to="/categories">ابدأ الطلب</Link>
        </Button>
      </motion.div>
    </motion.main>
  );
};

export default LandingPage;
