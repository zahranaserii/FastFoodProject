import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-start border border-orange-600 px-2 rounded-md ">
      <SearchOutlined className="relative" />
      <Input className="border-none" placeholder="جستجوی فست فود..." />
    </div>
  );
};

export default SearchBar;
