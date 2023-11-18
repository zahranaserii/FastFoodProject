import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <div className="px-44 flex">
      <div className="bg-white -mt-9 hidden md:flex rounded-md shadow-lg py-8 h-10 items-center">
        <CategoryItem filterItems={filterItems} />
      </div>
    </div>
  );
};

export default CategoriListHorizontal;
