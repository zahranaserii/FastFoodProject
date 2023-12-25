import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <nav className="container px-20 -mt-9 hidden md:block">
      <div className="bg-white px-44 rounded-md shadow-lg py-8 h-10 flex items-center">
        <CategoryItem filterItems={filterItems} />
      </div>
    </nav>
  );
};

export default CategoriListHorizontal;
