import "./App.css";
import Header from "./Header";
import Bio from "./Sections/Bio";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Bio />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">Created by Rob Harmer</footer>
    </>
  );
}
