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

  return (
    <nav className="container px-24 -mt-9">
      <div className="bg-white rounded-md shadow-lg py-8 h-10 flex items-center">
        <div className="categoryItem flex gap-x-8 px-3">
          <a href="#">همه فست فودها</a>
          {CatList.map((item, index) => (
            <div className="categoryItem flex items-center" key={index}>
              <a href="#">{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryList;
