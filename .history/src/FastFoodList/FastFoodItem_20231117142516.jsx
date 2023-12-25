import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="grid" key={items.id}>
      <span>{items.name}</span>
    </div>
  );
};

export default FastFoodItem;
