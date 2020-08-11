import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import UTU from "../../components/UTU";
import Header from "../../components/Header";
import { increaseEggCounter } from "../../state/actionCreators";

const CV: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const eggCounter = (): void => {
    dispatch(increaseEggCounter());
  };

  return (
    <>
      <div id="CV_container" className="view">
        <div>
          <Header text={t("Education")} />
          <div className="CV_item" onClick={eggCounter}>
            <UTU language={i18n.language} />
            <em className="CV_item_info">
              {t("not yet graduated")}
            </em>
            <ul>
              <li>{t("major in computer science")}</li>
              <li>{t("minor in mathematics")}</li>
              <li>{t("degree level BSc")}</li>
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

        <div>
          <Header text={t("Spoken languages")} />
          <div className="CV_item">
            <em className="CV_item_info">
              {t("in order of fluency")}
            </em>
            <div id="spokenLanguages">
              <div className="spokenLanguage"><span>{t("Finnish")}</span><span className="CV_item_info">{t("native")}</span></div>
              <div className="spokenLanguage"><span>{t("English")}</span><span className="CV_item_info">{t("C1")}</span></div>
              <div className="spokenLanguage" id="Duolingo_joke"><span>{t("Swedish")}</span><span className="CV_item_info">{t("DUOLINGO JOKE")}</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
