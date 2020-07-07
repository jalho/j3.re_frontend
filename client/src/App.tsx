import React from "react";
import "./App.scss";
import Landing from "./landing/index";

const App: React.FC = () => {
  // TODO: Use Suspense to show Landing while App is getting ready.
  return (
    <div className="App">
      <Landing />
    </div>
  );
};

export default App;
