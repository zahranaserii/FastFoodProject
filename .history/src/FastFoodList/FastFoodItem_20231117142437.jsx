import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="bg-gray-300">
      <span>{items.name}</span>
    </div>
  );
};

export default FastFoodItem;
