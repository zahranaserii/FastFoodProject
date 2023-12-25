import { message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../axios";

const CategoryItem = ({ filterItems }) => {
  //states
  const [CatList, setCatList] = useState([]);
  const [_loading, setLoading] = useState(false);

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
  console.log("first");
  //   const renderContent = () => {
  //     if (loading) {
  //       return <Loading />;
  //     }
  return (
    <div className="flex">
      <span className="" onClick={() => filterItems()}>
        همه فست فود ها
      </span>
      {CatList.map((categoryItem) => {
        return (
          <div
            key={categoryItem.id}
            onClick={() => filterItems(categoryItem.id)}
          >
            {categoryItem.name}
          </div>
        );
      })}
    </div>
  );
};
//   return <>{renderContent}</>;

export default CategoryItem;
