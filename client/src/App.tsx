import { lazy } from "react";

const App = lazy(() => {
  return Promise.all([
    import("./home/index"),
    new Promise(resolve => setTimeout(resolve, 3500))
  ])
  .then(([moduleExports]) => moduleExports);
});


export default App;
