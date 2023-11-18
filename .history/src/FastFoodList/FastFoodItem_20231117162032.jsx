import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";

const FastFoodItem = ({ imageUrl, price, name, ingredients }) => {
  return (
    <div className="relative">
      {/* <span>{items.ingredients}</span> */}
      <img
        src={imageUrl}
        className="hover:px-1 duration-500 bg-cover bg-center"
        alt=""
      />
      <div className="absolute text-xs font-medium bg-yellow-300 hover:bg-orange-500 cursor-pointer rounded-lg px-1 top-3 right-4 py-0.5 whitespace-nowrap shadow-lg">
        قیمت: {price.toLocaleString()}تومان
      </div>
      <div className="flex flex-col items-center py-4 px-5">
        <span className="text-sm font-medium pb-2 hover:text-slate-700">
          {name}
        </span>
        <span className="text-[10px] text-slate-600 mb-2 ">{ingredients}</span>
        <button
          size="small"
          className="flex justify-center items-center gap-1 w-full my-auto bg-transparent rounded-md py-0.5 border border-orange-500 text-orange-700 hover:text-white hover:bg-orange-700"
          type="default"
        >
          <ShoppingCartOutlined />
          <span>افزودن به سبد خرید</span>
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
