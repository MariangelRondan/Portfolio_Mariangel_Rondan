import ProjectItem from "./ProjectItem";

import { Cloudinary } from "@cloudinary/url-gen";
import hyperMegaRed from "../assets/hyper-full.png";
import elPortal from "../assets/el-portal-full.png";
import mantra from "../assets/mantra-full.png";
import hotel from "../assets/hotel-full.png";
import vivencias from "../assets/vivencias-full.png";
import edgeleaders from "../assets/edge-full.png";

const Projects = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });

  return (
    <div id="projects" className="m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl text-center  md:text-6xl  font-bold  text-[var(--dark)] mb-20">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-y-10 gap-x-12 ">
        <ProjectItem
          img={vivencias}
          title="Vivencias Travel"
          details={
            "Developed with Express, PostgreSQL, React, and Jest to display detailed information about Formula 1 drivers. The application includes pagination, filtering and sorting options, and a form with validations to add new drivers. "
          }
          link={"https://drivers-mariangel.vercel.app"}
        />
        <ProjectItem
          img={edgeleaders}
          title="Edge Leaders"
          details={
            "Finance website crafted with HTML and pure CSS for styles and JavaScript, consist in a landing page and a multitude of informative sections. Integrates responsive design including media queries and intuitive interface. "
          }
          link={"https://edgeleaders.netlify.app/"}
        />
        <ProjectItem
          img={hyperMegaRed}
          title="Hyper Mega Red"
          details={
            "E-Commerce with stock control, online catalog, payment gateway with Mercado Pago for sales and shipping, user management with JWT token system and third-party authentication, and a service management system for repairs."
          }
          link={"https://pf-henry-sepia.vercel.app"}
        />
        <ProjectItem
          img={elPortal}
          title="El Portal News"
          details={
            'Developed a web application using pure JavaScript, HTML, and CSS. The application features a homepage with a news grid, detailed news pages accessible by clicking on individual articles, and an "About Us" section.'
          }
          link={"https://elportal-news.netlify.app/"}
        />
        <ProjectItem
          img={mantra}
          title="E-commerce JAP"
          details={
            "The project includes session registration, JSON Web Token (JWT) authentication, organization and presentation of products, product cart. Bootstrap and CSS were used for design, and Node.js for the back-end. "
          }
          link={"https://vixfr.github.io/workspace-2.0/login.html"}
        />
        <ProjectItem
          img={hotel}
          title="Task Manager"
          details={
            "Developed a SPA using Angular 17, featuring task organization with CRUD operations. These operations are managed through frontend services."
          }
          link={"https://tasksmanager-mariangelrondan.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
