import React from "react";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import { Project } from "../../types";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { GET_ALL_PROJECTS } from "../../utils/graphql";

const Portfiolio: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useQuery(GET_ALL_PROJECTS);

  // TODO: Add links to repositories somehow! Card component doesn't support it (yet).
  return <div id="portfolio">
    {data && data.projects.map((project: Project, idx: number) => (
      <div key={idx} className="item">
        <Header text={project.name}/>
        <Card
          items={[
            project.description ?
              project.description :
              "",
            project.startTime ?
              t("Started in ") + t(project.startTime.split(" ")[0].toLowerCase()) + ` ${project.startTime.split(" ")[1]}.` :
              "",
            project.technologies && project.technologies.length > 0 ?
              t("Used technologies") + `: ${project.technologies.join(", ")}.` :
              ""
          ]}
          infoText={project.categories ? project.categories.join(", ").toLowerCase() : ""}
        />
      </div>
    ))}
  </div>;
};

export default Portfiolio;
