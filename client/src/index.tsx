import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/main.scss";
import AppLoader from "./AppLoader";
import Landing from "./views/landing";

import store from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Landing />}>
        <BrowserRouter>
          <AppLoader />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
