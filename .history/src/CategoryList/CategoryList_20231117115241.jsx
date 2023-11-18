import React, { useEffect } from "react";
import axios from "../axios";

const CategoryList = () => {
  const getCategory = async () => {
    await axios.get("/FoodCategory/categories").then((res) => console.log(res));
  };

  useEffect(() => {}, []);

  return <div>CategoryList</div>;
};

export default CategoryList;
