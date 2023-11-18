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
    <div className="flex gap-4 pr-4">
      <span className="cursor-pointer text-sm" onClick={() => filterItems()}>
        همه فست فودها
      </span>
      {CatList.map((categoryItem) => {
        return (
          <div
            className="text-sm cursor-pointer"
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
