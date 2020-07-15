import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import Landing from "./landing/index";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Landing />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
