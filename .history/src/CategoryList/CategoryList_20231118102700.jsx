import { message } from "antd";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "../axios";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ filterItems }) => {
  // //states
  // const [CatList, setCatList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // //functions
  // const getCategory = async () => {
  //   setLoading(true);
  //   await axios
  //     .get("/FoodCategory/categories")
  //     .then((res) => {
  //       setCatList(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       message.error(error);
  //       setLoading(false);
  //     });
  // };
  // //effect
  // useEffect(() => {
  //   getCategory();
  // }, []);
  //constant
  const renderLoading = () => {
    if (loading) {
      return <Loading />;
    }
    return <CategoryItem />;
  };
  return (
    <nav className="container px-8 -mt-9">
      <div className="bg-white rounded-md shadow-lg py-8 h-10 flex items-center">
        {renderLoading()}
      </div>
    </nav>
  );
};

export default CategoryList;
