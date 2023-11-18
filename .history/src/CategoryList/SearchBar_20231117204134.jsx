import { SearchOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import React, { useState } from "react";

const SearchBar = ({ searchItems }) => {
  //states
  const [value, setValue] = useState("");
  //hooks
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      onFinish={(e) => {
        e.preventDefault();
        searchItems(value);
      }}
    >
      <div className="flex items-center justify-start border border-orange-600 px-2 rounded-md ">
        <SearchOutlined className="text-orange-600" />
        <Input
          className="border-none w-full"
          placeholder="جستجوی فست فود..."
          type=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </Form>
  );
};

export default SearchBar;
