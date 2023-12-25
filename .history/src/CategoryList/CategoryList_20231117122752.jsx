import React, { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

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
        <div>
          <Link to="#">همه ی فست فود ها</Link>
        </div>
      </div>
    </nav>
  );
};

export default CategoryList;
