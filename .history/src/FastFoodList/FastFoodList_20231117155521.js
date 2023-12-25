import { message } from "antd";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "../axios";
import FastFoodItem from "./FastFoodItem";

const FastFoodList = () => {
  //states
  const [loading, setLoading] = useState(false);
  const [foodList, setfoodList] = useState([]);
  //functions
  const getFoodList = async (categoryId = null) => {
    setLoading(true);
    await axios
      .get(`/FastFood/list/${categoryId ? "categoryId=" + categoryId : ""}`)
      .then((res) => {
        setfoodList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        message.error(err);
        setLoading(false);
      });
  };
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="px-5 max-w-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {foodList.map((item) => (
            <div
              className="bg-slate-100 rounded-md shadow-md cursor-pointer"
              key={item.id}
            >
              <FastFoodItem {...item} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  //effects
  useEffect(() => {
    getFoodList();
  }, []);
  return <div>{renderContent()}</div>;
};

export default FastFoodList;
