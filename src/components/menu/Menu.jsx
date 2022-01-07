import "./menu.scss";
import SetMenu from "../setmenu/setMenu.jsx";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <SetMenu page="#intro" sectionName="Home" setMenuOpen={setMenuOpen}/>
        <SetMenu page="#about" sectionName="About" setMenuOpen={setMenuOpen}/>
        <SetMenu page="#portfolio" sectionName="Projects" setMenuOpen={setMenuOpen}/>
        <SetMenu page="#contact" sectionName="Contact Details" setMenuOpen={setMenuOpen}/>
        
      </ul>
    </div>
  )
}