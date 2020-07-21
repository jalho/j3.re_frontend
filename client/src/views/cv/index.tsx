import React from "react";
import { useTranslation } from "react-i18next";

// import Header from "../../components/Header";

const CV: React.FC = () => {
const { t } = useTranslation();

  return (
    <>
      {/* <Header text="CV" /> */}
      <p>
        {t("Here's going to be some sort of CV.")}
      </p>
    </>
  );
};

export default CV;
