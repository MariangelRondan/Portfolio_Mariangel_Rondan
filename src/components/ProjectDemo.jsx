import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDemo = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });
  const bg = cld.image("-water").toURL();
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div>No project data available.</div>;
  }

  const backHome = () => {
    navigate("/");
  };

  const { img, title, details, link } = state;

  const imgPublic = cld.image(img);
  console.log("Received Public ID:", imgPublic);

  return (
    <div className="project-demo">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="flex items-center text-lg text-[var(--blanquito)] h-10 gap-x-3 justify-end"
      >
        <a href="">Projects</a>
        <a href="">Projects</a>
        <a href="">Projects</a>
        <a onClick={backHome} className="mr-4">
          Back home
        </a>
      </div>
      <h1>{title}</h1>
      <AdvancedImage className="w-80" cldImg={imgPublic} alt={title} />
      <p>{details}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
    </div>
  );
};

export default ProjectDemo;
