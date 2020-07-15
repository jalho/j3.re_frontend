import React from "react";

import Face from "../components/Face";
import Header from "../components/Header";
import { viewportRatio } from "../constants";

const Landing: React.FC = () => {
  return (
    <div className="centered">
      <Header text="Landing view." ratio={viewportRatio} />
      <div className="Face">
        <Face />
      </div>
    </div>
  );
};

export default Landing;
