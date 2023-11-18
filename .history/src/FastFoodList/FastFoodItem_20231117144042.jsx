import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <>
      <span>نام:{items.name}</span>
      <span>قیمت:{items.price.toLocaleString()}تومان</span>
      <span>{items.ingredients}</span>
      <img src={items.imageUrl} alt="" />
    </>
  );
};

export default FastFoodItem;
