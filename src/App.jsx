import "./App.css";
import { Route, Routes } from "react-router-dom";
import NeoNavbar from "./components/NeoNavbar/NeoNavbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="app">
      <NeoNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
