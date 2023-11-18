import { message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "../axios";

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
  //effects
  useEffect(() => {
    getFoodList();
  }, []);
  return <div>FastFoodList</div>;
};

export default FastFoodList;
