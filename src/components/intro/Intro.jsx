import "./intro.scss"
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className='github'>
        <h1><GitHubIcon className="githubIcon"/><a href="https://github.com/RPGrimes">My Github</a></h1>
      </div>
    </div>
  )
}

// export default function Navbar({ menuOpen, setMenuOpen }) {
//   return (
//         <div className="left">
//           <h1 className="name"><FaceOutlined className='icon'/> Ryan Grimes</h1>
//           <div className="itemContainer">
//            <span></span>
//           </div>
//         </div>
//   );
// }





