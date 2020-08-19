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
  const authStringInStorage = localStorage.getItem("authentication");
  const authentication = authStringInStorage ? JSON.parse(authStringInStorage) : null;
  const token = authentication && authentication.token ? authentication.token : null;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // replace old Approved notes' data in cache with new
          approvedNotes: {
            merge(_existing, incoming): Array<unknown> {
              return incoming;
            },
          },
        },
      },
    },
  })
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
