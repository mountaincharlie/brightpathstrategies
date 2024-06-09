import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Approach from "./pages/Approach/Approach";
import Projects from "./pages/Projects/Projects";
import Collaborators from "./pages/Collaborators/Collaborators";

function App() {
  // const baseURL = import.meta.env.MODE === 'production' ? '/brightpathstrategies/' : '/';
  // console.log('mode: ', import.meta.env.MODE)

  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  console.log('baseURL: ', baseURL)

  return (
    <BrowserRouter basename={baseURL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/collaborators" element={<Collaborators />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
