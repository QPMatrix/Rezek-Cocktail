import Footer from "@/components/footer";
import MenuHandlers from "@/components/menu-handler";
import { FreshJuices } from "@/constants/fresh-juices";
import { FruitsShake } from "@/constants/fruit-shake";
import { HotDrinks } from "@/constants/hot-drinks";
import { MileShake1, MilkShake2 } from "@/constants/milkshake";
import { SweetMenu } from "@/constants/sweet";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
const CategoryDetailPage = () => {
  const params = useParams();
  const getMenu = () => {
    switch (params.category) {
      case "sweet":
        return SweetMenu;
      case "milkshake1":
        return MileShake1;
      case "fresh-juice":
        return FreshJuices;
      case "food":
        return [];
      case "milkshake2":
        return MilkShake2;
      case "juice":
        return FruitsShake;
      case "hotdrinks":
        return HotDrinks;
      default:
        return [];
    }
  };
  const getTitle = () => {
    switch (params.category) {
      case "sweet":
        return "حلويات";
      case "milkshake1":
        return "فخفينا";
      case "fresh-juice":
        return "شيك فواكه";
      case "hotdrinks":
        return "مشروبات ساخنة ";
      case "milkshake2":
        return "ميلك شيك";
      case "juice":
        return "مشروبات بنكة طبيعية";
      default:
        return "الصفحة غير موجودة";
    }
  };
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
        {getTitle()}
      </motion.h1>
      <motion.section
        className="flex flex-col items-center w-full"
        variants={variants}
      >
        {getMenu().map((item, index) => (
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

export default CategoryDetailPage;
