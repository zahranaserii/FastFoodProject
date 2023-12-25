import React from "react";
import CategoriListHorizontal from "./CategoriListHorizontal";
import CategoryListVertical from "./CategoryListVertical";

const CategoryList = () => {
  return (
    <div className="flex">
      <CategoriListHorizontal />
      <CategoryListVertical />
    </div>
  );
};

export default CategoryList;
