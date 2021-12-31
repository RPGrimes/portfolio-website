import "./navbar.scss"
import {FaceOutlined} from "@material-ui/icons"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <h2><FaceOutlined className='icon'/> Ryan Grimes</h2>
          <h3><a href="#intro" className="logo">Intro</a></h3>
        <div className="itemContainer">
          
          <span>123456</span>
        </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  )
}