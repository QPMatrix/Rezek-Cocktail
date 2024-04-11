import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { MdRestaurantMenu } from "react-icons/md";
import { Routes } from "@/constants/routes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};
const MenuHandlers = ({ pathname }: { pathname: string }) => {
  const closeDialog = () => {};
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div className="z-50 fixed right-0 bottom-0 transform -translate-y-1/2">
      <Dialog open={open}>
        <DialogTrigger>
          <Button
            variant="outline"
            className="rounded-full size-12"
            size="icon"
            onClick={() => setOpen(!open)}
          >
            <MdRestaurantMenu className="size-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="overflow-auto max-h-screen">
          <DialogHeader>
            <DialogTitle>قائمة المشروبات</DialogTitle>
          </DialogHeader>

          {Routes.map((item, index) => (
            <Link to={item.link} key={index} onClick={closeDialog}>
              <motion.div
                className="bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center scroll"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={variants}
              >
                <img src={item.image} alt={item.name} className="w-20 " />
                <h2 className="font-bold sm:text-xl">{item.name}</h2>
              </motion.div>
            </Link>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuHandlers;
