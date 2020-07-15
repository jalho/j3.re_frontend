import { lazy } from "react";

/* "React.lazy takes a function that must call a dynamic import().
This must return a Promise which resolves to a module with a
default export containing a React component." */
const App = lazy(() => {
  // bundle async operations; import home page & arbitrary minimum delay
  return Promise.all([
    // dynamically import home page
    import("./home/index"), // resolves with `Module`
    // minimum delay time of 2.5 secs
    new Promise((resolve) => setTimeout(resolve, 2500)) // resolves with `undefined`
  ])
  // when the bundle is ready, return the imported module
  .then((resolvedResults) => {
    return resolvedResults[0]; // the dynamically imported module, i.e. home page
  });
});


export default App;
