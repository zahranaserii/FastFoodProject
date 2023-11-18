import { Button } from "antd";
import React from "react";

const FastFoodItem = ({ items: { imageUrl, price, name, ingredients } }) => {
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
      <div className="flex flex-col items-center py-1 px-2">
        <span className="text-sm font-medium pb-2 hover:text-slate-700">
          {name}
        </span>
        <span className="text-[10px] text-slate-600 ">{ingredients}</span>
        <div className="py-2">
          <Button size="small" className="" type="default">
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FastFoodItem;
