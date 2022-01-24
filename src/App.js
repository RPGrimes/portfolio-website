import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss"
import { useState } from "react";
import ParticleBackground from "./components/particleBackground";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="app">
        <div className="body-particles">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
            <Intro/>
            <About/>
            <Portfolio/>
            {/* <Contact/> */}
          </div>
        </div>
      </div>
      <div className="particle-background"><ParticleBackground/></div>
    </>
  );
}

export default App;
