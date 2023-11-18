import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="relative">
      {/* <span>{items.ingredients}</span> */}
      <img src={items.imageUrl} alt="" />
      <span className="absolute text-sm top-2 px-2 whitespace-nowrap">
        {items.name}
      </span>
      <span>قیمت:{items.price.toLocaleString()}تومان</span>
    </div>
  );
};

export default FastFoodItem;
