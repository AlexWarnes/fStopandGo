import React from 'react';
import './AppDescription.css';

export default class AppDescription extends React.Component{
    render(){
        return(
            <div>
                <main role="main">
                    <article className="about">
                        <i className="far fa-check-circle about-icon"></i>
                        <h2>Meet Your Goals</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Temporibus aliquam, ut esse libero natus praesentium?</p>
                    </article>

                    <article className="about">
                        <i className="fas fa-camera about-icon"></i>
                        <h2>Plan Your Shoots</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptates quam quae optio recusandae molestias alias?</p>
                    </article>

                    <article className="about">
                        <i className="far fa-lightbulb about-icon"></i>
                        <h2>Learn New Techniques</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laboriosam, dolorem quis. Enim corporis eaque maxime.</p>
                    </article>
                </main>

                <footer role="contentinfo" className="landing-footer">
                    <article className="app-info">
                        <h2>About f/StopandGo</h2>
                        <p>This is a project. Lorem ipsum dolor sit 
                        amet consectetur adipisicing elit. Consequatur repellendus ea 
                        placeat iure quam nostrum aperiam! Porro cupiditate molestiae accusantium.</p>
                    </article>

                    <article className="tech-stack">
                        <h2>Tech Stack</h2>
                        <ul className="tech-stack-list">
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </article>

                        <a href="https://github.com/AlexWarnes/Plan-and-Shoot_API" target="_blank" rel="noopener noreferrer" className="code-link">
                            <div className="backend-block code-block">
                                <p>Back-end </p>
                                <i className="fab fa-github"></i>
                            </div>
                        </a>
                        <a href="https://github.com/AlexWarnes/Plan-and-Shoot" target="_blank" rel="noopener noreferrer" className="code-link">
                            <div className="frontend-block code-block">
                                <p>Front-end</p>
                                <i className="fab fa-github"></i>
                            </div>
                        </a>
                </footer>
            </div>
        );
    }
}