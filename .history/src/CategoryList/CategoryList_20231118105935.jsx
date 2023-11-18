import React from "react";
import CategoriListHorizontal from "./CategoriListHorizontal";
import CategoryListVertical from "./CategoryListVertical";

const CategoryList = ({ filterItems }) => {
  return (
    <div className="flex">
      <div className="flex justify-start">
        <CategoriListHorizontal filterItems={filterItems} />
      </div>
      <CategoryListVertical />
    </div>
  );
};

export default CategoryList;
