import React from "react";
import { useQuery } from "@apollo/client";
// import { useTranslation } from "react-i18next";

import { Project } from "../../types";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { GET_ALL_PROJECTS } from "../../utils/graphql";

const Portfiolio: React.FC = () => {
  // const { t } = useTranslation();
  const { data } = useQuery(GET_ALL_PROJECTS);

  return <div id="portfolio">
    {data && data.projects.map((project: Project, idx: number) => (
      <div key={idx} className="item">
        <Header text={project.name}/>
        <Card
          items={[
            project.description ? project.description: "",
            // project.repositories ? project.repositories.toString(): "",
            project.startTime ? `Started in ${project.startTime.toLowerCase()}.`: "",
            project.technologies ? `Used technologies: ${project.technologies.join(", ")}.`: ""
          ]}
          infoText={project.categories ? project.categories.join(", ").toLowerCase() : ""}
        />
      </div>
    ))}
  </div>;
};

export default Portfiolio;
