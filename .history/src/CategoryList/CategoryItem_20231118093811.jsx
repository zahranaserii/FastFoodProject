import { message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../axios";

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

  //effect
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="flex">
      {CatList.map((categoryItem) => {
        return <div key={categoryItem.id}>{categoryItem.name}</div>;
      })}
    </div>
  );
};

export default CategoryItem;
