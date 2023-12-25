import React, { useEffect, useState } from "react";
import axios from "../axios";

const CategoryList = () => {
  //states
  const [CatList, setCatList] = useState([]);
  //functions
  const getCategory = async () => {
    await axios
      .get("/FoodCategory/categories")
      .then((res) => setCatList(res.data));
  };

  useEffect(() => {
    getCategory();
  }, []);

  return <div>CategoryList</div>;
};

export default CategoryList;
