import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <Input placeholder="جستجوی فست فود..." />
      <SearchOutlined />
    </div>
  );
};

export default SearchBar;
