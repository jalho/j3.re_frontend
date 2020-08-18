import React from "react";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import { GET_MY_IP } from "../../utils/graphql";
import Card from "../../components/Card";
import { IPLookupPayload } from "../../types";

const CheckMyIP: React.FC = () => {
  const { data, loading, error } = useQuery(GET_MY_IP);
  const { t } = useTranslation();

  let IPData: IPLookupPayload|undefined = undefined;
  if (data) IPData = data.myIP;

  return (
    <div id="checkMyIP">
      {
        loading && <p>{t("The server seems to be sleeping. Wait a moment, waking it up...")}</p>
      }
      {IPData &&
        <Card
          items={[
              <code key={2}>{IPData.ip}</code>,
              IPData.proxy ? <span>{t("proxy address")}</span> : <></>,
              IPData.mobile ? <span>{t("mobile address")}</span> : <></>,
              IPData.city ? <span>{IPData.city}</span> : <></>,
              IPData.isp ? <span>{IPData.isp}</span> : <></>,
              IPData.flagURL ? <img src={IPData.flagURL} alt={"Flag of a country"} /> : <></>
          ]}
          infoText={t("IP address")}
        />
      }
      {
        error && <p>{t("Server is not operational.")}</p> 
      }
    </div>
  );
};

export default CheckMyIP;
