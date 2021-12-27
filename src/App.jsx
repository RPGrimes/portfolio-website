import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
