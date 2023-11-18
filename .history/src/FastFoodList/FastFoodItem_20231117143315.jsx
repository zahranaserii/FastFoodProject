import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" key={items.id}>
      <span>{items.name}</span>
      <span>قیمت:{items.price.toLocaleString()}</span>
      <span>{items.ingredients}</span>
      <span>{items.imageUrl}</span>
    </div>
  );
};

export default FastFoodItem;