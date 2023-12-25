import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div>
        <Input />
        <SearchOutlined />
      </div>
    </div>
  );
};

export default SearchBar;
