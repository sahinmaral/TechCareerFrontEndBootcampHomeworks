import React from "react";
import Project from "../class/Project";

export const ProjectList: React.FC = () => {

  const [projects] = React.useState<Project[]>([
    new Project("Summary", "/w3images/house5.jpg"),
    new Project("Brick House", "/w3images/house2.jpg"),
    new Project("Renovated", "/w3images/house3.jpg"),
    new Project("Barn House", "/w3images/house4.jpg"),

    new Project("Summary", "/w3images/house2.jpg"),
    new Project("Brick House", "/w3images/house5.jpg"),
    new Project("Renovated", "/w3images/house4.jpg"),
    new Project("Barn House", "/w3images/house3.jpg"),
  ]);

  const [limit] = React.useState(projects.length / 4);

  const renderDividedProjects = () => {
    let projectList: JSX.Element[] = [];

    for (let i = 1; i <= limit; i++) {
      projectList.push(
        <div className="w3-row-padding">
          {projects.slice(4 * (i - 1), 4 * i).map((project) => {
            return (
              <div className="w3-col l3 m6 w3-margin-bottom">
                <div className="w3-display-container">
                  <div className="w3-display-topleft w3-black w3-padding">
                    {project.name}
                  </div>
                  <img
                    src={`https://www.w3schools.com/${project.imageUrl}`}
                    alt="House"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return projectList
  };

  return <React.Fragment>{renderDividedProjects()}</React.Fragment>;
};
