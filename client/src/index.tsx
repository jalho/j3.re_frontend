import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./styles/main.scss";
import AppLoader from "./AppLoader";
import Landing from "./views/landing";

import store from "./state/store";
import "./i18n"; // internationalization

import { getBackendURI } from "./utils/helpers";

const httpLink = createHttpLink({
  uri: getBackendURI()
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

// TODO: Get token from localStorage in an auth link. Example: https://www.apollographql.com/docs/react/networking/authentication/#header.
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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
