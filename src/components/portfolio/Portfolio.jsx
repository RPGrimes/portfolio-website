import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="title">
        <span><p>Projects</p></span>
      </div>
      <div className='container'>
        <div className='projectWrapper'>
          <ul className='allProjects'>
            <li className='project' id='acebookProject'>
              <a className='projectLink' target="_blank" href="https://github.com/RPGrimes">
                {/* LINK ABOVE NEEDS UPDATING */}
                <figure className="projectGif" id="acebook">
                  <img src="assets/acebook.gif" alt="Acebook"/> <h5>Acebook</h5>
                </figure>
              </a> 
              <div className="projectInfo">
                <h2>Acebook</h2>
                <p className="tools">Tools: Rails, RSpec, Capybara, PostgreSQL, Heroku</p>
                <br></br>
                <p>This is a clone of Facebook, build over the space of a week during Makers Academy. The project allows users to post on a communal wall, like and comment on posts, allows users to remove their own likes and comments and includes a chatroom feature.
                  We used Ruby On Rails as our web framework, and hosted the application on Heroku. 
                  This project features all the CRUD operations.</p>
              </div>
            </li>
            <li className='project' id="newsroom">
            <div className="projectInfo">
              <h2>Gibraltar News Summary</h2>
                <p className="tools">Tools: Vanilla JS, Guardian API</p>
                <br></br>
                <p>A single page web app which reads and summarises cryptocurrency news from the Guardian API. 
                  The application makes a request to the API and sends a response back to my client with the latest stories 
                  related to Gibraltar from the Guardian.</p>
                </div>
              <a className='projectLink' target="_blank" href="https://github.com/RPGrimes/news-summary-challenge">
                <figure className="projectGif" id="newsApp">
                  <img src="assets/GibraltarNewsApp.gif" alt="Gibraltar News App"/> <h5>Gibraltar News App</h5>
                </figure>
              </a> 
            </li>
            <li className='project' id='bankTechTestSection'>
              <a className='projectLink' target="_blank" href="https://github.com/RPGrimes/bankTechTest">
                <figure className="projectGif" id="bankTechTest">
                  <img src="assets/bankTechTest.gif" alt="bankTechTest"/> <h5>Bank Tech Test</h5>
                </figure>
              </a> 
              <div className="projectInfo">
                <br></br>
                <h2>Bank Tech Test</h2>
                <p className="tools">Tools: Vanilla JS, Node JS, Console, Jest</p>
                <br></br>
                <p>This is an example of a coding test, built in Javascript and tested using the Jest testing framework. 
                  A user can add multiple transactions (both withdraws and deposits). A user can also
                  request for a statement of their previous transactions on the account.</p>
              </div>
            </li>
          </ul>
      </div>
      </div>
      </div>
  )
}