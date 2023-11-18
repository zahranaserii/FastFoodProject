import React from "react";
import CategoriListHorizontal from "./CategoriListHorizontal";
import CategoryListVertical from "./CategoryListVertical";

const CategoryList = ({ filterItems }) => {
  return (
    <div className="flex w-full">
      <CategoriListHorizontal filterItems={filterItems} />
      <CategoryListVertical />
    </div>
  );
};

export default CategoryList;
