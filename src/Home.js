import React from 'react';
import './Home.css';

class Home extends React.Component{
    renderHome(){
        const htmls = <div className="page">
             <div class="hero-text display-font">
                <span class="green-text">EXCELLENCE</span> IS A HABIT,
            </div>
            <div class="hero-text2 display-font">
                NOT AN <span class="green-text">ACT</span>.
            </div>
        <div className="hero-text3 display-font"><span class="green-text">EXCELLENCE</span> <br/>IS A HABIT,<br/> NOT AN <span class="green-text">ACT</span>.</div>
      </div>;
      return htmls;
    }

    render(){
        return this.renderHome();
    }
}

export default Home;