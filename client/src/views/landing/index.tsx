import React from "react";

import Header from "../../components/Header";
import Face from "../../components/Face";

const Landing: React.FC = () => {
  // TODO: Center the landing view somehow to the middle of the viewport!
  return (
    <div className="landingContainer">
      <div className="landingContent">
        <Header text="j3.re" />
        <div id="landingFace"><Face /></div>
      </div>
    </div>
  );
};

export default Landing;
