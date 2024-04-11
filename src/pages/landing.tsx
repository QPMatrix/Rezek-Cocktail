import { motion } from "framer-motion";
import Lemon from "@/assets/landing/lemon.svg";
import Carrot from "@/assets/landing/carrot.svg";
import WaterMelon from "@/assets/landing/watermelon.svg";
import Apple from "@/assets/landing/apple.svg";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";

const LandingPage = () => {
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
      <motion.header
        className="font-amiri flex flex-col items-center text-center"
        variants={variants}
      >
        <motion.img
          src={Carrot}
          alt="Carrot"
          className="size-48"
          variants={variants}
        />
        <motion.section
          className="font-amiri flex flex-row justify-center items-center mt-10 space-x-4"
          variants={variants}
        >
          <motion.img
            src={Lemon}
            alt="Lemon"
            className="w-16 h-16 md:w-24 md:h-24"
            variants={variants}
          />
          <motion.h1
            className="font-amiri text-6xl text-red-600 font-semibold"
            variants={variants}
          >
            كوكتيل
          </motion.h1>
          <motion.h1
            className="font-amiri text-6xl text-blue-700 mr-2 font-semibold"
            variants={variants}
          >
            الرزق
          </motion.h1>
        </motion.section>
      </motion.header>
      <motion.main
        className="font-amiri flex flex-col items-center justify-center"
        variants={variants}
      >
        <motion.p
          className="font-amiri text-2xl text-gray-900 mt-6 text-center"
          variants={variants}
        >
          مرحبا بكم في كوكتيل الرزق، نقدم لكم أشهى المشروبات بأفضل الأسعار
        </motion.p>
        <motion.section
          className="font-amiri flex flex-row justify-center items-center mt-6 space-x-4"
          variants={variants}
        >
          <motion.img
            src={WaterMelon}
            variants={variants}
            alt="WaterMelon"
            className="w-16 h-16"
          />
          <motion.button
            className="font-amiri bg-green-500 hover:bg-green-700 text-white rounded-full px-8 py-2 mt-4"
            variants={variants}
          >
            <Link to="/categories">القائمة</Link>
          </motion.button>
          <motion.img
            src={Apple}
            variants={variants}
            alt="WaterMelon"
            className="w-16 h-16"
          />
        </motion.section>
      </motion.main>
      <footer className="mt-10">
        <Footer />
      </footer>
    </motion.div>
  );
};

export default LandingPage;
