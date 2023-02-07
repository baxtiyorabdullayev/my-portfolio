import "./App.css";
import { Route, Routes } from "react-router-dom";
import NeoNavbar from "./components/NeoNavbar/NeoNavbar";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/About/AboutMe";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <NeoNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
