import "./about.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <p>About Me</p>
      </div>
      <div className="about-me">
        <div className="bio" id="about">
          <p>I am a full stack web developer looking to join a team in a positive and supportive environment where principles such as TDD are followed and where a growth mindset is encouraged.</p>
          <p>I am full committed to the philosophy of life-long learning.</p>
          <p>The unique blend of creativity, logic, technology and an almost unlimited scope to develop and learn drives my fascination and passion for web development.</p>
          <p>When I'm not at my computer, I enjoy spending my time playing sports, indulging in new cuisines and enjoying my PlayStation!</p>
        </div>

        <div className="imgContainer">
          <div className="logo" id="javascript">
            <a href="https://www.javascript.com/">
              <img src="assets/jslogo.png" alt="JavaScript"/>
            </a> 
            <a href="https://reactjs.org/">
              <img src="assets/reactlogo.png" alt="React"/>
            </a>
            <a href="https://nodejs.org/en/">
              <img src="assets/nodejslog.png" alt="Node"/>
            </a> 
            <a href="https://jestjs.io/">
              <img src="assets/jest-logo.png" alt="Jest"/> 
            </a> 
            <p>Javascript</p>
          </div>
        
          <div className="logo" id="ruby">
            <a href="https://www.ruby-lang.org/en/">
              <img src="assets/ruby-logo.png" alt="Ruby"/>
            </a>
            <a href="https://rubyonrails.org/">
              <img src="assets/railslogo.png" alt="Rails"/>
            </a>
            <a href="http://sinatrarb.com/">
              <img src="assets/sinatra.png" alt="Sinatra"/>
            </a>
            <a href="https://rspec.info/">
              <img src="assets/rspec-logo.png" alt="RSpec"/>
            </a>
            <p>Ruby</p>
          </div>

          <div className="logo" id="other">
            <a href="https://git-scm.com/">
              <img src="assets/gitlogo.png" alt="Git"/>
            </a>
            <a href="https://html.spec.whatwg.org/multipage/">
              <img src="assets/htmllogo.png" alt="HTML"/>
            </a>
            <a href="https://www.w3.org/Style/CSS/">
              <img src="assets/csslogo.png" alt="CSS"/>
            </a>
            <a href="https://sass-lang.com/">
              <img src="assets/sasslogo.png" alt="Sass"/>
            </a>
            <p>Other</p>
          </div>
        </div>
      </div>
    </div>
  )
}

