import { message } from "antd";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import axios from "../axios";
import FastFoodItem from "./FastFoodItem";

const FastFoodList = ({ foodList, getFoodList, loading }) => {
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
export const getFoodList = FastFoodList;
export default FastFoodList;
