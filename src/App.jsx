import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="bg-[#121212] w-full h-screen flex justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
// #F5E1DA
// #1E293B
