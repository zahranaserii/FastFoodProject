import React, { useEffect, useState } from "react";
import axios from "../axios";

const FastFoodList = () => {
    //stest
    const [loading, setLoading] = useState(false);
    const [foodList setfoodList] = useState([]);
//functions
const getFoodList =async(categoryId=null)=>{
    await axios.get(`/FastFood/list/${categoryId?'categoryId='+categoryId:''}`).then((res)=>console.log(res))
}
    //effects
    useEffect(()=>{

    },[])
  return <div>FastFoodList</div>;
};

export default FastFoodList;
