import React from 'react';
import './AppDescription.css';

export const AppDescription = () => {
  return(
    <div>
      <main role="main">
        <div className="row">
          <div className="col-4">
            <article className="about">
              <i className="far fa-check-circle about-icon"></i>
              <h2>Set Your Goals</h2>
              <p>That new camera can be intimidating. Set small goals and learn more each time you go out.
              </p>
            </article>
          </div>
            <div className="col-4">
              <article className="about">
                <i className="far fa-lightbulb about-icon"></i>
                <h2>Find a New Technique</h2>
                <p>Long exposure, timelapse, portraits, macro... Find a technique to approach your goal.</p>
              </article>
            </div>
            <div className="col-4">
              <article className="about">
                <i className="fas fa-camera about-icon"></i>
                <h2>Plan Your Shoots</h2>
                <p>Don't spend all day watching YouTube tutorials. You have a goal, you have a technique, now give it a shot!</p>
              </article>
            </div>
        </div>
      </main>

      <footer role="contentinfo" className="landing-footer">
        <div className="row">
          <div className="col-6">
            <article className="app-info">
              <h2>About f/StopandGo</h2>
              <p>f/StopandGo is built to help photographers of any skill level continue to learn. Planning a photoshoot and remembering the details of a new technique can be challenging, so I've put it all in one place.</p>
            </article>
          </div>
          <div className="col-6">
            <article className="tech-stack">
              <h2>Tech Stack</h2>
              <ul className="tech-stack-list">
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>Node.js</li>
              </ul>
            </article>
          </div>
        </div>
        <div className="code-link-container">
          <a href="https://github.com/AlexWarnes/fStopandGo" target="_blank" rel="noopener noreferrer" className="code-link">
            <div className="frontend-block code-block">
              <p>Frontend Code</p>
              <i className="fab fa-github"></i>
            </div>
          </a>          
          <a href="https://github.com/AlexWarnes/fStopandGo_API" target="_blank" rel="noopener noreferrer" className="code-link">
            <div className="backend-block code-block">
              <p>Backend Code</p>
              <i className="fab fa-github"></i>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default AppDescription;