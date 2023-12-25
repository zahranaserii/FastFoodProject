import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="bg-red-400" key={items.id}>
      <span>نام:{items.name}</span>
      <span>قیمت:{items.price.toLocaleString()}تومان</span>
      {/* <span>{items.ingredients}</span>
      <span>{items.imageUrl}</span> */}
    </div>
  );
};

export default FastFoodItem;
