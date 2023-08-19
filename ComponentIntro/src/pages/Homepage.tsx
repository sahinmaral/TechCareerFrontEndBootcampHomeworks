import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { ProjectHeader } from "../components/ProjectHeader";
import { ProjectList } from "../components/ProjectList";

export const Homepage: React.FC = () => {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>

      <ProjectHeader />
      <ProjectList />

      <About />

      <Contact />

      <div className="w3-container">
        <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image" style={{width:"100%"}} />
    </div>
    </div>
  );
};
