import React from "react";
import { useTranslation } from "react-i18next";

// import Header from "../../components/Header";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <Header text="Home page" /> */}
      <p>
        {t("Here will be the main view.")}
      </p>
    </>
  );
};

export default Home;
