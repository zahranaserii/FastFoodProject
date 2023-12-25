import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center m-auto">
      <Spin size="large" className="text-red-400" />
    </div>
  );
};

export default Loading;
