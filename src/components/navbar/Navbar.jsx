import "./navbar.scss"
import {FaceOutlined} from "@material-ui/icons"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <h1 className="name"><FaceOutlined className='icon'/> Ryan Grimes</h1>
          <h3><a href="#intro" className="logo">Intro</a></h3>
          <h3><a href="#portfolio" className="logo">Porfolio</a></h3>
          <h3><a href="#contact" className="logo">Contact</a></h3>
        <div className="itemContainer">
          <span>123456</span>
        </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}