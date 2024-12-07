import SideBar from "./SideBar";
import FirstView from "./FirstView";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contacts";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <div>
      <SideBar />
      <FirstView />
      <AboutMe />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
