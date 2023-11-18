import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div className="bg-gray-300 md:col-span-4 sm:col-span-6">
      <span>{items.name}</span>
    </div>
  );
};

export default FastFoodItem;
