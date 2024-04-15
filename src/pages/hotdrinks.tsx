import Footer from "@/components/footer";
import MenuHandlers from "@/components/menu-handler";
import { HotDrinks } from "@/constants/hot-drinks";
import { useParams } from "react-router-dom";
const HotDrink = () => {
  const params = useParams();

  return (
    <main
      className="font-amiri z-0 flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-green-200 relative"
      dir="rtl"
    >
      <h1 className="font-bold text-4xl text-center mb-8">مشروبات ساخنة</h1>
      <section className="flex flex-col items-center w-full">
        {HotDrinks.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full md:w-3/4 lg:w-1/2 text-right"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-fit rounded-lg mb-4"
            />
            <h2 className="font-bold text-2xl mb-2">{item.title}</h2>
            <p className=" font-bold text-xl">{item.price} ₪</p>
          </div>
        ))}
      </section>
      <div className="flex flex-row space-x-4 justify-start items-center w-full">
        <MenuHandlers pathname={params.category!} />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default HotDrink;
