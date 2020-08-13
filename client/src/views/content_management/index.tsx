import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { StateCombinedFromReducers } from "../../types";

const ContentManagement: React.FC = () => {
  const { t } = useTranslation();
  const authentication = useSelector((state: StateCombinedFromReducers) => {
    return state.authenticationReducer.authentication;
  });
  if (!authentication || !authentication.user.roles.includes("admin")) {
    return t("Content management is only available to admins.");
  }

  return (
    <div id="contentManagement">
      TODO: ContentManagement
    </div>
  );
};

export default ContentManagement;
