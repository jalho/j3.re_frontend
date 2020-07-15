import React from "react";

import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div className="centered">
      <Header text="Home page." />
      <p>Ääkköset.</p>
    </div>
  );
};

export default Home;
