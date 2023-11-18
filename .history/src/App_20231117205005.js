import { message } from "antd";
import { useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import FastFoodList from "./FastFoodList/FastFoodList";
import Header from "./Header/Header";
import axios from "./axios";

function App() {
  //states
  const [loading, setLoading] = useState(false);
  const [foodList, setfoodList] = useState([]);
  //functions
  const getFoodList = async (categoryId = null) => {
    setLoading(true);
    await axios
      .get(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`)
      .then((res) => {
        setfoodList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        message.error(err);
        setLoading(false);
      });
  };
  const filterItems = (categoryId) => {
    getFoodList(categoryId);
  };

  return (
    <div className="bg-slate-200 max-w-6xl min-w-full">
      <Header />
      <div className="flex h-[80px] justify-center">
        <CategoryList filterItems={filterItems} />
      </div>
      <FastFoodList
        loading={loading}
        getFoodList={getFoodList}
        foodList={foodList}
      />
    </div>
  );
}

export default App;
