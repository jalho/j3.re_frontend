import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.scss";
import AppLoader from "./AppLoader";
import Landing from "./views/landing";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Landing />}>
      <BrowserRouter>
        <AppLoader />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
