import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="">
      {/* <span>{items.ingredients}</span> */}
      <img src={items.imageUrl} alt="" />
      <span className="px-2 whitespace-nowrap">نام:{items.name}</span>
      <span>قیمت:{items.price.toLocaleString()}تومان</span>
    </div>
  );
};

export default FastFoodItem;
