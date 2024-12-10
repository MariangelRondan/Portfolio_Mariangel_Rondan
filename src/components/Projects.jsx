import ProjectItem from "./ProjectItem";

import { Cloudinary } from "@cloudinary/url-gen";

const Projects = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });
  const hyperMegaRed = cld.image("hyperMegaRed");
  const elPortal = cld.image("elPortal");
  const mantra = cld.image("mantra");
  const bg = cld.image("water").toURL();
  const hotel = cld.image("hotel");
  const vivencias = cld.image("vivencias");
  const edgeleaders = cld.image("edgeleaders");

  return (
    <div id="projects" className="m-auto  py-16">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-cover bg-center "
      >
        <h1 className="text-4xl text-center text-[var(--blanquito)]  md:text-6xl font-bold py-5">
          Projects
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-y-10 gap-x-12 mt-12 md:mt-28">
        <ProjectItem
          img={vivencias.publicID}
          title="Vivencias Travel"
          details={
            "Developed with Express, PostgreSQL, React, and Jest to display detailed information about Formula 1 drivers. The application includes pagination, filtering and sorting options, and a form with validations to add new drivers. "
          }
          link={"https://drivers-mariangel.vercel.app"}
        />
        <ProjectItem
          img={edgeleaders.publicID}
          title="Edge Leaders"
          details={
            "Finance website crafted with HTML and pure CSS for styles and JavaScript, consist in a landing page and a multitude of informative sections. Integrates responsive design including media queries and intuitive interface. "
          }
          link={"https://edgeleaders.netlify.app/"}
        />
        <ProjectItem
          img={hyperMegaRed.publicID}
          title="Hyper Mega Red"
          details={
            "E-Commerce with stock control, online catalog, payment gateway with Mercado Pago for sales and shipping, user management with JWT token system and third-party authentication, and a service management system for repairs."
          }
          link={"https://pf-henry-sepia.vercel.app"}
        />
        <ProjectItem
          img={elPortal.publicID}
          title="El Portal News"
          details={
            'Developed a web application using pure JavaScript, HTML, and CSS. The application features a homepage with a news grid, detailed news pages accessible by clicking on individual articles, and an "About Us" section.'
          }
          link={"https://elportal-news.netlify.app/"}
        />
        <ProjectItem
          img={mantra.publicID}
          title="E-commerce JAP"
          details={
            "The project includes session registration, JSON Web Token (JWT) authentication, organization and presentation of products, product cart. Bootstrap and CSS were used for design, and Node.js for the back-end. "
          }
          link={"https://vixfr.github.io/workspace-2.0/login.html"}
        />
        <ProjectItem
          img={hotel.publicID}
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
