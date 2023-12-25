import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <nav className="container -mt-9 hidden md:flex md:justify-start">
      <div className="bg-white px-48 rounded-md shadow-lg py-8 h-10 flex items-center">
        <CategoryItem filterItems={filterItems} />
      </div>
    </nav>
  );
};

export default CategoriListHorizontal;
