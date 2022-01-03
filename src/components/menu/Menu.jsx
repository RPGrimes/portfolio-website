import "./menu.scss";
// import setMenu from "../setmenu/setMenu.jsx";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#CV">CV</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact Details</a>
        </li>
      </ul>
    </div>
  )
}