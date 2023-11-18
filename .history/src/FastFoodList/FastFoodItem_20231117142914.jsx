import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" key={items.id}>
      <div className="col-span-1 md:col-span-1">
        <span>{items.name}</span>
        <span>{items.price}</span>
        <span>{items.ingredients}</span>
        <span>{items.imageUrl}</span>
      </div>
    </div>
  );
};

export default FastFoodItem;
