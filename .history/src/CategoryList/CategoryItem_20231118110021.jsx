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
    <div className="flex gap-8 justify-end">
      <span
        className="cursor-pointer whitespace-nowrap text-sm font-medium text-gray-700 hover:text-orange-700"
        onClick={() => filterItems()}
      >
        همه فست فودها
      </span>
      {CatList.map((categoryItem) => {
        return (
          <div
            className="text-sm cursor-pointer font-medium text-gray-700  hover:text-orange-700"
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
