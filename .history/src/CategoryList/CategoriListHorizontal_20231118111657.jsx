import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <div className="bg-white -mt-9 px-44 hidden md:flex rounded-md shadow-lg py-8 h-10 items-center justify-start">
      <div className=" relative right-0">
        <CategoryItem filterItems={filterItems} />
      </div>
    </div>
  );
};

export default CategoriListHorizontal;
