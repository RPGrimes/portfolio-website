import "./intro.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="skills">

        <div className="bio" id="hello">
          <h2>Hello, my name is</h2><h1> Ryan!</h1><h2>I'm a full stack web developer.</h2>
        </div>

      </div>

      <div className='profiles'>
        <div className="profile">
        <a href="https://github.com/RPGrimes">
          <GitHubIcon className="icon"/>
          <p>My Github</p></a>
        </div>

        <div className="profile">
        <a href="https://www.linkedin.com/in/ryanpgrimes/">
          <LinkedInIcon className="icon" />
          <p>My LinkedIn</p></a>
        </div>
      </div>
    </div>
  )
}
