import React from "react";
import { useTranslation } from "react-i18next";

import UTU from "../../components/UTU";
import Header from "../../components/Header";

const CV: React.FC = () => {
const { t } = useTranslation();

  return (
    <>
      <Header text={t("Education")} />

      <div className="CV_container">
        <div id="CV_UTU">
          <UTU />
        </div>

        <ul>
          <li>{t("major in computer science")}</li>
          <li>{t("minor in mathematics")}</li>
          <li>{t("start year 2019")}</li>
        </ul>
      </div>
    </>
  );
};

export default CV;
