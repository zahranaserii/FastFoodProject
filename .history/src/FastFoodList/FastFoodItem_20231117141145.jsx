import React from "react";

const FastFoodItem = ({ items }) => {
  return <div key={items.id} className="md:grid-cols-4 sm:grid-cols-6"></div>;
};

export default FastFoodItem;
