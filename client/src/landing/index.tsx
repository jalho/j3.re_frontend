import React from "react";
import Face from "../components/Face";
import "./styles.scss";

const Landing: React.FC = () => {
  return (
    <div className="Landing">
      <header>Landing view.</header>
      <div className="Face"><Face /></div>
    </div>
  );
};

export default Landing;
