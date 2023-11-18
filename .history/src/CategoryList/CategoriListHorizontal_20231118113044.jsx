import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <div className="w-[800px] px-7 max-w-[1000px]">
      <div className="bg-white -mt-9 hidden md:flex rounded-md shadow-lg py-8 h-10 items-center">
        <CategoryItem filterItems={filterItems} />
      </div>
    </div>
  );
};

export default CategoriListHorizontal;
