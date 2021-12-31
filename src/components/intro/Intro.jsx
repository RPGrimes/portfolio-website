import "./intro.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Intro() {
  return (
    <div className="intro">
      <div className='github'>
        <h1><GitHubIcon className="icon"/><a href="https://github.com/RPGrimes">My Github</a></h1>
      </div>
      <div className="linkedin">
        <h1><LinkedInIcon className="icon"/><a href="https://www.linkedin.com/in/ryanpgrimes/">My LinkedIn</a></h1>
      </div>
    </div>
  )
}




