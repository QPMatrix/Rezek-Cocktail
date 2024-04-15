import { FaHome } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import { Routes } from "@/constants/routes";

const Category = () => {
  return (
    <div
      className="font-amiri z-0 flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-green-200 relative"
      dir="rtl"
    >
      <Button size="icon" variant="outline" className="mb-5">
        <Link to="/">
          <FaHome className="size-6 md:size-4" />
        </Link>
      </Button>
      <h1 className="font-amiri text-4xl text-center">أفظل اطباقنا</h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {Routes.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center">
              <img src={item.image} alt={item.name} className="w-20 " />
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Category;
