import React from "react";
import Face from "../components/Face";

const Landing: React.FC = () => {
  return (
    <div className="centered">
      <text className="header">Landing view.</text>
      <div className="Face">
        <Face />
      </div>
    </div>
  );
};

export default Landing;
