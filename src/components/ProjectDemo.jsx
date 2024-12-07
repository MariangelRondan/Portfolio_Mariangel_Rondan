import { useLocation, useNavigate } from "react-router-dom";

const ProjectDemo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) {
    return <div>No project data available.</div>;
  }

  const backHome = () => {
    navigate("/");
  };

  const { img, title, details, link } = state;
  return (
    <div className="project-demo">
      <button onClick={backHome}>Back home</button>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <p>{details}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
    </div>
  );
};

export default ProjectDemo;
