import React, { useEffect, useState } from "react";
import axios from "../axios";

const CategoryList = () => {
  //states
  const [CatList, setCatList] = useState([]);
  const [loading, setLoading] = useState(false);
  //functions
  const getCategory = async () => {
    setLoading(true);
    await axios.get("/FoodCategory/categories").then((res) => {
      setCatList(res.data), setLoading(false);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <nav className="container px-8 -mt-9">
      <div className="bg-white rounded-md shadow-lg py-8 h-10 flex items-center">
        <div className="categoryItem flex gap-x-8 px-3">
          <a href="#" className="whitespace-nowrap">
            همه فست فودها
          </a>
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
