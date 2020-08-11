import React from "react";
// import { useTranslation } from "react-i18next";

import Card from "../../components/Card";

const Portfiolio: React.FC = () => {
  // const { t } = useTranslation();

  const dummyData = [
    {
      title: "Title One",
      infoText: "Info text one.",
      items: ["1111111111", "aaaaaaaaaaa", "AAAAAAAAAA"]
    },
    {
      title: "Title Two",
      infoText: "Info text two.",
      items: ["22222222222", "bbbbbbbb", "BBBBBBBBBBBBBBBBBB"]
    },
    {
      title: "Title Three",
      infoText: "Info text three.",
      items: ["CCCCCCCCCCC", "33333333333", "cccccccccccccccccccc"]
    },
    {
      title: "Title Four",
      infoText: "Info text four.",
      items: ["DDDDDDDDDDDDDDDD", "dddddddddddddddd", "444444444"]
    },
  ];

  return (
    <div id="portfolio">
      {dummyData.map((data, idx) => (<Card key={idx} infoText={data.infoText} items={data.items}/>))}
    </div>
  );
};

export default Portfiolio;
