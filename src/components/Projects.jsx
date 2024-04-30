
import ProjectItem from "./ProjectItem"

import {Cloudinary} from "@cloudinary/url-gen";


const Projects = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'di8wv9xue'}});

  const hyperMegaRed = cld.image('hyper-mega-red_vwl4uw'); 
  const jap = cld.image('e-commerce_zxw4fp'); 
  const drivers = cld.image('drivers-photo_kl6cae'); 
  const RickAndMorty = cld.image('rickandMorty'); 
  const finance = cld.image('Finance-photo')


    return (
        <div id="projects" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[var(--main-text)] mb-12">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-14 ">
        <ProjectItem   img={hyperMegaRed} title='Hyper Mega Red' details={'E-Commerce with stock control, online catalog, payment gateway with Mercado Pago for sales and shipping, user management with JWT token system and third-party authentication, and a service management system for repairs.'}  link={'https://pf-henry-sepia.vercel.app'}/>
        <ProjectItem  img={jap} title='E-commerce JAP'  details={'The project includes session registration, JSON Web Token (JWT) authentication, organization and presentation of products, product cart. Bootstrap and CSS were used for design, and Node.js for the back-end. '} link={'https://vixfr.github.io/workspace-2.0/login.html'}/>
        <ProjectItem img={finance} title='Edge Leaders' details={'Finance website crafted with HTML and pure CSS for styles and JavaScript, consist in a landing page and a multitude of informative sections. Integrates responsive design including media queries and intuitive interface. '} link={'https://edgeleaders.netlify.app/'}/>
        <ProjectItem  img={drivers} title='Drivers App'  details={'Developed with Express, PostgreSQL, React, and Jest to display detailed information about Formula 1 drivers. The application includes pagination, filtering and sorting options, and a form with validations to add new drivers. '} link={'https://drivers-mariangel.vercel.app'}/>
        <ProjectItem  img={RickAndMorty} title='Rick And Morty App'  details={'Integration of an external Rick and Morty API. React was used for the front-end, Express for the back-end and PosgreSQL to store user and favorite character data using Sequelize. '}  credentials={'Credentials  User:rondanmariangel@gmail.com Password: Pepito22'} link={'https://rick-and-morty-mariangel-rondan.vercel.app '}/>
      </div>
      
      
        </div>
        
    )
}


export default Projects