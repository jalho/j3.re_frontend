import React from "react";

import Header from "../components/Header";
 import { viewportRatio } from "../constants";

const Home: React.FC = () => {
  return (
    <div className="centered">
      <Header text={`${viewportRatio.toFixed(2)}`} ratio={viewportRatio} />
      <p>viewportRatio</p>
    </div>
  );
};

export default Home;
