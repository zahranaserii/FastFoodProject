import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="grid">
      <span>{items.name}</span>
    </div>
  );
};

export default FastFoodItem;
