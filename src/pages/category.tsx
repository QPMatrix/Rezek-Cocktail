import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "حلويات",
      image: "/sweets.svg",
      link: "/categories/sweet",
    },
    {
      id: 2,
      name: "فخفينا",
      image: "/milkshakes.svg",
      link: "/categories/milkshake-1",
    },
    {
      id: 3,
      name: "شيك فواكه",
      image: "/freshjuice.svg",
      link: "/categories/fresh-juice",
    },
    {
      id: 4,
      name: "مشروبات ساخنة ",
      image: "/hot_drinks.svg",
      link: "/categories/hot-drinks",
    },
    {
      id: 5,
      name: "بوظه",
      image: "/ice_cream.svg",
      link: "/categories/ice-cream",
    },
    {
      id: 6,
      name: "المأكولات",
      image: "/hotdog.svg",
      link: "/categories/food",
    },
    {
      id: 6,
      name: "ميلك شيك",
      image: "/milkshake2.svg",
      link: "/categories/milkshake-2",
    },
    {
      id: 6,
      name: "مشروبات بنكة طبيعية",
      image: "/orange.svg",
      link: "/categories/juice",
    },
  ];
  return (
    <motion.div
      className="max-w-[1640px] m-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Button size="icon" variant="outline">
        <Link to="/">
          <FaHome className="size-6 md:size-4" />
        </Link>
      </Button>
      <motion.h1
        className="text-purple-600 font-bold text-4xl text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        أفظل اطباقنا
      </motion.h1>
      {/* Categories */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {categories.map((item, index) => (
          <Link to={item.link} key={index}>
            <motion.div
              className="bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 "
                loading="lazy"
              />
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Category;
