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
      <div className="bg-white rounded-md shadow-lg py-8 h-10">
        <div className="categoryItem">
            <a href="#">همه ی فست فود ها</a>
          {CatList.map((item,index)=>(
            <div key={index}>{item.}</div>
          )
          )}
        </div>
      </div>
    </nav>
  );
};

export default CategoryList;
