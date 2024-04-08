import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { remove } from "../../slices/cartSlice";
import { toast } from "react-hot-toast";

export default function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.remove("Item Removed");
  };

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700 bg-[#faf5ff]">
      <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
        <div className="md:w-[30%] w-full flex justify-center items-center">
          <img
            src={item.image}
            alt="productImage"
            className="w-[40%] md:w-[50] lg:w-full"
          />
        </div>

        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>
          <h1 className="text-slate-700">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex justify-between">
            <p className="font-bold text-[#008080] text-lg">${item.price}</p>
            <div
              onClick={removeFromCart}
              className="flex items-center justify-center w-10 h-10 transition-all bg-red-200 rounded-full cursor-pointer hover:bg-red-400 group"
            >
              <HiOutlineTrash className="text-red-800 transition-all group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
