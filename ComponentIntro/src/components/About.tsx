import React from "react";
import Employee from "../class/Employee";

export const About: React.FC = () => {
  const [employees] = React.useState<Employee[]>([
    new Employee(
      "John Doe",
      "CEO & Founder",
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      "/w3images/team2.jpg"
    ),
    new Employee(
      "Jane Doe",
      "Architect",
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      "/w3images/team1.jpg"
    ),
    new Employee(
      "Mike Ross",
      "Architect",
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      "/w3images/team3.jpg"
    ),
    new Employee(
      "Dan Star",
      "Architect",
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      "/w3images/team4.jpg"
    ),
  ]);

  return (
    <React.Fragment>
      <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      <div className="w3-row-padding w3-grayscale">
        {employees.map((employee) => {
          const splittedName = employee.name.split(" ");

          const altTagForImage =
            splittedName.length === 2
              ? splittedName[0]
                  .toLocaleLowerCase()
                  .concat("_")
                  .concat(splittedName[1].toLocaleLowerCase())
              : splittedName[0]
                  .toLocaleLowerCase()
                  .concat("_")
                  .concat(splittedName[1].toLocaleLowerCase())
                  .concat("_")
                  .concat(splittedName[2].toLocaleLowerCase());

          return (
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img
                src={`https://www.w3schools.com/${employee.imageUrl}`}
                alt={altTagForImage}
                style={{ width: "100%" }}
              />
              <h3>John Doe</h3>
              <p className="w3-opacity">{employee.profession}</p>
              <p>
                {employee.aboutCompany}
              </p>
              <p>
                <button className="w3-button w3-light-grey w3-block">
                  Contact
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
