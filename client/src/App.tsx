import React from "react";
import "./App.scss";
import Face from "./Face";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Face />
        <p className={"Wip"}>Work in progress...</p>
      </header>
    </div>
  );
};

export default App;
