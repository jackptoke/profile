import React from 'react';
import './About.css';

class About extends React.Component{
    renderAbout(){
        return <div className="about-page">
            <div className="about-text">
            <p>I'm a current student at the <span class="green-text"><strong>Coder Academy</strong></span>, training to become a Full-stack Web Developer.</p><p>I'm proficient in <strong>Ruby on Rails</strong>, <strong>Javascript</strong>, <strong>Node.Js</strong>, <strong>Express.Js</strong>, <strong>React</strong> and <strong>Python</strong>.  I've worked with SQLite, PostgreSQL, MongoDB and MySQL databases.  I am also well-versed with AWS, Heroku, Zeit Now and GitHub.</p>
            </div>
        </div>
    }

    render(){
        return this.renderAbout();
    }
}

export default About;