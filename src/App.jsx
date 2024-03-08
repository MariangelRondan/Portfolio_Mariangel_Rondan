import SideBar from './components/SideBar'
import FirstView from './components/FirstView'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contacts'
function App() {

    return(
        <div className='bg-[#EDBB99]'>
            <SideBar/>
            <FirstView/>
            <Work/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default App