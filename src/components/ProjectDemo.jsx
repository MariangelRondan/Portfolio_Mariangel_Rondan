import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useLocation, useNavigate } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiFigma,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiPostgresql,
  SiAngular,
  SiTailwindcss,
  SiAtlassian,
} from "react-icons/si";
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

  const { img, title, details, link, technologies } = state;

  const imgPublic = cld.image(img);
  console.log("Received Public ID:", imgPublic);
  return (
    <div className="project-demo">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="w-full flex items-center text-lg text-[var(--blanquito)] h-10 gap-x-3 justify-end"
      >
        <a href="">Projects</a>
        <a href="">Projects</a>
        <a href="">Projects</a>
        <a onClick={backHome} className="mr-4">
          Back home
        </a>
      </div>
      <div class="relative bg-[var(--blanquito)] mt-10">
        <div class=" grid w-full lg:grid-cols-2">
          <div class="mt-8 ">
            <h2 class="sr-only">Images</h2>

            <div class="grid grid-cols-1 lg:grid-cols-2  lg:gap-8">
              <AdvancedImage
                class="rounded-lg "
                cldImg={imgPublic}
                alt={title}
              />
              <AdvancedImage
                class="hidden rounded-lg lg:block"
                cldImg={imgPublic}
                alt={title}
              />
              <AdvancedImage
                class="hidden rounded-lg lg:block"
                cldImg={imgPublic}
                alt={title}
              />
              <AdvancedImage
                class="hidden rounded-lg lg:block"
                cldImg={imgPublic}
                alt={title}
              />
            </div>
          </div>

          <div class="px-6 lg:col-start-2 lg:px-20 ">
            <div class=" max-w-2xl lg:max-w-2xl">
              <h2 class="text-base/8 font-semibold text-indigo-600">Project</h2>
              <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-[var(--dark)] sm:text-5xl">
                {title}
              </p>
              <p class="mt-6 text-lg/8 text-[var(--dark)]">{details}</p>
            </div>
            {/* Íconos de Tecnologías */}
            <div className="row-start-2 flex space-x-8 mt-20 mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  {tech === "React" && (
                    <FaReact className="text-blue-500 text-3xl" />
                  )}
                  {tech === "Node.js" && (
                    <FaNodeJs className="text-green-500 text-3xl" />
                  )}
                  {tech === "CSS" && (
                    <SiCss3 className="text-blue-400 text-3xl" />
                  )}
                  {tech === "Figma" && (
                    <SiFigma className="text-purple-500 text-3xl" />
                  )}
                  {tech === "Docker" && (
                    <SiDocker className="text-blue-600 text-3xl" />
                  )}
                  {tech === "GitHub" && (
                    <SiGithub className="text-gray-800 text-3xl" />
                  )}
                  {tech === "HTML" && (
                    <SiHtml5 className="text-orange-500 text-3xl" />
                  )}
                  {tech === "JavaScript" && (
                    <SiJavascript className="text-yellow-500 text-3xl" />
                  )}
                  {tech === "MongoDB" && (
                    <SiMongodb className="text-green-500 text-3xl" />
                  )}
                  {tech === "PostgreSQL" && (
                    <SiPostgresql className="text-blue-500 text-3xl" />
                  )}
                  {tech === "Angular" && (
                    <SiAngular className="text-red-500 text-3xl" />
                  )}
                  {tech === "Tailwind CSS" && (
                    <SiTailwindcss className="text-blue-300 text-3xl" />
                  )}
                  {tech === "Jira" && (
                    <SiAtlassian className="text-blue-400 text-3xl" />
                  )}
                  <span className="text-sm mt-2 text-[var(--dark)]">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <dl className="my-10 grid max-w-xl grid-cols-1 gap-8 md:mt-14 sm:grid-cols-2 col-start-1 lg:ml-20">
              <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm/6 text-gray-600">
                  Monthly Active Users
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[var(--dark)]">
                  1,200+
                </dd>
              </div>
              <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm/6 text-gray-600">Available Tours</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[var(--dark)]">
                  50+
                </dd>
              </div>
              <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm/6 text-gray-600">Avg. Booking Time</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[var(--dark)]">
                  2 min
                </dd>
              </div>
              <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                <dt className="text-sm/6 text-gray-600">Registered Agents</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[var(--dark)]">
                  15+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemo;
