import React from "react";
import Face from "../components/Face";
import "./styles.scss";

const Landing: React.FC = () => {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <div className="Face"><Face /></div>
        <p className={"Wip"}>Kesken...</p>
      </header>
    </div>
  );
};

export default Landing;
