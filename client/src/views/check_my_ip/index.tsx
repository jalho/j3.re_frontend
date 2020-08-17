import React from "react";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import { GET_MY_IP } from "../../utils/graphql";
import Card from "../../components/Card";

const CheckMyIP: React.FC = () => {
  const { data } = useQuery(GET_MY_IP);
  const { t } = useTranslation();

  return (
    <div id="checkMyIP">
      {data &&
        <Card items={
          [
            <p key={1}>{t("REQ_ARRIVE_MESSAGE")}</p>,
            <code key={2}>{data.myIP}</code>
          ]
        }/>
      }
    </div>
  );
};

export default CheckMyIP;
