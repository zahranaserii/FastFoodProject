import React, { useState } from "react";
import axios from "../axios";
import { message } from "antd";

const CategoryItem = () => {
  //states
  const [CatList, setCatList] = useState([]);
  const [loading, setLoading] = useState(false);

  //functions
  const getCategory = async () => {
    setLoading(true);
    await axios
      .get("/FoodCategory/categories")
      .then((res) => {
        setCatList(res.data);
        setLoading(false);
      })
      .catch((error) => {
        message.error(error);
        setLoading(false);
      });
  };
  return (
    <div className="flex">
      {CatList.map((categoryItem) => {
        return <div></div>;
      })}
    </div>
  );
};

export default CategoryItem;
