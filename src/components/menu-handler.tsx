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
import { useEffect, useState } from "react";

const MenuHandlers = ({ pathname }: { pathname: string }) => {
  const closeDialog = () => {};
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="z-50 fixed right-0 bottom-0 transform -translate-y-1/2">
      <Dialog open={open}>
        <DialogTrigger>
          <Button
            variant="outline"
            className="rounded-full size-12 bg-white shadow-lg"
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
              <div className="bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center scroll">
                <img src={item.image} alt={item.name} className="w-20 " />
                <h2 className="font-bold sm:text-xl">{item.name}</h2>
              </div>
            </Link>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuHandlers;
