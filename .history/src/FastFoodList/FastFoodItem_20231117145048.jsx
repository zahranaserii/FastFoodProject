import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="relative">
      {/* <span>{items.ingredients}</span> */}
      <img src={items.imageUrl} alt="" />
      <div className="absolute text-xs font-medium bg-orange-400 hover:bg-orange-500 cursor-pointer rounded-lg px-1 top-2 py-0.5 whitespace-nowrap">
        {items.name}
        {"  "}
        قیمت: {items.price.toLocaleString()}تومان
      </div>
    </div>
  );
};

export default FastFoodItem;
