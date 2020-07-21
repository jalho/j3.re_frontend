import React from "react";
import { useTranslation } from "react-i18next";

// import Header from "../../components/Header";

const Portfiolio: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <Header text="Portfolio" /> */}
      <p>
        {t("Here will be summaries of things I have created.")}
      </p>
    </>
  );
};

export default Portfiolio;
