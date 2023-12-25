import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <Input placeholder="جستجوی فست فود..." />
      <SearchOutlined />
    </div>
  );
};

export default SearchBar;
