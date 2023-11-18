import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={fa}
      direction="rtl"
      theme={{
        token: {
          fontFamily: "iranyekan",
          colorPrimary: "#007141",
          fontSizeBase: 12,
          borderRadius: 10,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
