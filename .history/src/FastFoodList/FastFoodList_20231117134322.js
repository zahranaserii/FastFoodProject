import { message } from "antd";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "../axios";
import FastFoodItem from "./FastFoodItem";

const FastFoodList = () => {
  //stest
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
      <div>
        {foodList.map((item) => (
          <FastFoodItem />
        ))}
      </div>
    );
  };

  //effects
  useEffect(() => {
    getFoodList();
  }, []);
  return <div className="mt-4">{renderContent}</div>;
};

export default FastFoodList;
