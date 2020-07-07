import React from "react";
import "./App.scss";
import Face from "./Face";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Face">
          <Face heightInEm={10} />
        </div>
        <p className={"Wip"}>Kesken...</p>
      </header>
    </div>
  );
};

export default App;
