import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import About from "./components/About";
import About2 from "./components/About2";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Project1 from "./components/Project1";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { Parallax } from "react-parallax";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Home2 />
      {/* <About /> */}
      <Parallax
        blur={10}
        bgImage="path/to/image.jpg"
        bgImageAlt="the cat"
        strength={200}
      >
        <About2 />
        <Skill />
        {/* <Projects /> */}
        <Project1 />
        <Education />
        <Contact />
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;
