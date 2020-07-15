import React from "react";

import Face from "../components/Face";
import Header from "../components/Header";

const Landing: React.FC = () => {
  return (
    <div className="centered">
      <Header text="Landing view." scale={1} />
      <div className="Face">
        <Face />
      </div>
    </div>
  );
};

export default Landing;
