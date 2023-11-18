import React, { useEffect } from "react";
import axios from "../axios";

const CategoryList = () => {
  const getCategory = async () => {
    await axios.get("/");
  };

  useEffect(() => {}, []);

  return <div>CategoryList</div>;
};

export default CategoryList;
