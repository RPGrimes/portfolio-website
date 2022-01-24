import "./intro.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      strings: ["Welcome to my website!", "I am a full stack web developer."],
    });
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="skills">

        <div className="bio" id="hello">
          <h2>Hello, my name is</h2><h1> Ryan</h1>
          <h3> .<span ref={textRef}></span></h3>
        </div>

      </div>

      <div className='profiles'>
        <div className="profile" id="github">
        <a href="https://github.com/RPGrimes">
          <GitHubIcon className="icon"/>
          <p>My Github</p></a>
        </div>

        <div className="profile" id="CV">
        <a href="assets/RyanGrimesCV.pdf">
          <SchoolIcon className="icon"/>
          <p>My CV</p></a>
        </div>

        <div className="profile" id="linkedin">
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
