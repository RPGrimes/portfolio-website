import "./intro.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="skills">

        <div className="bio" id="hello">
          <h2>Hello, my name is</h2><h1> Ryan!</h1><h3>I'm a full stack web developer.</h3>
        </div>

      </div>

      <div className='profiles'>
        <div className="profile">
        <a href="https://github.com/RPGrimes">
          <GitHubIcon className="icon"/>
          <p>My Github</p></a>
        </div>

        <div className="profile">
        <a href="https://docs.google.com/presentation/d/1-uBieG_R5u-NvwhT7xLpx46s4v4jCQUqwHug0It2erc/edit#slide=id.p">
          <SchoolIcon className="icon"/>
          <p>My CV</p></a>
        </div>

        <div className="profile">
        <a href="https://www.linkedin.com/in/ryanpgrimes/">
          <LinkedInIcon className="icon" />
          <p>My LinkedIn</p></a>
        </div>
      </div>


      <div className="arrow">
        <a href="#about">
          <img src="assets/whitearrow.png" alt="down-arrow"/>
        <p>Click to enter site</p>
        </a>
      </div>
      
    </div>
  )
}
