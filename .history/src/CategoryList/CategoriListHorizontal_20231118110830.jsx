import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <nav className="container -mt-9 hidden md:flex">
      <div className="bg-white px-48 rounded-md shadow-lg py-8 h-10 flex items-center justify-start">
        <CategoryItem filterItems={filterItems} />
      </div>
    </nav>
  );
};

export default CategoriListHorizontal;
