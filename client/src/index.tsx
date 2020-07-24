import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import "./styles/main.scss";
import AppLoader from "./AppLoader";
import Landing from "./views/landing";

import store from "./state/store";
import "./i18n"; // internationalization

import { getBackendURI } from "./utils/helpers";

const apolloClient = new ApolloClient({
  uri: getBackendURI(),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Landing />}>
        <ApolloProvider client={apolloClient}>
          <BrowserRouter>
            <AppLoader />
          </BrowserRouter>
        </ApolloProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
