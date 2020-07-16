import React from "react";

import Header from "../../components/Header";
import Face from "../../components/Face";

const Landing: React.FC = () => {
  return (
    <div className="view">
      <Header text="Landing view." />
      <div id="landingFace"><Face /></div>
    </div>
  );
};

export default Landing;
