import "./intro.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="skills">
        <div className="imgContainer">
          <div className="logo" id="javascript">
            <img src="assets/jslogo.png" alt="JavaScript"/>
            <img src="assets/reactlogo.png" alt="React"/>
            <img src="assets/nodejslog.png" alt="Node"/>
            <img src="assets/jest-logo.png" alt="Jest"/>
            <h5>Javascript</h5>
          </div>
          <div className="logo" id="ruby">
            <img src="assets/ruby-logo.png" alt="Ruby"/>
            <img src="assets/railslogo.png" alt="Rails"/>
            <img src="assets/sinatra.png" alt="Sinatra"/>
            <img src="assets/rspec-logo.png" alt="RSpec"/>
            <h5>Ruby</h5>
          </div>
          <div className="logo" id="other">
            <img src="assets/gitlogo.png" alt="Git"/>
            <img src="assets/htmllogo.png" alt="HTML"/>
            <img src="assets/csslogo.png" alt="CSS"/>
            <img src="assets/sasslogo.png" alt="Sass"/>
            <h5>Other</h5>
          </div>
        </div>
      </div>

      <div className='profiles'>
        <h1><GitHubIcon className="icon"/><a href="https://github.com/RPGrimes">My Github</a></h1>
        <h1><LinkedInIcon className="icon"/><a href="https://www.linkedin.com/in/ryanpgrimes/">My LinkedIn</a></h1>
      </div>
    </div>
  )
}
