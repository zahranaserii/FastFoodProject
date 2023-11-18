import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <div className="bg-white -mt-9 w-[600px] hidden md:flex rounded-md shadow-lg py-8 h-10 items-center">
      <CategoryItem filterItems={filterItems} />
    </div>
  );
};

export default CategoriListHorizontal;
