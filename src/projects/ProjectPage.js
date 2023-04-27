import { useEffect } from "react";
import { useState } from "react";
import { projectPageData } from "../assets/db";
import Card from "../ui/Card";
import Project from "./Project";

const ProjectPage = () => {
  const { intro, ProjectsData } = projectPageData;
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    const cache = [];
    projectData.map((project) => cache.push(project));
    setProjectData(cache);
  }, []);
  return (
    <Card classNmae="page">
      <h1>{intro}</h1>
      {ProjectsData.map((data, idx) => {
        return <Project key={idx} img={data.image} name={data.name} desc={data.desc} tech={data.tech} git={data.git} />;
      })}
    </Card>
  );
};

export default ProjectPage;
