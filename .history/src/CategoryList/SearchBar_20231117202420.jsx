import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";

const SearchBar = () => {
  //states
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center justify-start border border-orange-600 px-2 rounded-md ">
      <SearchOutlined className="text-orange-600" />
      <Input
        className="border-none w-full"
        placeholder="جستجوی فست فود..."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
