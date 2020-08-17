import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        {t("Here will be the main view.")}
      </p>
    </>
  );
};

export default Home;
