import Footer from "@/components/footer";
import MenuHandlers from "@/components/menu-handler";
import { SweetMenu } from "@/constants/sweet";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
const Sweet = () => {
  const params = useParams();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      className="font-amiri z-0 flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-green-200 relative"
      dir="rtl"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <motion.h1
        className="font-bold text-4xl text-center mb-8"
        variants={variants}
      >
        حلويات
      </motion.h1>
      <motion.section
        className="flex flex-col items-center w-full"
        variants={variants}
      >
        {SweetMenu.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full md:w-3/4 lg:w-1/2 text-right"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={variants}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-fit rounded-lg mb-4"
            />
            <h2 className="font-bold text-2xl mb-2">{item.title}</h2>
            <p className=" font-bold text-xl">{item.price} ₪</p>
          </motion.div>
        ))}
      </motion.section>
      <motion.div
        className="flex flex-row space-x-4 justify-start items-center w-full"
        variants={variants}
      >
        <MenuHandlers pathname={params.category!} />
      </motion.div>
      <footer>
        <Footer />
      </footer>
    </motion.main>
  );
};

export default Sweet;
