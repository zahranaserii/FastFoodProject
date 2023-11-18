import React from "react";

const FastFoodItem = ({ items }) => {
  return (
    <div
      key={items.id}
      className="bg-gray-300 flex md:col-span-4 sm:col-span-6"
    >
      <span>{items.name}</span>
    </div>
  );
};

export default FastFoodItem;
