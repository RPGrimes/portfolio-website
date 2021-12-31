import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">CV</a>
        </li>
        <li>
          <a href="#contact">Contact Details</a>
        </li>
      </ul>
    </div>
  )
}