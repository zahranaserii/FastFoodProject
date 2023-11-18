import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="grid" key={items.id}>
      <span>{items.name}</span>
      <span>{items.price}</span>
      <span>{items.ingredients}</span>
      <span>{items.imageUrl}</span>
    </div>
  );
};

export default FastFoodItem;
