import SideBar from "./components/SideBar";
import FirstView from "./components/FirstView";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
function App() {
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

export default App;
