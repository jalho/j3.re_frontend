import React from "react";

import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <div className="view">
      <Header text={"Home view."} />
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design.</p>
    </div>
  );
};

export default Home;
