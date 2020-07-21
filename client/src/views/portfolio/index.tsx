import React from "react";
import { useTranslation } from "react-i18next";

const Portfiolio: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        {t("Here will be summaries of things I have created.")}
      </p>
    </>
  );
};

export default Portfiolio;
