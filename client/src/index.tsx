import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.scss";
import App from "./App";
import Landing from "./views/landing";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Landing />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
