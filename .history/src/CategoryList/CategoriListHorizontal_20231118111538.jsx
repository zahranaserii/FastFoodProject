import React from "react";
import CategoryItem from "./CategoryItem";

const CategoriListHorizontal = ({ filterItems }) => {
  return (
    <nav className=" ">
      <div className=" -mt-9 px-44 hidden md:flex rounded-md shadow-lg py-8 h-10 items-center justify-start">
        <CategoryItem filterItems={filterItems} />
      </div>
    </nav>
  );
};

export default CategoriListHorizontal;
