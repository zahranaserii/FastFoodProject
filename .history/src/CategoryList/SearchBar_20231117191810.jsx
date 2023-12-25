import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-start">
      <SearchOutlined className="relative" />
      <Input className="" placeholder="جستجوی فست فود..." />
    </div>
  );
};

export default SearchBar;
