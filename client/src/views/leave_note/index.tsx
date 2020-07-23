import React from "react";
import { useTranslation } from "react-i18next";

const LeaveNote: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {t("Here's going to be an option to leave a public note.")}
    </>
  );
};

export default LeaveNote;
