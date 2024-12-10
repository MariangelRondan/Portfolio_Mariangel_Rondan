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
    <div id="projects" className="m-auto py-16">
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
            "A comprehensive, fully responsive tourism self-management platform for Bariloche, where customers can explore and book tours at their desired dates and times. Travel agents have access to a dedicated dashboard to manage all orders, updating the status once payments are confirmed or canceled. The platform includes secure password hashing managed from the database, JWT authentication with cookies, and is deployed on MongoDB Atlas with an Express backend in Render and Angular 17 frontend in Vercel. It also features image management through Cloudinary, lazy loading for enhanced performance, Nodemailer integration for notifying travel agents of new orders, and role-based route protection to ensure secure access control. "
          }
          technologies={[
            "Angular",
            "Node.js",
            "Figma",
            "CSS",
            "HTML",
            "MongoDB",
            "Tailwind CSS",
          ]}
          link={"https://drivers-mariangel.vercel.app"}
        />
        <ProjectItem
          img={edgeleaders.publicID}
          title="Edge Leaders"
          details={
            "Finance website crafted with HTML and pure CSS for styles and JavaScript, consist in a landing page and a multitude of informative sections. Integrates responsive design including media queries and intuitive interface. "
          }
          link={"https://edgeleaders.netlify.app/"}
          technologies={["CSS", "HTML", "JavaScript"]}
        />
        <ProjectItem
          img={hyperMegaRed.publicID}
          title="Hyper Mega Red"
          details={
            "The application is developed using technologies such as ReactJs, Vite, Material UI, JavaScript, NodeJs, Express, and Postgres. The application offers a complete e-commerce system with key features, including stock control, online catalog, payment gateway with Mercado Pago for product sales and shipping. Additionally, it implements a robust user management system that uses JWT tokens for authentication and authorization, providing a secure and personalized experience for each user.One of the main contributions of the project is the service management system for technical repairs. This system addresses the challenge of having separate systems for the database, stock, support, and the online store by integrating all these functions into a single platform. Regarding the backend, the implementation of the user management system, including creation, authentication, and authorization, stands out, using Express.js and various complementary technologies and libraries. On the frontend, Material Design was used for creating some components, and a user persistence system was implemented using both localStorage and cookies, offering flexibility to the user in choosing their preferred option. Additionally, user information was integrated into the global state developed in Redux, enhancing efficiency and consistency in data management throughout the application. In summary, this final project provides a complete and integrated solution for companies operating in the online sale of computer products and technical support services. The combination of an advanced e-commerce platform and a technical service management system makes the application a valuable and efficient tool to streamline processes and enhance the experience for both users and businesses"
          }
          technologies={["React", "PostgreSQL", "CSS", "HTML", "JavaScript"]}
          link={"https://pf-henry-sepia.vercel.app"}
        />
        <ProjectItem
          img={elPortal.publicID}
          title="El Portal News"
          details={
            'Developed a web application using pure JavaScript, HTML, and CSS. The application features a homepage with a news grid, detailed news pages accessible by clicking on individual articles, and an "About Us" section.'
          }
          technologies={["CSS", "HTML", "JavaScript"]}
          link={"https://elportal-news.netlify.app/"}
        />
        <ProjectItem
          img={mantra.publicID}
          title="E-commerce JAP"
          details={
            "The project includes session registration, JSON Web Token (JWT) authentication, organization and presentation of products, product cart. Bootstrap and CSS were used for design, and Node.js for the back-end."
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
