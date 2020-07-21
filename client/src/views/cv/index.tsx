import React from "react";
import { useTranslation } from "react-i18next";

import UTU from "../../components/UTU";
import Header from "../../components/Header";

const CV: React.FC = () => {
const { t } = useTranslation();

  return (
    <>
      <div id="CV_container" className="view">
        <div>
          <Header text={t("Education")} />
          <div className="CV_item">
            <div id="CV_UTU">
              <UTU />
            </div>
            <em id="notGraduated">
              {t("not yet graduated")}
            </em>
            <ul>
              <li>{t("major in computer science")}</li>
              <li>{t("minor in mathematics")}</li>
              <li>{t("start year 2019")}</li>
            </ul>
          </div>
        </div>

        <div>
          <Header text={t("Work experience")} />
          <div className="CV_item">
            {t("None yet relevant to the field.")}
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
