import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="relative">
      {/* <span>{items.ingredients}</span> */}
      <img src={items.imageUrl} alt="" />
      <div className="absolute text-xs font-medium bg-yellow-300 hover:bg-orange-500 cursor-pointer rounded-lg px-1 top-3 right-4 py-0.5 whitespace-nowrap shadow-lg">
        قیمت: {items.price.toLocaleString()}تومان
      </div>
      <div className="flex flex-col items-center py-1">
        <span className="text-sm font-medium">{items.name}</span>
        <span className="text-xs text-slate-600">{items.ingredients}</span>
      </div>
    </div>
  );
};

export default FastFoodItem;