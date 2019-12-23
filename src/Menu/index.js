import React from 'react';
import {Link} from '@reach/router';

class Menu extends React.Component {
    constructor(props) {
    // this.menuNode = props.menuNode;
    super(props);
    this.state = {
        menuClassName: "menu",
        unactivated: false
        }
    }

    toggleMenuClassName = () =>{
        if (!this.state.unactivated){
            this.setState({menuClassName: "menu menu_activated" });
        }
        else{
            this.setState({menuClassName: "menu" });
        }
        this.setState({ unactivated: !this.state.unactivated });
    }
    
    renderMenu(){
        const htmls = <div className={`${this.state.menuClassName}`}>
        <nav className="menu__nav">
          <ul className="r-list menu__list">
            <li className="menu__group">
              <Link to="/" className="r-link menu__link">Home</Link>
            </li>
            <li className="menu__group">
              <Link to="/about" className="r-link menu__link">About</Link>
            </li>
            <li className="menu__group">
              <Link to="/services" className="r-link menu__link">Services</Link>
            </li>
            <li className="menu__group">
              <a href="#0" className="r-link menu__link">Portfolio</a>
            </li>
            <li className="menu__group">
              <a href="#0" className="r-link menu__link">Blog</a>
            </li>
            <li className="menu__group">
              <Link to="/contacts" className="r-link menu__link">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="menu__toggle">
          <button className="r-button menu__hamburger" onClick={this.toggleMenuClassName} >
            <span className="m-hamburger">
              <span className="m-hamburger__label">Open menu</span>
            </span>
          </button>
        </div>
      </div>;
      return htmls;
    }

    render(){
        return this.renderMenu();
    }
}

export default Menu;