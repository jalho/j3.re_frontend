import React from "react";

import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div className="centered">
      <Header text={`w: ${window.innerWidth}, h: ${window.innerHeight}`} scale={1} />
      <p>Ääkköset.</p>
    </div>
  );
};

export default Home;
