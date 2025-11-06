import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Bio from "./Sections/Bio";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Home from "./Sections/Home";
import NavBar from "./NavBar";

export default function App() {
  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">Created by Rob Harmer</footer>
    </>
  );
}
