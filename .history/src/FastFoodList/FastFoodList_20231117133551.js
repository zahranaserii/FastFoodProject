import React, { useEffect } from "react";
import axios from "../axios";

const FastFoodList = () => {
  //stest
  //   const [loading, setLoading] = useState(false);
  // const [foodList setfoodList] = useState([]);
  //functions
  const getFoodList = async (categoryId = null) => {
    // setLoading(true)
    await axios
      .get(`/FastFood/list/${categoryId ? "categoryId=" + categoryId : ""}`)
      .then((res) => console.log(res.data));
  };
  //effects
  useEffect(() => {
    getFoodList();
  }, []);
  return <div>FastFoodList</div>;
};

export default FastFoodList;
