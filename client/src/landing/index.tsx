import React from "react";
import Face from "../components/Face";

const Landing: React.FC = () => {
  return (
    <div className="centered">
      <header>Landing view.</header>
      <div className="Face">
        <Face />
      </div>
    </div>
  );
};

export default Landing;
