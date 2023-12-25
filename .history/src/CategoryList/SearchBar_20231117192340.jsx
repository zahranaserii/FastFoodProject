import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-start border border-orange-600 px-2 rounded-md ">
      <SearchOutlined className="relative" />
      <input className="border-none w-full" placeholder="جستجوی فست فود..." />
    </div>
  );
};

export default SearchBar;
