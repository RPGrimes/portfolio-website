import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import CV from "./components/CV/CV";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss"
import { useState } from "react";
import ParticleBackground from "./components/particleBackground";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="particle-background"><ParticleBackground/>
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <CV/>
        <Contact/>
      </div>
    </div>
    </div>
  );
}

export default App;
