import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import { Routes } from "@/constants/routes";

const Category = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="font-amiri z-0 flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-green-200 relative"
      dir="rtl"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <Button size="icon" variant="outline" className="mb-5">
        <Link to="/">
          <FaHome className="size-6 md:size-4" />
        </Link>
      </Button>
      <motion.h1
        className="font-amiri text-4xl text-center"
        variants={variants}
      >
        أفظل اطباقنا
      </motion.h1>
      {/* Categories */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6"
        variants={variants}
      >
        {Routes.map((item, index) => (
          <Link to={item.link} key={index}>
            <motion.div
              className="bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={variants}
            >
              <img src={item.image} alt={item.name} className="w-20 " />
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
            </motion.div>
          </Link>
        ))}
      </motion.div>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
};

export default Category;
