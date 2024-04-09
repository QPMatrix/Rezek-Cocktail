import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const CategoryDetailPage = () => {
  const dummy = [
    {
      id: 1,
      name: "بانكيك ٣ طبفقات",
      price: 30,
      image:
        "https://th.bing.com/th/id/OIP.DrMWPwQkbII02-2jD0XPhQHaJQ?rs=1&pid=ImgDetMain",
    },
    {
      id: 1,
      name: "بانكيك ٣ طبفقات",
      price: 30,
      image:
        "https://th.bing.com/th/id/OIP.DrMWPwQkbII02-2jD0XPhQHaJQ?rs=1&pid=ImgDetMain",
    },
    {
      id: 1,
      name: "بانكيك ٣ طبفقات",
      price: 30,
      image:
        "https://th.bing.com/th/id/OIP.DrMWPwQkbII02-2jD0XPhQHaJQ?rs=1&pid=ImgDetMain",
    },
    {
      id: 1,
      name: "بانكيك ٣ طبفقات",
      price: 30,
      image:
        "https://th.bing.com/th/id/OIP.DrMWPwQkbII02-2jD0XPhQHaJQ?rs=1&pid=ImgDetMain",
    },
  ];
  const params = useParams();
  const getTitle = () => {
    switch (params.category) {
      case "sweet":
        return "حلويات";
      case "milkshake1":
        return "فخفينا";
      case "fresh-juice":
        return "شيك فواكه";
      case "hotdrinks":
        return "مشروبات ساخنة";
      case "icecream":
        return "بوظه";
      case "food":
        return "المأكولات";
      case "milkshake2":
        return "ميلك شيك";
      case "juice":
        return "مشروبات بنكة طبيعية";
      default:
        return "الصفحة غير موجودة";
    }
  };
  return (
    <main className="flex flex-col items-center px-4 py-12">
      <Button className="self-start mb-4 bg-purple-500 hover:bg-purple-700 text-white rounded-full px-6 py-2">
        <Link to="/categories">العودة إلى القائمة</Link>
      </Button>
      <h1 className="text-purple-600 font-bold text-4xl text-center mb-8">
        {getTitle()}
      </h1>
      <section className="flex flex-col items-center w-full">
        {dummy.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full md:w-3/4 lg:w-1/2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h2 className="font-bold text-2xl mb-2">{item.name}</h2>
            <p className="text-purple-600 font-bold text-xl">{item.price} ₪</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default CategoryDetailPage;
