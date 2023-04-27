import "./project.css";
import Card from "../ui/Card";

const Project = ({ img, name, desc, tech, git }) => {
  console.log({ img, name, desc, tech, git });
  return (
    <Card className="project">
      <Card className="card">
        <img src={img} alt="logo" />
        <h3>{name}</h3>
        <button>
          <a href={git}>{git}</a>
        </button>
        <ul>
          <li>Desc : {desc}</li>
          <li>Tech : {tech}</li>
        </ul>
      </Card>
    </Card>
  );
};
export default Project;
