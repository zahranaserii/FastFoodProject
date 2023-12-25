import { ConfigProvider } from "antd";
import fa from "antd/es/locale/fa_IR";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

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
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
