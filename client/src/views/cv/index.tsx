import React from "react";
import { useTranslation } from "react-i18next";

const CV: React.FC = () => {
const { t } = useTranslation();

  return (
    <>
      <p>
        {t("Here's going to be some sort of CV.")}
      </p>
    </>
  );
};

export default CV;
