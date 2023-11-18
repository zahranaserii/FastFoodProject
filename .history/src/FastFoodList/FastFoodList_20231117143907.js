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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {foodList.map((item) => (
          <div className="bg-red-400" key={items.id}>
            <FastFoodItem items={item} />
          </div>
        ))}
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
