import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center m-auto">
      <Spin size="large" style={{ borderColor: "red" }} />
    </div>
  );
};

export default Loading;
