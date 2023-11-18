import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <>
      {/* <span>{items.ingredients}</span> */}
      <img src={items.imageUrl} alt="" />
      <span>نام:{items.name}</span>
      <span>قیمت:{items.price.toLocaleString()}تومان</span>
    </>
  );
};

export default FastFoodItem;
