import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectDemo from "./components/ProjectDemo";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-demo" element={<ProjectDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
