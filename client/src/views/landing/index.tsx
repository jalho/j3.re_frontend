import React from "react";

import Header from "../../components/Header";
import Face from "../../components/Face";

const Landing: React.FC = () => {
  return (
    <div className="landingContainer">
      <div className="landingContent">
        <Header text="j3.re" />
        <div id="landingFace"><Face /></div>
        <em style={{ marginTop: "1.5em" }}>Work in progress.</em>
      </div>
    </div>
  );
};

export default Landing;
