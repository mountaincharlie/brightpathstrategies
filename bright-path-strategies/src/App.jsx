// import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import './App.scss'
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Approach from "./pages/Approach/Approach";
// import Projects from "./pages/Projects/Projects";
// import Collaborators from "./pages/Collaborators/Collaborators";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Home />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/collaborators" element={<Collaborators />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
