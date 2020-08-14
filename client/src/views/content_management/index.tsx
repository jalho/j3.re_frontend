import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { StateCombinedFromReducers } from "../../types";

const ContentManagement: React.FC = () => {
  const { t } = useTranslation();
  const authentication = useSelector((state: StateCombinedFromReducers) => {
    return state.authenticationReducer.authentication;
  });

  // non authorized view
  if (!authentication || !authentication.user.roles.includes("admin")) {
    return (
      <div id="contentManagement">
        <p>{t("Content management is only available to admins.")}</p>
      </div>
    );
  }

  // authorized view
  return (
    <div id="contentManagement">
      {t("Here will be content management tools.")}
    </div>
  );
};

export default ContentManagement;
