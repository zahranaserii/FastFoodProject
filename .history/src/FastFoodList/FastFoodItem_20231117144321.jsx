import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div>
      {/* <span>{items.ingredients}</span> */}
      <img src={items.imageUrl} alt="" />
      <span>نام:{items.name}</span>
      <span>قیمت:{items.price.toLocaleString()}تومان</span>
    </div>
  );
};

export default FastFoodItem;
