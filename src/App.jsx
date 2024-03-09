import SideBar from './components/SideBar'
import FirstView from './components/FirstView'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contacts'
import Skills from './components/Skills'
function App() {

    return(
        <div className='bg-[#EDBB99]'>
            <SideBar/>
            <FirstView/>
            <Work/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default App